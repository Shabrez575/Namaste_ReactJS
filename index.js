import React from 'react';
import ReactDOM from "react-dom/client";
import index from "./index";

/*
- Header 
  - Logo
  - Nav Item
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

const Header = () => {
  return (
    <div className='header'>
      <div className='logo-container'>
         <img className='logo'
         src="https://img.freepik.com/premium-vector/good-food-logo-design_79169-10.jpg">

         </img>
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};

/*
const RestaurantCard = () => {
  return (
     <div className='res-card' style={styleCard}>
      <img className='res-logo' alt='res-logo' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/9627b05f-f019-4a26-97ec-8840cca0370e_10591.jpg' />
      <h3>KFC</h3>
      <h4>Chicken Fry, Roasted Chicken</h4>
      <h4>4.5 stars</h4>
     </div>
  )
}
*/

// EP - 4; Part - 2.

const RestaurantCard = (props) => {
  // Whatever we wish to pass in a component we can passed it as a props and it is a an object here.
  console.log(props);
  // We can destructure the object as well it is also possible here like this.
  // const {resName,cuisines} = props;
  // We will see whether the whole big object will come or not
  const {restData} = props;
  const {name, cuisines, avgRating, costForTwo, areaName} = restData?.info;
  return (
     <div className='res-card' style={styleCard}>
      {/* <img className='res-logo' alt='res-logo' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/9627b05f-f019-4a26-97ec-8840cca0370e_10591.jpg' /> */}
      {/* // Using cloudinaryImageId */}
      <img className='res-logo' alt='res-logo' 
      src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+ restData.info.cloudinaryImageId} 
      />

      {/* <h3>{props.resName}</h3>
      <h4>{props.cuisines}</h4> */}
      {/* After Destructure the props object*/}
      {/* <h3>{restData.info.name}</h3>
      <h6>{restData.info.cuisines.join(', ')}</h6>
      <h6>Rating:{restData.info.avgRating}</h6>
      <h6>{restData.info.costForTwo}</h6>
      <h6>{restData.info.areaName}</h6> */}
      {/* Using destructure of object*/}
      <h3>{name}</h3>
      <h6>{cuisines.join(', ')}</h6>
      <h6>Rating:{avgRating}</h6>
      <h6>{costForTwo}</h6>
      <h6>{areaName}</h6>
      
     </div>
  )
}

/*
const Body = () => {
  return (
    <div className='body'>
      <div className='search'>Search</div>
      <div className='res-container'>
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  )
}
*/

// EP - 4 ; PART - 2
// const resObj = [
//   {
//   "info": {
//     "id": "788067",
//     "name": "Moti Mahal Delux",
//     "cloudinaryImageId": "a9235d1169d00f23d7f1bb5be543c98c",
//     "locality": "Ranch Road Biharsharif",
//     "areaName": "Garhpar",
//     "costForTwo": "₹350 for two",
//     "cuisines": [
//       "Chinese",
//       "Beverages"
//     ],
//     "avgRating": 4.3,
//     "parentId": "2113",
//     "avgRatingString": "4.3",
//     "totalRatingsString": "500",
//     "sla": {
//       "deliveryTime": 30,
//       "lastMileTravel": 2.8,
//       "serviceability": "SERVICEABLE",
//       "slaString": "30-35 mins",
//       "lastMileTravelString": "2.8 km",
//       "iconType": "ICON_TYPE_EMPTY"
//     },
//     "availability": {
//       "nextCloseTime": "2025-03-12 22:45:00",
//       "opened": true
//     },
//     "badges": {

//     },
//     "isOpen": true,
//     "type": "F",
//     "badgesV2": {
//       "entityBadges": {
//         "imageBased": {

//         },
//         "textBased": {

//         },
//         "textExtendedBadges": {

//         }
//       }
//     },
//     "aggregatedDiscountInfoV3": {
//       "header": "10% OFF",
//       "subHeader": "ABOVE ₹1000",
//       "discountTag": "FLAT DEAL"
//     },
//     "differentiatedUi": {
//       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       "differentiatedUiMediaDetails": {
//         "lottie": {

//         },
//         "video": {

//         }
//       }
//     },
//     "reviewsSummary": {

//     },
//     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     "restaurantOfferPresentationInfo": {

