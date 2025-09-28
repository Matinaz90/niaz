// 24_run.jsx
// import { useState, useEffect } from "react";


// export function useResultSearch() {
//   const [priceresultSearch, setResultSearch] = useState(["1", "2" , "3"]);
  
//   return [priceresultSearch, setResultSearch];
// }

// export default function EveryDayRunApp() {
//   const [, setResultSearch] = useResultSearch();

//   const runAt12PMprice = async (homemodel) => {
//     try {
//       const response = await fetch("http://localhost:8080/", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           addres_page: "home",
//           whichserch: homemodel,
//           limit: 1,
//         }),
//       });

//       const data = await response.json();
//       setResultSearch(data);
//       console.log("Data fetched:", data);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   useEffect(() => {
//     runAt12PMprice("Aparteman");

//     const checkTime = () => {
//       const now = new Date();
//       if (now.getHours() === 12 && now.getMinutes() === 0) {
//         runAt12PMprice("Aparteman");
//       }
//     };

//     const interval = setInterval(checkTime, 60 * 1000);
//     return () => clearInterval(interval);
//   }, []);

//   return null;
// }

// it search if time is exacly 12 pm every minut but if i dont start it in a start of minute it wont work