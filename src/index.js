import React, {lazy, Suspense, useEffect, useState, useContext} from 'react';
import ReactDOM from "react-dom/client";
import index from "./index";
import Header from './components/Header';
import Body from './components/Body';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Error from './components/Error';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from './components/RestaurantMenu';
import userContext from './utils/userContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';
// import Grocery from './components/Grocery';

/*
- Header 
  - Logo
  - Nav Items
- Body
  - Search
  - RestaurantContainer
    - RestaurantCard
- Footer
  - Copyright
  - Links
  - Address
  - Contact    
*/


// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On Demand Loading

const Grocery = lazy(() => import('./components/Grocery'));

const AppLayout = () => {

// If we want to change the default user value of userContext component
// or suppose someone loggedin as a user

const [userName, setUserName] = useState();

// let suppose we have a authentication code present here
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: 'Akhtar,Md.Shabrez',
    };
    setUserName(data.name);
  }, []);


  return (
    
<Provider store={appStore}>   
    {/* This userContext provide wrap my whole app using below component.  */}
    {/* It means in header outlet and footer in all spaces we have loggedinuser available */}
<userContext.Provider value={{loggedInUser: userName}}>
     <div className='app'>
         <Header />
         <Outlet />
         <Footer />
     </div>
 </userContext.Provider>
</Provider> 




// Commented Code.
//   <div className='app'>
//     <Header />
//     {/* <Body /> */}
//     {/* Using Outlet we are able to passed child routes based on url */}
//     <Outlet />
//     <Footer />
// </div>


  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,

    // Here We Passed route as children
    children: [
      {
        path: '/',
        element:<Body />,
      },
      {
        path: '/about',
        element:< AboutUs />,
      },
      {
        path: '/contact',
        element:<Contact/>,
      },
      {
        path: '/restaurants/:resId',
        element: <RestaurantMenu />,
      },
      {
        path: '/grocery',
        element: <Suspense fallback = {<h1 className='fbk'>Loading....</h1>}><Grocery /></Suspense>,
      },
      {
        path:'/cart',
        element: <Cart />,
      }
    ],
    errorElement: <Error />,
  },
  // {
  //   path: '/about',
  //   element:< AboutUs />,
  // },
  // {
  //   path: '/contact',
  //   element:<Contact/>,
  // }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<AppLayout/>);

root.render(<RouterProvider router={appRouter} />);