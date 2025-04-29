import { useState,useEffect } from "react";
import ShimmerContainer from "./ShimmerContainer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
// import { MENU_API } from "../utils/common";

// const RestaurantMenu = () => {

//     const [resInfo, setResInfo] = useState(null);

//     const{resId} = useParams();

//     console.log('RestaurantMenu');
//     useEffect(() => {
//         fetchMenu();
//     },[]);

//     const fetchMenu = async() => {
//         const data = await fetch(MENU_API + resId + '&submitAction=ENTER');
//         const json = await data.json();
//         console.log(json);
//         setResInfo(json.data);
//     };


const RestaurantMenu = () => {
    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    const[showIndex, setShowIndex] = useState();

    const dummy = 'dummy data from Restaurant Menu';

    if (resInfo === null) return <ShimmerContainer />

   // console.log(resInfo?.cards[2]?.card?.card?.info?.name);

   const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    
   const {itemCards} = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
   
   console.log(itemCards);

   console.log(resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
   
   const categories = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.['card']?.['@type'] === 
   "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);

console.log(categories);

   return (
        <div className="menu text-center">
            <h1 className="text-5xl font-bold my-2 p-3">{name}</h1>
            <h2 className="text-lg font-bold">{cuisines.join(', ')}</h2>
            <h3 className="text-sm font-bold">{costForTwoMessage}</h3>

            {/* <ul> */}
                {/* {itemCards.map((items) => (
                    <li key={items.card.info.id}>{items.card.info.name} - {'RS.'+ items.card.info.price / 100 +'-/'}</li>
                )

                )}     */}
                {/* <li>{itemCards[0].card.info.name}</li>
                <li>{itemCards[1].card.info.name}</li>
                <li>{itemCards[2].card.info.name}</li>
                <li>{itemCards[3].card.info.name}</li> */}
            {/* </ul> */}


            {/* Categories Accordian */}
            
            <div className=""> 
                {categories.map((category, index) => 
                (  <RestaurantCategory  
                    data = {category?.card?.card} key={category?.card?.card?.title}
                     
                    //If I want to show first accordian only expanded rest of them collapse then 
                    // Index will come from map functions
                    //showItems = {index === 0 && true}
                    
                    // If I want all accordian will be expanded then
                    // showItems={true}

                     // If I want all accordian will be expanded except 1st accordian category then
                     //showItems={index !== 0 ? true : false}

                     // If I want at one time only one accordian will the show the data then use setShowIndex here to implement.
                     showItems = {index === showIndex ? true : false}
                     setShowIndex = {() => setShowIndex(index)}
                     dummy = {dummy}
                     /> )
              
            )}</div>

        </div>
        
    );
};

export default RestaurantMenu;
