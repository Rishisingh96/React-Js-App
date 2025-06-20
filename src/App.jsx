import React from 'react';
// import Index from './components/Index'; // ✅ No curly braces
import NetflixMove from "./components/NetflixMoves";
// import { EventHandling } from "./components/EventHandling";
// import { EventProps } from "./components/EventProps";
// import { EventPropagation } from "./components/EventPropagation";

// import { DeriveState } from './components/DerivedState';
import './components/EV.css';
// import { State } from "./components/hooks/State";
import "./components/Netflix.module.css";
import { Todo } from './components/projects/Todo/Todo';
import { Index } from "./components/Index";
import { Help } from './components/projects/Todo/Help';
import { TodoList } from './components/projects/Todo Final/TodoList';

import { ToggleSwitch } from './components/projects/ToggleSwitch/ToggleSwitch';
import ShortCircuitExample from './components/hooks/ShortCircuit';
import { Counter } from './components/hooks/useState/Counter';
import Challenge from './components/hooks/useState/Chalenge';
// import { Counter } from './components/hooks/useState/Count';
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
        {/* <Index /> */}
        {/* <Help /> */}
        {/* <TodoList /> */}
        {/* <ShortCircuitExample /> */}
        {/* <Counter /> */}
        <Challenge />
      </section>
  ); 
};
