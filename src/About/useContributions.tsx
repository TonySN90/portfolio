// import { useState, useEffect } from "react";

// function useFetch() {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://github-contributions-api.jogruber.de/v4/tonysn90?y=last"
//         );
//         if (!response.ok) {
//           throw new Error("Netzwerkantwort war nicht ok " + response.status);
//         }
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return { data, loading, error };
// }

// export default useFetch;
