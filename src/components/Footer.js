import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-3">About Us</h3>
          <p className="text-gray-400">
            Experience the best food delivery service in your city. Fresh, fast, and affordable!
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/about" className="hover:text-white transition">About</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-white transition">Terms & Conditions</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#"><img src="https://img.icons8.com/?size=96&id=uLWV5A9vXIPu&format=png" alt="Facebook" className="w-6 h-6 hover:scale-110 transition-transform" /></a>
            <a href="#"><img src="https://img.icons8.com/?size=128&id=bG29Ckcdp6YP&format=png" alt="Twitter" className="w-6 h-6 hover:scale-110 transition-transform" /></a>
            <a href="#"><img src="https://img.icons8.com/?size=160&id=BrU2BBoRXiWq&format=png" alt="Instagram" className="w-6 h-6 hover:scale-110 transition-transform" /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Swiggy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;



// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         <div className="footer-section">
//           <h3>About Us</h3>
//           <p>Experience the best food delivery service in your city. Fresh, fast, and affordable!</p>
//         </div>
//         <div className="footer-section">
//           <h3>Quick Links</h3>
//           <ul>
//             <li><a href="/about">About</a></li>
//             <li><a href="/contact">Contact</a></li>
//             <li><a href="/privacy">Privacy Policy</a></li>
//             <li><a href="/terms">Terms & Conditions</a></li>
//           </ul>
//         </div>
//         <div className="footer-section">
//           <h3>Follow Us</h3>
//           <div className="social-icons">
//             <a href="#"><img src="https://img.icons8.com/?size=96&id=uLWV5A9vXIPu&format=png" alt="Facebook" /></a>
//             <a href="#"><img src="https://img.icons8.com/?size=128&id=bG29Ckcdp6YP&format=png" alt="Twitter" /></a>
//             <a href="#"><img src="https://img.icons8.com/?size=160&id=BrU2BBoRXiWq&format=png" alt="Instagram" /></a>
//           </div>
//         </div>
//       </div>
//       <div className="footer-bottom">
//         <p>© {new Date().getFullYear()} Swiggy. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
