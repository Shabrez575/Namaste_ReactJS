// THIS IS THE WAY TO IMPORT NAMED EXPORT USING CURLY BRACES {}.
import { CDN_URL } from "../utils/common";
import userContext from "../utils/userContext";
import { useContext } from "react";

const RestaurantCard = (props) => {
    // Whatever we wish to pass in a component we can passed it as a props and it is an object here.
    console.log(props);
    // We can destructure the object as well it is also possible here like this.
    // const {resName,cuisines} = props;
    // We will see whether the whole big object will come or not
    const {restData} = props;
    // console.log(restData , 'resData');

    const {name, cuisines, avgRating, costForTwo, areaName} = restData?.info;
    const {loggedInUser} = useContext(userContext);

    return (
       <div data-testid = 'resCard' className='res-card relative m-4 p-2 w-[250px] h-[330px] rounded-lg transform hover:scale-105 transition duration-300'>
        {/* // Using cloudinaryImageId */}
        <img className='res-logo rounded-lg h-[150px] w-[250px]' alt='res-logo' 
        src={ CDN_URL + restData.info.cloudinaryImageId} 
        />

        <h3 className="font-bold py-2 text-lg">{name}</h3>
        <h6 className="font-light text-sm text-wrap">{cuisines.join(', ')}</h6>
        <h6 className="font-light text-sm">⭐️ Rating:{avgRating}</h6>
        <h6 className="font-light text-sm">{costForTwo}</h6>
        <h6 className="font-light text-sm">📍 {areaName}</h6>
        <h6 className="font-light text-sm">User: {loggedInUser}</h6>
        
       </div>
    )
  }

  // Higher Order Components
  export const withStatusLabel = (RestaurantCard) => {
   return(props) => {
      console.log(props);
      const {restData} = props;
      const {isOpen} = restData?.info;
      {console.log(restData.info.isOpen)}
      return (
        
         <div className="relative group">
            {/* <label className={`absolute rounded-md text-sm ${isOpen ? 'bg-green-500 text-white' ? 'bg-red-500 text-white'}`}
            >Opened</label> */}

            {/* <label className='absolute rounded-md text-sm bg-green-500 text-white p-1'
            >Opened</label> */}

<label
  className={`absolute rounded-md text-sm z-10 text-white p-1 opacity-0 group-hover:opacity-100 transition duration-300 ${
    isOpen ? 'bg-green-500' : 'bg-red-500'
  }`}
>
  {isOpen ? 'Opened' : 'Closed'}
</label>
            <RestaurantCard {...props}/>
         </div>
      );
   };
  };

  export default RestaurantCard;