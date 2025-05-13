// import { Fragment } from "react";
// 1st way import React from "react";
// import NetflixMove from "./components/NetflixMoves";

// 2nd way use {} carlibrases Named Export
// import { NetflixMove } from "./components/NetflixMoves";
// import { NetflixMove, Footer } from "./components/NetflixMoves";

//3rd way use {} carlibrases and Defalut Mix Named Export
// import NetflixMove, { Footer } from "./components/NetflixMoves";

// Tradisonal tarika
// export const App = () => {
  //using Fragment method remove extra div
  // return (
  //   <Fragment>
  //     {/* User Component  */}
  //     <NetflixMove />
  //     <NetflixMove />
  //     <NetflixMove />
  //     <NetflixMove />
  //     <NetflixMove />
  //     <NetflixMove />
  //     <NetflixMove />
  //     <NetflixMove />
  //     <Footer />
  //   </Fragment>
  // );

  //using Array method remove extra div
  // return [<NetflixSeries key="1" />, <NetflixSeries key="1" />];

  // Using div we not use he take extra div
  // return (
  //   <div>
  //     {/* User Component  */}
  //     <NetflixSeries />
  //     <NetflixSeries />
  //     <NetflixSeries />
  //     <NetflixSeries />
  //     <NetflixSeries />
  //     <NetflixSeries />
  //     <NetflixSeries />
  //     <NetflixSeries />
  //   </div>
  // );

  //Without Component Create
  //   return(
  //     <div>
  //   //  <div>
  //   //   <img src="av.jpg" alt="av.jpg" width="20%" height="10%" />
  //   // </div>
  //   // <h2>Name : Avengers infinitive war</h2>
  //   // <h3>Rating : 8.2</h3>
  //   // <p>
  //   //   In "Avengers: Infinity War," the Avengers and their allies face their
  //   //   greatest threat yet as they unite to prevent the powerful Thanos from
  //   //   collecting all six Infinity Stones. Thanos seeks to use these stones to
  //   //   erase half of all life in the universe, believing it will bring balance.
  //   //   The film features an ensemble cast of iconic heroes, including Iron Man,
  //   //   Thor, Captain America, Doctor Strange, and the Guardians of the Galaxy,
  //   //   who engage in epic battles on planets like Titan and in Wakanda. The
  //   //   story culminates in a devastating defeat for the heroes, with Thanos
  //   //   succeeding in his plan and causing the "Snap," where half of all life
  //   //   disintegrates. The film's themes of sacrifice, unity, and moral dilemmas
  //   //   set the stage for its highly anticipated sequel, "Avengers: Endgame,"
  //   //   and earned it a place as one of the most significant superhero films,
  //   //   grossing over $2 billion worldwide.
  //   // </p>
  //   // <div>
  //   //   <img src="av.jpg" alt="av.jpg" width="20%" height="10%" />
  //   // </div>
  //   // <h2>Name : Avengers infinitive war</h2>
  //   // <h3>Rating : 8.2</h3>
  //   // <p>
  //   //   In "Avengers: Infinity War," the Avengers and their allies face their
  //   //   greatest threat yet as they unite to prevent the powerful Thanos from
  //   //   collecting all six Infinity Stones. Thanos seeks to use these stones to
  //   //   erase half of all life in the universe, believing it will bring balance.
  //   //   The film features an ensemble cast of iconic heroes, including Iron Man,
  //   //   Thor, Captain America, Doctor Strange, and the Guardians of the Galaxy,
  //   //   who engage in epic battles on planets like Titan and in Wakanda. The
  //   //   story culminates in a devastating defeat for the heroes, with Thanos
  //   //   succeeding in his plan and causing the "Snap," where half of all life
  //   //   disintegrates. The film's themes of sacrifice, unity, and moral dilemmas
  //   //   set the stage for its highly anticipated sequel, "Avengers: Endgame,"
  //   //   and earned it a place as one of the most significant superhero films,
  //   //   grossing over $2 billion worldwide.
  //   // </p>
  //   // <div>
  //   //   <img src="av.jpg" alt="av.jpg" width="20%" height="10%" />
  //   // </div>
  //   // <h2>Name : Avengers infinitive war</h2>
  //   // <h3>Rating : 8.2</h3>
  //   // <p>
  //   //   In "Avengers: Infinity War," the Avengers and their allies face their
  //   //   greatest threat yet as they unite to prevent the powerful Thanos from
  //   //   collecting all six Infinity Stones. Thanos seeks to use these stones to
  //   //   erase half of all life in the universe, believing it will bring balance.
  //   //   The film features an ensemble cast of iconic heroes, including Iron Man,
  //   //   Thor, Captain America, Doctor Strange, and the Guardians of the Galaxy,
  //   //   who engage in epic battles on planets like Titan and in Wakanda. The
  //   //   story culminates in a devastating defeat for the heroes, with Thanos
  //   //   succeeding in his plan and causing the "Snap," where half of all life
  //   //   disintegrates. The film's themes of sacrifice, unity, and moral dilemmas
  //   //   set the stage for its highly anticipated sequel, "Avengers: Endgame,"
  //   //   and earned it a place as one of the most significant superhero films,
  //   //   grossing over $2 billion worldwide.
  //   // </p>
  //   // <div>
  //   //   <img src="av.jpg" alt="av.jpg" width="20%" height="10%" />
  //   // </div>
  //   // <h2>Name : Avengers infinitive war</h2>
  //   // <h3>Rating : 8.2</h3>
  //   // <p>
  //   //   In "Avengers: Infinity War," the Avengers and their allies face their
  //   //   greatest threat yet as they unite to prevent the powerful Thanos from
  //   //   collecting all six Infinity Stones. Thanos seeks to use these stones to
  //   //   erase half of all life in the universe, believing it will bring balance.
  //   //   The film features an ensemble cast of iconic heroes, including Iron Man,
  //   //   Thor, Captain America, Doctor Strange, and the Guardians of the Galaxy,
  //   //   who engage in epic battles on planets like Titan and in Wakanda. The
  //   //   story culminates in a devastating defeat for the heroes, with Thanos
  //   //   succeeding in his plan and causing the "Snap," where half of all life
  //   //   disintegrates. The film's themes of sacrifice, unity, and moral dilemmas
  //   //   set the stage for its highly anticipated sequel, "Avengers: Endgame,"
  //   //   and earned it a place as one of the most significant superhero films,
  //   //   grossing over $2 billion worldwide.
  //   // </p>
  //   // <div>
  //   //   <img src="av.jpg" alt="av.jpg" width="20%" height="10%" />
  //   // </div>
  //   // <h2>Name : Avengers infinitive war</h2>
  //   // <h3>Rating : 8.2</h3>
  //   // <p>
  //   //   In "Avengers: Infinity War," the Avengers and their allies face their
  //   //   greatest threat yet as they unite to prevent the powerful Thanos from
  //   //   collecting all six Infinity Stones. Thanos seeks to use these stones to
  //   //   erase half of all life in the universe, believing it will bring balance.
  //   //   The film features an ensemble cast of iconic heroes, including Iron Man,
  //   //   Thor, Captain America, Doctor Strange, and the Guardians of the Galaxy,
  //   //   who engage in epic battles on planets like Titan and in Wakanda. The
  //   //   story culminates in a devastating defeat for the heroes, with Thanos
  //   //   succeeding in his plan and causing the "Snap," where half of all life
  //   //   disintegrates. The film's themes of sacrifice, unity, and moral dilemmas
  //   //   set the stage for its highly anticipated sequel, "Avengers: Endgame,"
  //   //   and earned it a place as one of the most significant superhero films,
  //   //   grossing over $2 billion worldwide.
  //   // </p>
  //     </div>
  //   );
};