//     },
//     "externalRatings": {
//       "aggregatedRating": {
//         "rating": "--"
//       }
//     },
//     "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//   },
//   "analytics": {
//     "context": "seo-data-306f7454-4da6-4118-b0f5-30db84f30f77"
//   },
//   "cta": {
//     "link": "https://www.swiggy.com/city/biharsharif/moti-mahal-delux-ranch-road-garhpar-rest788067",
//     "type": "WEBLINK"
//   }
// },
// {
//   "info": {
//     "id": "209449",
//     "name": "New Nalanda Mishthan Bhandar",
//     "cloudinaryImageId": "u7kmkqnfzigrfbczy0ok",
//     "locality": "Bihar Sharif",
//     "areaName": "Garhpar",
//     "costForTwo": "₹300 for two",
//     "cuisines": [
//       "Sweets",
//       "Desserts",
//       "Bakery",
//       "Chaat",
//       "Snacks"
//     ],
//     "avgRating": 4,
//     "veg": true,
//     "parentId": "147372",
//     "avgRatingString": "4.0",
//     "totalRatingsString": "18K+",
//     "sla": {
//       "deliveryTime": 29,
//       "lastMileTravel": 3.7,
//       "serviceability": "SERVICEABLE",
//       "slaString": "25-30 mins",
//       "lastMileTravelString": "3.7 km",
//       "iconType": "ICON_TYPE_EMPTY"
//     },
//     "availability": {
//       "nextCloseTime": "2025-03-12 21:15:00",
//       "opened": true
//     },
//     "badges": {
//       "imageBadges": [
//         {
//           "imageId": "v1695133679/badges/Pure_Veg111.png",
//           "description": "pureveg"
//         }
//       ],
//       "textExtendedBadges": [
//         {
//           "iconId": "Akash/Listing%20badge.png",
//           "shortDescription": "Price Match Promise",
//           "fontColor": "#7E808C"
//         }
//       ]
//     },
//     "isOpen": true,
//     "type": "F",
//     "badgesV2": {
//       "entityBadges": {
//         "imageBased": {
//           "badgeObject": [
//             {
//               "attributes": {
//                 "description": "pureveg",
//                 "imageId": "v1695133679/badges/Pure_Veg111.png"
//               }
//             }
//           ]
//         },
//         "textBased": {

//         },
//         "textExtendedBadges": {
//           "badgeObject": [
//             {
//               "attributes": {
//                 "description": "",
//                 "fontColor": "#7E808C",
//                 "iconId": "Akash/Listing%20badge.png",
//                 "shortDescription": "Price Match Promise"
//               }
//             }
//           ]
//         }
//       }
//     },
//     "aggregatedDiscountInfoV3": {
//       "header": "20% OFF",
//       "subHeader": "UPTO ₹50"
//     },
//     "differentiatedUi": {
//       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       "differentiatedUiMediaDetails": {
//         "lottie": {

//         },
//         "video": {

//         }
//       }
//     },
//     "reviewsSummary": {

//     },
//     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     "restaurantOfferPresentationInfo": {

//     },
//     "externalRatings": {
//       "aggregatedRating": {
//         "rating": "--"
//       }
//     },
//     "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//   },
//   "analytics": {
//     "context": "seo-data-306f7454-4da6-4118-b0f5-30db84f30f77"
//   },
//   "cta": {
//     "link": "https://www.swiggy.com/city/biharsharif/new-nalanda-mishthan-bhandar-bihar-sharif-garhpar-rest209449",
//     "type": "WEBLINK"
//   }
// },
// {
//   "info": {
//     "id": "209456",
//     "name": "Bittu's",
//     "cloudinaryImageId": "jhwvmrqk6b5rnq4goeau",
//     "locality": "Shivaji Nagar",
//     "areaName": "Garhpar",
//     "costForTwo": "₹350 for two",
//     "cuisines": [
//       "Bakery",
//       "Pizzas",
//       "Desserts",
//       "Sweets",
//       "Snacks",
//       "Beverages"
//     ],
//     "avgRating": 4.1,
//     "parentId": "47571",
//     "avgRatingString": "4.1",
//     "totalRatingsString": "4.2K+",
//     "sla": {
//       "deliveryTime": 41,
//       "lastMileTravel": 4,
//       "serviceability": "SERVICEABLE",
//       "slaString": "40-45 mins",
//       "lastMileTravelString": "4.0 km",
//       "iconType": "ICON_TYPE_EMPTY"
//     },
//     "availability": {
//       "nextCloseTime": "2025-03-12 21:15:00",
//       "opened": true
//     },
//     "badges": {

