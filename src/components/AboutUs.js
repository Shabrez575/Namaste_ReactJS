// import React from "react";
// import User from './User';
// import UserCls from "./UserCls";

// const AboutUs = () => {
//   return (
//     <div className="about-container">
//       {/* Hero Section */}
//       <div className="hero-section">
//         <h1>Welcome to Our Restaurant</h1>
//         <p>Delicious food delivered to your doorstep via Swiggy!</p>
//       </div>

//       {/* Team Section */}
//       <div className="team-section">
//         <h1>Our Team</h1>
//         <User name = {'Md Shabrez Akhtar(Functional Props)'} />
//         <UserCls name = {'Md Shabrez Akhtar(Class Props)'} location = {'Biharsharif(class props)'} />
//       </div>

//       {/* Our Story Section */}
//       <div className="content-section">
//         <h2>Our Story</h2>
//         <p>
//           Established in 2015, our restaurant has been serving fresh and
//           high-quality meals to food lovers. With a focus on taste and hygiene,
//           we ensure every dish brings you joy.
//         </p>
//       </div>

//       {/* Why Choose Us Section */}
//       <div className="content-section">
//         <h2>Why Choose Us?</h2>
//         <ul>
//           <li>🍽️ Fresh & Hygienic Ingredients</li>
//           <li>🚀 Fast & Reliable Swiggy Delivery</li>
//           <li>🌱 Wide Range of Vegetarian & Non-Veg Dishes</li>
//           <li>🏆 Rated 4.8/5 by Thousands of Happy Customers</li>
//         </ul>
//       </div>

//       {/* Contact Section */}
//       <div className="contact-section">
//         <h2>Contact Us</h2>
//         <p>📍 Location: 123 Food Street, Your City</p>
//         <p>📞 Phone: +91 98765 43210</p>
//         <p>📧 Email: support@restaurant.com</p>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;


// Make functional component into class based component

// import React from "react";
// import User from './User';
// import UserCls from "./UserCls";

// class AboutUs extends React.Component {
//   constructor(props){
//     super(props);

//     console.log('Parent Constructor');
//   }

//   componentDidMount(){
//     console.log('Parent Component Did Mount');

//     // We Perform API call inside componentDidMount 
//     // API calls
//     // First constructor will called then Render will called now my component is render and now
//     // API calls will happen inside componentDidMount and re render the component after getting data 
//     // from API.
//    }


// render() {

//   console.log('Parent Render');
//   return (
//     <div className="about-container">
//       {/* Hero Section */}
//       <div className="hero-section">
//         <h1>Welcome to Our Restaurant</h1>
//         <p>Delicious food delivered to your doorstep via Swiggy!</p>
//       </div>

//       {/* Team Section */}
//       <div className="team-section">
//         <h1>Our Team</h1>
//         {/* <User name = {'Md Shabrez Akhtar(Functional Props)'} /> */}
//         {/* <UserCls name = {'First (Class Props)'} location = {'Biharsharif(class props)'} /> */}
//         {/* <UserCls name = {'Second (Class Props)'} location = {'Biharsharif(class props)'} /> */}
//         <UserCls />
//       </div>

//       {/* Our Story Section */}
//       <div className="content-section">
//         <h2>Our Story</h2>
//         <p>
//           Established in 2015, our restaurant has been serving fresh and
//           high-quality meals to food lovers. With a focus on taste and hygiene,
//           we ensure every dish brings you joy.
//         </p>
//       </div>

//       {/* Why Choose Us Section */}
//       <div className="content-section">
//         <h2>Why Choose Us?</h2>
//         <ul>
//           <li>🍽️ Fresh & Hygienic Ingredients</li>
//           <li>🚀 Fast & Reliable Swiggy Delivery</li>
//           <li>🌱 Wide Range of Vegetarian & Non-Veg Dishes</li>
//           <li>🏆 Rated 4.8/5 by Thousands of Happy Customers</li>
//         </ul>
//       </div>

//       {/* Contact Section */}
//       <div className="contact-section">
//         <h2>Contact Us</h2>
//         <p>📍 Location: 123 Food Street, Your City</p>
//         <p>📞 Phone: +91 98765 43210</p>
//         <p>📧 Email: support@restaurant.com</p>
//       </div>
//     </div>
//   );
// };
// };

// export default AboutUs;

import React from "react";
import User from './User';
import UserCls from "./UserCls";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    console.log('Parent Constructor');
  }

  componentDidMount() {
    console.log('Parent Component Did Mount');
    // Perform API calls here if needed
  }

  render() {
    console.log('Parent Render');
    return (
      <div className="about-container font-sans">
        {/* Hero Section */}
        <div className="hero-section bg-yellow-100 py-16 px-4 text-center shadow-md">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Our Restaurant</h1>
          <p className="text-lg text-gray-700">Delicious food delivered to your doorstep via Swiggy!</p>
        </div>

        {/* Team Section */}
        <div className="team-section py-12 px-6 bg-white text-center">
          <h1 className="text-3xl font-semibold mb-6 text-gray-900">Our Team</h1>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Uncomment or add more if needed */}
            {/* <User name={'Md Shabrez Akhtar (Functional Props)'} /> */}
            {/* <UserCls name={'First (Class Props)'} location={'Biharsharif'} /> */}
            {/* <UserCls name={'Second (Class Props)'} location={'Biharsharif'} /> */}
            <UserCls />
          </div>
        </div>

        {/* Our Story Section */}
        <div className="content-section bg-gray-50 py-12 px-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Established in 2015, our restaurant has been serving fresh and
            high-quality meals to food lovers. With a focus on taste and hygiene,
            we ensure every dish brings you joy.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="content-section py-12 px-6 text-center bg-white">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Why Choose Us?</h2>
          <ul className="text-gray-700 space-y-3 text-lg list-inside max-w-xl mx-auto text-center">
            <li>🍽️ Fresh & Hygienic Ingredients</li>
            <li>🚀 Fast & Reliable Swiggy Delivery</li>
            <li>🌱 Wide Range of Vegetarian & Non-Veg Dishes</li>
            <li>🏆 Rated 4.8/5 by Thousands of Happy Customers</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="contact-section bg-gray-100 py-12 px-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-2">📍 Location: 123 Food Street, Your City</p>
          <p className="text-gray-700 mb-2">📞 Phone: +91 98765 43210</p>
          <p className="text-gray-700">📧 Email: support@restaurant.com</p>
        </div>
      </div>
    );
  }
}

export default AboutUs;
