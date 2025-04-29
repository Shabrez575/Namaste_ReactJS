// THIS IS THE WAY TO IMPORT NAMED EXPORT USING CURLY BRACES {}.
import { useEffect, useState, useContext } from "react";
import { LOGO_URL } from "../utils/common";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {

  //JS variable
// let btnName = 'login';

// In case of functional component we can use useContext like below ways:
const {loggedInUser} = useContext(userContext);

console.log(loggedInUser);

console.log('Header Render');

useEffect(() => {
  console.log('useEffect Called');
},[]);

const [btnNameReact, setbtnNameReact] = useState('login')

const onlineStatus = useOnlineStatus();

// Selector - Subscribing to the store using selector (This is way to read data of cart.)

const cartItems = useSelector((store) => store.cart.items);
console.log(cartItems);

    return (
      <div className='header flex justify-between bg-white-100 shadow-lg sticky top-0 z-50 backdrop-blur-md bg-white/35'>
        <div className='logo-container'>
           <img className='logo w-25 shadow-lg'
           src={LOGO_URL}>
  
           </img>
        </div>
        <div className='nav-items'>
          <ul className="flex p-4 m-4 flex items-center space-x-2">
            <li className="px-2 text-sm font-medium text-gray-700"> 
              online status: {onlineStatus ? '✅' : '🔴'}
            </li>
            <li className="px-2">
              <Link to='/' className="navItems">Home</Link>
            </li>
            <li className="px-2">
              {/* <a href="/about">
              About Us
              </a> */}
            <Link to='/about' className="navItems hover:text-orange-500 font-medium transition">About Us</Link>
            </li>
            <li className="px-2">
             <Link to='/contact' className="navItems hover:text-orange-500 font-medium transition">Contact Us</Link>
            </li>
            <li className="px-2">
             <Link to='/grocery' className="navItems hover:text-orange-500 font-medium transition">🍅 Mart</Link>
            </li>
            <li className="px-2">
              {/* <Link to="/cart" className="navItems text-xl hover:scale-110 transition-transform duration-300">
              🛒({cartItems.length})
              </Link> */}
              <Link to="/cart" className="navItems text-xl hover:scale-110 transition-transform duration-300">
               Cart({cartItems.length})
              </Link>
            </li>

            <button className="login px-2 mx-2 font-semibold bg-white-100 border border-dark rounded-md hover:bg-orange-500 hover:text-white cursor-pointer"  
            onClick={() => 
              {
                btnNameReact === 'login' 
                ? setbtnNameReact('logout') 
                : setbtnNameReact('login');
               // console.log(btnNameReact);
              }}>{btnNameReact}</button>
              <li>{loggedInUser}</li>
          </ul>
        </div>
      </div>
    );
  };

export default Header;