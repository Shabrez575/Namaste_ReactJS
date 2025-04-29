const ShimmerContainer = () => {
  return (
    <div className="relative m-4 p-2 w-[250px] h-[330px] rounded-lg bg-white shadow-md animate-pulse gap-2">
      {/* Shimmer Image */}
      <div className="h-[150px] w-[250px] bg-gray-300 rounded-lg mb-4"></div>

      {/* Text lines */}
      <div className="h-5 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-2/3 mb-1"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2 mb-1"></div>
      <div className="h-4 bg-gray-300 rounded w-1/3 mb-1"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2 mb-1"></div>
      <div className="h-4 bg-gray-300 rounded w-2/3 mt-2"></div>
    </div>
  );
};


// const ShimmerContainer = () => {
//   return (
//     <div className="flex flex-wrap justify-center gap-3 mt-[60px]">
//       {[...Array(8)].map((_, index) => (
//         <ShimmerCard key={index} />
//       ))}
//     </div>
//   );
// };

export default ShimmerContainer;




// const ShimmerContainer = () => {
//   {console.log('Hrllo')}
//     return (<div>
//         <div className="card">
//           <div className="shimmerBG media"></div>
//           <div className="p-32">
//           <div className="shimmerBG title-line"></div>
//           <div className="shimmerBG title-line end"></div>

//           <div className="shimmerBG content-line m-t-24"></div>
//           <div className="shimmerBG content-line"></div>
//           <div className="shimmerBG content-line"></div>
//           <div className="shimmerBG content-line"></div>
//           <div className="shimmerBG content-line end"></div>
//         </div>
//       </div>
//     </div>)
// }

// export default ShimmerContainer;