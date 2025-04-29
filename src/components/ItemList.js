import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/common";

const ItemList = ({items, dummy}) => {

    console.log(items);
    console.log(dummy);

    const dispatch = useDispatch();

    const handleAddItems = (item) => {
        // Dispatch an action
        // dispatch(addItem('Whatever I put here it will go inside my cart'))
        // this addItem pass like this to the cartSlice {payload:'cart data'}

        // If you want actual data to sent to the cart then do like this
        dispatch(addItem(item))

    }

    return (<div>
        {items.map((item) => (
            <div 
            data-testid = "foodItems"
            key={item.card.info.id} className="border-b border-gray-300 my-7 text-left flex justify-between">
                
                <div className="py-2 mx-5 my-3 w-9/12">
                    <p className="font-semibold">{item.card.info.name}</p>
                    <p className="font-semibold">₹{(item.card.info.price || item.card.info.defaultPrice)/ 100 }</p>
                    <p className="py-2"> <span className="text-green-800 text-sm font-bold">⭑ {item.card.info.ratings.aggregatedRating?.rating}</span> <span className="text-gray-500 text-sm">({item.card.info.ratings.aggregatedRating?.ratingCountV2})</span></p>
                    <p className="text-sm text-gray-500 font-semibold text-wrap">{item.card.info.description}</p>
                </div>
                {/* <div className="flex-shrink-0 w-[150px] h-[100px] my-4 overflow-hidden"> */}

                {/* <div className="py-2 mx-5 my-3 w-3/12"> 
                    <img src={CDN_URL + item.card.info.imageId} 
                     className="w-[150px] h-[100px] object-cover rounded-md" 
                     alt={item.card.info.name}
                    />
                    <button className="text-green-500 px-5 my-2 border border-gray-300 rounded-md absolute">ADD</button>
                </div> */}
               <div className="py-2 mx-5 my-3 w-3/12 relative">
                   <div className="relative w-[150px] h-[100px]">
                       <img src={CDN_URL + item.card.info.imageId} className="w-full h-full object-cover rounded-md"
                        alt={item.card.info.name} />
                       <button className="font-bold absolute left-1/2 bottom-[-14px] 
                       transform -translate-x-1/2 bg-white text-green-600 
                       border-gray-300 px-10 py-2 text-sm rounded-md 
                       shadow-md hover:bg-green-100 
                       cursor-pointer text-lg" 
                    // onClick={handleAddItems}>
                       onClick={() => handleAddItems(item)}>
                       ADD
                      </button>
                   </div>
              </div>
 
            </div>
        ))}
        </div>
    );

};

export default ItemList;