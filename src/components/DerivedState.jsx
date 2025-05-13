import { useState } from "react";
// const users = [
//     {name:"Rishi",age:22},
//     {name:"Mohit",age:23},
//     {name:"Saloni",age:30},
//     {name:"Anuj",age:48},
// ];


export const DeriveState = () =>{
    const [users, setUsers] = useState([
        {name:"Rishi",age:22},
        {name:"Mohit",age:23},
        {name:"Saloni",age:30},
        {name:"Anuj",age:48},
    ]);

    //Derived state : count of users
    console.log(users);
    const usersCount = users.length;

    //Derived state : average age of users
    const averageAge = users.reduce((accum, curElem) => accum + curElem.age, 0)/usersCount;

    return(

        <div className="main-div p-6">
            <h1>User List</h1>
            <ul>
               {
                users.map((curElem, index) =>{
                  return(
                    <li key={index} className="p-4 m-5 gap-x-2">
                    {curElem.name} - {curElem.age} year old
                    </li>
                  )})
               } 
            </ul>
            <p>Total Users : {usersCount}</p>
            <p>Average age: {averageAge}</p>
            
        </div>
    );
}