// 2nd Way use Name
// export const NetflixMove = () => {
// const NetflixMove = () => {
//   const name = "Avengers infinitive war";
//   const rating = " 8.2";
//   const summary =
//     "In 'Avengers: Infinity War,' the Avengers and their allies face their greatest threat yet as they unite to prevent the powerful Thanos from collecting all six Infinity Stones. Thanos seeks to use these stones to erase half of all life in the universe, believing it will bring balance. The film features an ensemble cast of iconic heroes, including Iron Man, Thor, Captain America, Doctor Strange, and the Guardians of the Galaxy, who engage in epic battles on planets like Titan and in Wakanda. The story culminates in a devastating defeat for the heroes, with Thanos succeeding in his plan and causing the 'Snap,' where half of all life disintegrates. The film's themes of sacrifice, unity, and moral dilemmas set the stage for its highly anticipated sequel, 'Avengers: Endgame,' and it earned a place as one of the most significant superhero films, grossing over $2 billion worldwide.";

//   const returnRelease = () => {
//     const release = "12 August 2018";
//     return release;
//   };

//   // let age = 13;
//   let age = 10;

// First Way

// if (age < 18) {
//   return (
//     <div>
//       <div>
//         <img src="av.jpg" alt="av.jpg" width="20%" height="10%" />
//       </div>
//       <h2>Name : {name} </h2>
//       <h3>Rating :{rating}</h3>
//       <p>Summary: {summary}</p>
//       <p>Release Date : {returnRelease()}</p>
//       {/* Conditionals value in jsx */}
//       {/* First Way */}
//       <button>Not Available</button>

//       <h2>
//         ----------------------------------------------------------------
//       </h2>
//     </div>
//   );
// }

/* third Way */
// let canWatch = "Not Available";
// if (age >= 18) canWatch = "Watch Now";

/* fourth Way use function*/
//   const canWatch = () => {
//     if (age >= 18) return "Watch Now";
//     return "Not Available";
//   };

//   return (
//     <div>
//       <div>
//         <img src="av.jpg" alt="av.jpg" width="20%" height="10%" />
//       </div>
//       <h2>Name : {name} </h2>
//       <h3>Rating :{rating}</h3>
//       <p>Summary: {summary}</p>
//       <p>Release Date : {returnRelease()}</p>
//       {/* Conditionals value in jsx */}
//       {/* First Way */}
//       {/* <button>Watch Now</button> */}

//       {/* second Way */}
//       {/* <button>{age >= 18 ? "Watch Now" : "Not Available"}</button> */}

//       {/* second Way  */}
//       {/* <button>{canWatch}</button> */}

//       {/* second Way  */}
//       <button>{canWatch()}</button>
//       <h2>----------------------------------------------------------------</h2>
//     </div>
//   );
// };

// 1st Way export use default
// export default NetflixMove;

// 2nd Way use Name
// export const Footer = () => {
//   return <p>copyright @rishisingh</p>;
// };
// //3rd Mix
// export default NetflixMove;
