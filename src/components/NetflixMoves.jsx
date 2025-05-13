import seriesData from "../api/seriesData.json";
import { MoveCard } from "./MoveCard";
// import './index.css';  // Ensure your CSS file is correctly imported

const NetflixMove = () => {
  return (
    <ul className="grid grid-three-cols">  {/* Corrected the class name to match the CSS */}
      {seriesData.map((curElem) => (
        <MoveCard key={curElem.id} data={curElem} />
      ))}
    </ul>
  );
};

export default NetflixMove;


// 1st way 
/* {seriesData.map((curElem) => {
        return (
          <li key={curElem.id}>
            <div>
              <img
                src={curElem.img_url}
                alt="av.jpg"
                width="20%"
                height="10%"
              />
            </div>
            <h2>Name : {curElem.name} </h2>
            <h3>Rating :{curElem.rating}</h3>
            <p>Summary: {curElem.description}</p>
            <p>Genre: {curElem.genre}</p>
            <p>Release Date : {returnRelease()}</p>
            <a href={curElem.watch_url}>
              <button>Watch know</button>
            </a>
            <h2>
              ----------------------------------------------------------------
            </h2>
          </li>
        );
      })} */
