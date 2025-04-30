// import { useEffect, useState } from "react";
// import { MENU_API } from "./common";

// const useRestaurantMenu = (resId) => {
//     const [resInfo, setResInfo] = useState(null);

//     useEffect(() => {
//         fetchData();
//     },[]);

//     const fetchData = async () => {
//         const data = await fetch(MENU_API + resId);
//         const json = await data.json();
//         setResInfo(json.data);
//     };

//     return resInfo;
// }

// export default useRestaurantMenu;

import { useEffect, useState } from "react";
import { MENU_API } from "./common";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    if (!resId) return; // Ensure resId is valid before fetching
    fetchData();
  }, [resId]);

  const fetchData = async () => {
    try {
      // Use AllOrigins proxy to bypass CORS issue
      const proxyURL = `https://api.allorigins.win/get?url=${encodeURIComponent(MENU_API + resId)}`;
      const response = await fetch(proxyURL);

      if (!response.ok) throw new Error("Failed to fetch via proxy");

      const { contents } = await response.json();
      const json = JSON.parse(contents);

      setResInfo(json?.data); // Set the restaurant info data
    } catch (error) {
      console.error("Error fetching restaurant menu via AllOrigins proxy:", error);
    }
  };

  return resInfo;
};

export default useRestaurantMenu;
