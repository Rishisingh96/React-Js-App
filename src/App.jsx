import NetflixMove from "./components/NetflixMoves";
// import { EventHandling } from "./components/EventHandling";
// import { EventProps } from "./components/EventProps";
// import { EventPropagation } from "./components/EventPropagation";

// import { DeriveState } from './components/DerivedState';
import './components/EV.css';
// import { State } from "./components/hooks/State";
import "./components/Netflix.module.css";
import { Todo } from './components/projects/Todo/Todo';
// import { ToggleSwitch } from './components/projects/ToggleSwitch/ToggleSwitch';
// import "./components/Netflix.css";
export const App = () => {
  //using Fragment method remove extra div
  return(
      <section className="container">
        <h1 className="card-heading">List of Best Netflix Series</h1>
        {/* <NetflixMove />; */}
        {/* <EventHandling/> */}
        {/* <EventProps/> */}

        {/* <EventPropagation/> */}

        {/* <State /> */}
        {/* <DeriveState /> */}
        {/* <ToggleSwitch /> */}
        {/* <Todo /> */}
      </section>
  ); 
};
