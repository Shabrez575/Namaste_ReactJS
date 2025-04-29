import { useEffect, useState } from "react";
import RestaurantCard, {withStatusLabel} from "./RestaurantCard";
import ShimmerContainer from "./ShimmerContainer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

    // local STATE VARIABLE IN REACT 
    // Whenever a state variable update react will re render the 
    // const [listOfRest,setListOfRest] = useState([{
    //     info:{
    //     "id": "304041",
    //     "name": "Shagun Hotel",
    //     "cloudinaryImageId": "by3uz0e7eszzzqlvmpmz",
    //     "locality": "Garhpar",
    //     "areaName": "Qamruddin Ganj",
    //     "costForTwo": "₹300 for two",
    //     "cuisines": [
    //       "Sweets",
    //       "Bakery",
    //       "Desserts",
    //       "Snacks",
    //       "Indian",
    //       "South Indian"
    //     ],
    //     "avgRating": 3.5,
    //     "veg": true,
    //     "parentId": "182632",
    //     "avgRatingString": "3.5",
    //     "totalRatingsString": "4.5K+"
    //     }
    //  },
    //  {
    //     info:{
    //         "id": "304042",
    //         "name": "Sheetal Chhaya",
    //         "cloudinaryImageId": "by3uz0e7eszzzqlvmpmz",
    //         "locality": "Garhpar",
    //         "areaName": "Qamruddin Ganj",
    //         "costForTwo": "₹300 for two",
    //         "cuisines": [
    //           "Sweets",
    //           "Bakery",
    //           "Desserts",
    //           "Snacks",
    //           "Indian",
    //           "South Indian"
    //         ],
    //         "avgRating": 4.2,
    //         "veg": true,
    //         "parentId": "182632",
    //         "avgRatingString": "4.2",
    //         "totalRatingsString": "4.5K+"
    //         },
    //  }   ]);

    // Using Mock Data
    // const [listOfRest,setListOfRest] = useState(resList);

    // Now Using live swiggy API.
    // Local State Variable - super powerful variable
    const [listOfRest,setListOfRest] = useState([]);

    const [filteredRest, setfilteredRest] = useState([]);

    const [searchText, setSearchText] = useState('');

    const RestaurantCardStatus = withStatusLabel(RestaurantCard);
    // Whenever state variable update, react triggers a reconcillation cycle (re-render the component.) 
    console.log('Body Rendered', listOfRest);
    
    useEffect(() => {
      fetchData();
    },[]);

    const fetchData = async () => {
      
    // Patna
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940947&lng=85.1375645&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const json = await data.json();

    console.log(json);

   setListOfRest(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
   setfilteredRest(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false){
    return (
      <h1 className="onlineStatus m-[250px] flex justify-center">
        Looks Like you are offline! Please check your internet connection. <span className=""> 💔 </span>
      </h1>
    )
  }

    // New Way to show the page loading is using shimmer UI

    if(listOfRest.length === 0)
    {
        return (
          <div className="shimmer-container flex flex-wrap justify-center gap-3 mt-[60px]">
            {[...Array(8)].map((_, index) => ( // Renders 6 shimmer cards
              <ShimmerContainer key={index} />
            ))}
          </div>
        );
    }
  
    return (
      <div className='body'>
      
        <div className="filter flex justify-between mx-15">
          <div className="search">
            <input type="text" data-testid="searchInput" className="search-box border border-solid border-black rounded-lg m-4 px-2" 
            value={searchText} onChange={(e) => {
              setSearchText(e.target.value);
            }}>
            </input>
            <button className="search-btn px-4 py-1 m-3 bg-orange-400 border border-dark rounded-sm text-md hover:bg-orange-600 text-white cursor-pointer"
        onClick={() => {
          const filteredData = listOfRest.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
          );

         setfilteredRest(filteredData);
        }}
      >
        Search
      </button>
          </div>
            <button className="px-4 py-1 m-3 bg-orange-400 border border-dark rounded-sm text-md hover:bg-orange-600 text-white cursor-pointer" onClick={() => {
              
                const filteredList = listOfRest.filter(
                (res) => res.info.avgRating > 4.0 );

                setListOfRest(filteredList);

                console.log(setListOfRest(filteredList));
            }}>
                Top Rated
            </button>
        </div>
        {/* Key should be in the parent JSX */}
        <div className='res-container flex flex-wrap justify-center'>  
          {

            filteredRest.map((restaurant) => ( 
              
            <Link 
            key={restaurant.info.id} 
            to={'/restaurants/'+ restaurant.info.id}
            >
              {/* If the restaurant is promoted then add a status to it. */}
              {
               restaurant.info.isOpen ? (
               <RestaurantCardStatus restData = {restaurant}/>
              ) : ( 
              <RestaurantCard restData = {restaurant} />
               ) 
              }             
            </Link>
            ))
          }
        </div>
      </div>
    )
  }

  export default Body;