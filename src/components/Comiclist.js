// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// const Comiclist = ({ data, heart, cross, addFav, handleRemoveFav }) => {
//   const size = data.thumbnail.path + "." + data.thumbnail.extension;

//   return (
//     <div style={{ position: "relative" }}>
//       {heart ? (
//         <div onClick={() => addFav(data._id)} className="heart-icon-comics">
          /* <FontAwesomeIcon icon={["far", "heart"]} /> */
    //     </div>
    //   ) : cross ? (
    //     <div
    //       onClick={() => handleRemoveFav(data._id)}
    //       className="cross-icon-comic-card"
    //     >
          /* <FontAwesomeIcon icon="times" /> */
//         </div>
//       ) : null}
//       <div className="comic-card">
//         <img alt="comics" src={size} />
//         <div>
//           <span>{data.title}</span>
//           <p>{data.description && data.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Comiclist;