//use simple way static approach
// const NetflixSeries = () => {
//   return (
//     <div>
//       <div>
//         <img src="av.jpg" alt="av.jpg" width="20%" height="10%" />
//       </div>
//       <h2>Name : Avengers infinitive war</h2>
//       <h3>Rating : 8.2</h3>
//       <p>
//         In "Avengers: Infinity War," the Avengers and their allies face their
//         greatest threat yet as they unite to prevent the powerful Thanos from
//         collecting all six Infinity Stones. Thanos seeks to use these stones to
//         erase half of all life in the universe, believing it will bring balance.
//         The film features an ensemble cast of iconic heroes, including Iron Man,
//         Thor, Captain America, Doctor Strange, and the Guardians of the Galaxy,
//         who engage in epic battles on planets like Titan and in Wakanda. The
//         story culminates in a devastating defeat for the heroes, with Thanos
//         succeeding in his plan and causing the "Snap," where half of all life
//         disintegrates. The film's themes of sacrifice, unity, and moral dilemmas
//         set the stage for its highly anticipated sequel, "Avengers: Endgame,"
//         and earned it a place as one of the most significant superhero films,
//         grossing over $2 billion worldwide.
//       </p>
//     </div>
//   );
// };

//Create working flow without using index.html write hello code
// export const App = () => {
//   return React.createElement("h1", null, "Hello Rishi how are your.");
// };

//console.log(React.createElement("h1", null, "Hello Rishi how are your."));
//React.createElement("h1", null, "Hello Rishi how are your.");

//Use Dynamic values using variables;