//     },
//     "isOpen": true,
//     "type": "F",
//     "badgesV2": {
//       "entityBadges": {
//         "imageBased": {

//         },
//         "textBased": {

//         },
//         "textExtendedBadges": {

//         }
//       }
//     },
//     "aggregatedDiscountInfoV3": {
//       "header": "20% OFF",
//       "subHeader": "UPTO ₹50"
//     },
//     "differentiatedUi": {
//       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       "differentiatedUiMediaDetails": {
//         "lottie": {

//         },
//         "video": {

//         }
//       }
//     },
//     "reviewsSummary": {

//     },
//     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     "restaurantOfferPresentationInfo": {

//     },
//     "externalRatings": {
//       "aggregatedRating": {
//         "rating": "--"
//       }
//     },
//     "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//   },
//   "analytics": {
//     "context": "seo-data-306f7454-4da6-4118-b0f5-30db84f30f77"
//   },
//   "cta": {
//     "link": "https://www.swiggy.com/city/biharsharif/bittus-shivaji-nagar-garhpar-rest209456",
//     "type": "WEBLINK"
//   }
// },
// {
//   "info": {
//     "id": "304041",
//     "name": "Sheetal Chhaya",
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
//     "avgRating": 4.1,
//     "veg": true,
//     "parentId": "182632",
//     "avgRatingString": "4.1",
//     "totalRatingsString": "4.5K+",
//     "sla": {
//       "deliveryTime": 32,
//       "lastMileTravel": 3.5,
//       "serviceability": "SERVICEABLE",
//       "slaString": "30-35 mins",
//       "lastMileTravelString": "3.5 km",
//       "iconType": "ICON_TYPE_EMPTY"
//     },
//     "availability": {
//       "nextCloseTime": "2025-03-12 21:30:00",
//       "opened": true
//     },
//     "badges": {
//       "imageBadges": [
//         {
//           "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
//           "description": "OnlyOnSwiggy"
//         }
//       ]
//     },
//     "isOpen": true,
//     "aggregatedDiscountInfoV2": {

//     },
//     "type": "F",
//     "badgesV2": {
//       "entityBadges": {
//         "imageBased": {
//           "badgeObject": [
//             {
//               "attributes": {
//                 "description": "OnlyOnSwiggy",
//                 "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
//               }
//             }
//           ]
//         },
//         "textBased": {

//         },
//         "textExtendedBadges": {

//         }
//       }
//     },
//     "differentiatedUi": {
//       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       "differentiatedUiMediaDetails": {
//         "lottie": {

//         },
//         "video": {

//         }
//       }
//     },
//     "reviewsSummary": {

//     },
//     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     "restaurantOfferPresentationInfo": {

//     },
//     "externalRatings": {
//       "aggregatedRating": {
//         "rating": "--"
//       }
//     },
//     "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//   },
//   "analytics": {
//     "context": "seo-data-306f7454-4da6-4118-b0f5-30db84f30f77"
//   },
//   "cta": {
//     "link": "https://www.swiggy.com/city/biharsharif/sheetal-chhaya-garhpar-qamruddin-ganj-rest304041",
//     "type": "WEBLINK"
//   },
// }
// ];
// Props - Whenever you have to dynamically passing some data to a component you will passing as a PROPS.
// EP - 4; Part - 2

