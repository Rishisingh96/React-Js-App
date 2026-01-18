import React from 'react';
import { useId } from 'react';
export const UseId = () => {
    // const usernameId = useId();
    // const emailId = useId();
    // const passwordId = useId();

    // Normal form without any special handling
    // return (
    //    <form>
    //     <div>
    //         <label htmlFor="username">Username:</label>
    //         <input type="text" id="username" name="username" />
    //     </div>
    //     <div>
    //         <label htmlFor="email">Email:</label>
    //         <input type="email" id="email" name="email" />
    //     </div>
    //     <div>
    //         <label htmlFor="password">Password:</label>
    //         <input type="password" id="password" name="password" />
    //     </div>
    //     <button type="submit">Register</button>
    //    </form>
    // );

    // Form using useId for unique IDs
    //  return (
    //    <form>
    //     <div>
    //         <label htmlFor={usernameId}>Username:</label>
    //         <input type="text" id={usernameId} name="username" />
    //     </div>
    //     <div>
    //         <label htmlFor={emailId}>Email:</label>
    //         <input type="email" id={emailId} name="email" />
    //     </div>
    //     <div>
    //         <label htmlFor={passwordId}>Password:</label>
    //         <input type="password" id={passwordId} name="password" />
    //     </div>
    //     <button type="submit">Register</button>
    //    </form>
    // );

    const id = useId();
    // Form using a single base ID for all fields
       return (
       <form>
        <div>
            <label htmlFor={id + "usernameId"}>Username:</label>
            <input type="text" id={id + "usernameId"} name="username" />
        </div>
        <div>
            <label htmlFor={id + "emailId"}>Email:</label>
            <input type="email" id={id + "emailId"} name="email" />
        </div>
        <div>
            <label htmlFor={id + "passwordId"}>Password:</label>
            <input type="password" id={id + "passwordId"} name="password" />
        </div>
        <button type="submit">Register</button>
       </form>
    );
};