import { useState } from "react";
import ItemList from "./ItemList";
// This is controlled component which is controlled by its parent which is Restaurant menu component.
const RestaurantCategory = ({data, showItems, setShowIndex, dummy}) => {

// If restaurant category component controlled itself then it is uncontrolled component and if it is controlled by its parent component then it is controlled component.
    // const [showItems,setShowItems] = useState(false);

    // const handleClick = () => {
    //     console.log('Clicked');
    //     setShowItems(!showItems);
    // }

      const handleClick = () => {
        console.log('Clicked');
        setShowIndex();
    }

    

    console.log(data);
    return(
        <div>
            {/* Accordian Header */}

            <div className="w-6/12 mx-auto bg-white p-4 my-4">
            {/* <div className="flex justify-between cursor-pointer" onClick={handleClick}> */}
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>  
                <span className="font-bold text-lg">
                    {data.title} ({data.itemCards.length})</span>
                <span>🔽</span>
                  {/* Accordian Data */}
                  </div>
              {showItems && <ItemList items={data.itemCards} dummy = {dummy}/>}
        
            </div>

          

        </div>
    )
}

export default RestaurantCategory;