const resList = [
{
  "info": {
    "id": "304041",
    "name": "Sheetal Chhaya",
    "cloudinaryImageId": "by3uz0e7eszzzqlvmpmz",
    "locality": "Garhpar",
    "areaName": "Qamruddin Ganj",
    "costForTwo": "₹300 for two",
    "cuisines": [
      "Sweets",
      "Bakery",
      "Desserts",
      "Snacks",
      "Indian",
      "South Indian"
    ],
    "avgRating": 4.1,
    "veg": true,
    "parentId": "182632",
    "avgRatingString": "4.1",
    "totalRatingsString": "4.5K+",
    "sla": {
      "deliveryTime": 42,
      "lastMileTravel": 3.5,
      "serviceability": "SERVICEABLE",
      "slaString": "40-45 mins",
      "lastMileTravelString": "3.5 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2025-03-14 21:30:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
          "description": "OnlyOnSwiggy"
        }
      ]
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {

    },
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "OnlyOnSwiggy",
                "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
              }
            }
          ]
        },
        "textBased": {

        },
        "textExtendedBadges": {

        }
      }
    },
    "orderabilityCommunication": {
      "title": {

      },
      "subTitle": {

      },
      "message": {

      },
      "customIcon": {

      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {

        },
        "video": {

        }
      }
    },
    "reviewsSummary": {

    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {

    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    "context": "seo-data-aff6dd75-44e8-465d-9844-74ddb8443bc8"
  },
  "cta": {
    "link": "https://www.swiggy.com/city/biharsharif/sheetal-chhaya-garhpar-qamruddin-ganj-rest304041",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
  "info": {
    "id": "808139",
    "name": "RBH Rasoi",
    "cloudinaryImageId": "ec563bd7693fd2e25708c47b57ceaed3",
    "locality": "Bihar Sharif",
    "areaName": "Garhpar",
    "costForTwo": "₹250 for two",
    "cuisines": [
      "Biryani",
      "Thali",
      "North Indian"
    ],
    "avgRating": 3.9,
    "parentId": "482195",
    "avgRatingString": "3.9",
    "totalRatingsString": "319",
    "sla": {
      "deliveryTime": 32,
      "lastMileTravel": 1.9,
      "serviceability": "SERVICEABLE",
      "slaString": "30-35 mins",
      "lastMileTravelString": "1.9 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2025-03-14 22:00:00",
      "opened": true
    },
    "badges": {
      "textExtendedBadges": [
        {
          "iconId": "Akash/Listing%20badge.png",
          "shortDescription": "Price Match Promise",
          "fontColor": "#7E808C"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {

        },
        "textBased": {

        },
        "textExtendedBadges": {
          "badgeObject": [
            {
              "attributes": {
                "description": "",
                "fontColor": "#7E808C",
                "iconId": "Akash/Listing%20badge.png",
                "shortDescription": "Price Match Promise"
              }
            }
          ]
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "40% OFF",
      "subHeader": "UPTO ₹80"
    },
    "orderabilityCommunication": {
      "title": {

      },
      "subTitle": {

      },
      "message": {

      },
      "customIcon": {

      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {

        },
        "video": {

        }
      }
    },
    "reviewsSummary": {

    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {

    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    "context": "seo-data-aff6dd75-44e8-465d-9844-74ddb8443bc8"
  },
  "cta": {
    "link": "https://www.swiggy.com/city/biharsharif/rbh-rasoi-bihar-sharif-garhpar-rest808139",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
  "info": {
    "id": "872916",
    "name": "Nazeer Foods",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/7/676fd4bd-f689-4638-a1bf-655c8d3734e9_872916.jpg",
    "locality": "Maa Durga Complex",
    "areaName": "Garhpar",
    "costForTwo": "₹400 for two",
    "cuisines": [
      "Mughlai"
    ],
    "avgRating": 3.9,
    "parentId": "2351",
    "avgRatingString": "3.9",
    "totalRatingsString": "359",
    "sla": {
      "deliveryTime": 36,
      "lastMileTravel": 2.9,
      "serviceability": "SERVICEABLE",
      "slaString": "35-40 mins",
      "lastMileTravelString": "2.9 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2025-03-14 23:30:00",
      "opened": true
    },
    "badges": {

    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {

        },
        "textBased": {

        },
        "textExtendedBadges": {

        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "50% OFF",
      "subHeader": "UPTO ₹100"
    },
    "orderabilityCommunication": {
      "title": {

      },
      "subTitle": {

      },
      "message": {

      },
      "customIcon": {

      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {

        },
        "video": {

        }
      }
    },
    "reviewsSummary": {

    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {

    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    "context": "seo-data-aff6dd75-44e8-465d-9844-74ddb8443bc8"
  },
  "cta": {
    "link": "https://www.swiggy.com/city/biharsharif/nazeer-foods-maa-durga-complex-garhpar-rest872916",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
  "info": {
    "id": "1007937",
    "name": "Rajgriha Sweets And Snacks",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/27/1400a098-209f-4645-9d6d-f1ce806e8257_1007937.jpg",
    "locality": "Bari Pahari",
    "areaName": "By pass Bari Pahari",
    "costForTwo": "₹300 for two",
    "cuisines": [
      "Chinese",
      "Continental",
      "South Indian",
      "Chaat",
      "Thalis",
      "Bakery",
      "Indian",
      "Sweets",
      "Salads"
    ],
    "avgRating": 4.5,
    "veg": true,
    "parentId": "587308",
    "avgRatingString": "4.5",
    "totalRatingsString": "58",
    "sla": {
      "deliveryTime": 45,
      "lastMileTravel": 4.2,
      "serviceability": "SERVICEABLE",
      "slaString": "40-45 mins",
      "lastMileTravelString": "4.2 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2025-03-14 22:15:00",
      "opened": true
    },
    "badges": {

    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {

        },
        "textBased": {

        },
        "textExtendedBadges": {

        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "20% OFF",
      "subHeader": "UPTO ₹50"
    },
    "orderabilityCommunication": {
      "title": {

      },
      "subTitle": {

      },
      "message": {

      },
      "customIcon": {

      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {

        },
        "video": {

        }
      }
    },
    "reviewsSummary": {

    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "isNewlyOnboarded": true,
    "restaurantOfferPresentationInfo": {

    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    "context": "seo-data-aff6dd75-44e8-465d-9844-74ddb8443bc8"
  },
  "cta": {
    "link": "https://www.swiggy.com/city/biharsharif/rajgriha-sweets-and-snacks-bari-pahari-by-pass-bari-pahari-rest1007937",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
  "info": {
    "id": "605018",
    "name": "Bizeal- the dream bakers",
    "cloudinaryImageId": "ig4iaoc7ildypwd80ny2",
    "locality": "Ranchi Road",
    "areaName": "Garhpar",
    "costForTwo": "₹200 for two",
    "cuisines": [
      "Bakery",
      "Desserts"
    ],
    "avgRating": 4.3,
    "veg": true,
    "parentId": "360537",
    "avgRatingString": "4.3",
    "totalRatingsString": "300",
    "sla": {
      "deliveryTime": 32,
      "lastMileTravel": 1.8,
      "serviceability": "SERVICEABLE",
      "slaString": "30-35 mins",
      "lastMileTravelString": "1.8 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2025-03-14 22:00:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
          "description": "bolt!"
        },
        {
          "imageId": "v1695133679/badges/Pure_Veg111.png",
          "description": "pureveg"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "bolt!",
                "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
              }
            },
            {
              "attributes": {
                "description": "pureveg",
                "imageId": "v1695133679/badges/Pure_Veg111.png"
              }
            }
          ]
        },
        "textBased": {

        },
        "textExtendedBadges": {

        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "20% OFF",
      "subHeader": "UPTO ₹50"
    },
    "orderabilityCommunication": {
      "title": {

      },
      "subTitle": {

      },
      "message": {

      },
      "customIcon": {

      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {

        },
        "video": {

        }
      }
    },
    "reviewsSummary": {

    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {

    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    "context": "seo-data-aff6dd75-44e8-465d-9844-74ddb8443bc8"
  },
  "cta": {
    "link": "https://www.swiggy.com/city/biharsharif/bizeal-the-dream-bakers-ranchi-road-garhpar-rest605018",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
  "info": {
    "id": "1009490",
    "name": "Pastas By Pizza Hut",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/16/7290c9d4-1d26-4c15-8639-94037de2dd50_1009490.jpg",
    "locality": "Bihar\nSharif",
    "areaName": "Nalanda",
    "costForTwo": "₹400 for two",
    "cuisines": [
      "Pastas"
    ],
    "avgRating": 4.2,
    "parentId": "306806",
    "avgRatingString": "4.2",
    "totalRatingsString": "9",
    "sla": {
      "deliveryTime": 43,
      "lastMileTravel": 2.8,
      "serviceability": "SERVICEABLE",
      "slaString": "40-45 mins",
      "lastMileTravelString": "2.8 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2025-03-14 23:00:00",
      "opened": true
    },
    "badges": {

    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {

        },
        "textBased": {

        },
        "textExtendedBadges": {

        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "40% OFF",
      "subHeader": "UPTO ₹80"
    },
    "orderabilityCommunication": {
      "title": {

      },
      "subTitle": {

      },
      "message": {

      },
      "customIcon": {

      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {

        },
        "video": {

        }
      }
    },
    "reviewsSummary": {

    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "isNewlyOnboarded": true,
    "restaurantOfferPresentationInfo": {

    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    "context": "seo-data-aff6dd75-44e8-465d-9844-74ddb8443bc8"
  },
  "cta": {
    "link": "https://www.swiggy.com/city/biharsharif/pastas-by-pizza-hut-bihar-sharif-nalanda-rest1009490",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
  "info": {
    "id": "950615",
    "name": "RBH BRiyani",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/30/79484c6e-4173-487d-9e65-09ff3c300020_950615.jpg",
    "locality": "Garhpar",
    "areaName": "Garhpar",
    "costForTwo": "₹300 for two",
    "cuisines": [
      "Chinese",
      "Hyderabadi",
      "Indian",
      "Afghani",
      "Street Food",
      "Fast Food"
    ],
    "avgRating": 3.7,
    "parentId": "556854",
    "avgRatingString": "3.7",
    "totalRatingsString": "7",
    "sla": {
      "deliveryTime": 40,
      "lastMileTravel": 1.9,
      "serviceability": "SERVICEABLE",
      "slaString": "35-40 mins",
      "lastMileTravelString": "1.9 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2025-03-14 22:00:00",
      "opened": true
    },
    "badges": {

    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {

        },
        "textBased": {

        },
        "textExtendedBadges": {

        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "40% OFF",
      "subHeader": "UPTO ₹80"
    },
    "orderabilityCommunication": {
      "title": {

      },
      "subTitle": {

      },
      "message": {

      },
      "customIcon": {

      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {

        },
        "video": {

        }
      }
    },
    "reviewsSummary": {

    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {

    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    "context": "seo-data-aff6dd75-44e8-465d-9844-74ddb8443bc8"
  },
  "cta": {
    "link": "https://www.swiggy.com/city/biharsharif/rbh-briyani-garhpar-rest950615",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
  "info": {
    "id": "664317",
    "name": "Mihran Cafeteria",
    "cloudinaryImageId": "8ce8da8b7901d87c063f22a5f603bd6c",
    "locality": "Bihar Sharif (Nalanda)",
    "areaName": "Katrapar",
    "costForTwo": "₹250 for two",
    "cuisines": [
      "Chinese",
      "Indian",
      "Snacks",
      "Fast Food",
      "Burgers",
      "Beverages"
    ],
    "avgRating": 3.5,
    "parentId": "398341",
    "avgRatingString": "3.5",
    "totalRatingsString": "142",
    "sla": {
      "deliveryTime": 53,
      "lastMileTravel": 5,
      "serviceability": "SERVICEABLE",
      "slaString": "50-55 mins",
      "lastMileTravelString": "5.0 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2025-03-14 21:00:00",
      "opened": true
    },
    "badges": {

    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {

        },
        "textBased": {

        },
        "textExtendedBadges": {

        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "20% OFF",
      "discountTag": "FLAT DEAL"
    },
    "orderabilityCommunication": {
      "title": {

      },
      "subTitle": {

      },
      "message": {

      },
      "customIcon": {

      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {

        },
        "video": {

        }
      }
    },
    "reviewsSummary": {

    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {

    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    "context": "seo-data-aff6dd75-44e8-465d-9844-74ddb8443bc8"
  },
  "cta": {
    "link": "https://www.swiggy.com/city/biharsharif/mihran-cafeteria-bihar-sharif-nalanda-katrapar-rest664317",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
}
];

const Body = () => {
  return (
    <div className='body'>
      <div className='search'>Search</div>
      <div className='res-container'>
        {/* <RestaurantCard 
        resName = "KFC" 
        cuisines = "Roasted Chicken, French Fries and Coffee"          
        />
       <RestaurantCard 
        resName = "Biryani Mahal" 
        cuisines = "Chicken Biryani, Chicken Dum and Massala Chicken"          
        /> */}

        {/* // Now we can object directly inside RestaurantCard component */}
        {/* <RestaurantCard 
        restData = {resList[0]}       
        />
       <RestaurantCard 
        restData = {resList[1]}       
        />
        
        <RestaurantCard 
        restData = {resList[2]}       
        />
        <RestaurantCard 
        restData = {resList[3]}       
        />
        <RestaurantCard 
        restData = {resList[4]}       
        />
        <RestaurantCard 
        restData = {resList[5]}       
        />
        
        <RestaurantCard 
        restData = {resList[6]}       
        />
        <RestaurantCard 
        restData = {resList[7]}       
        /> */}

        {
          resList.map((restaurant) => ( <RestaurantCard 
            key={restaurant.info.id} restData = {restaurant}       
            /> ))
        }

      </div>
    </div>
  )
}
const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Body />
  </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout/>);