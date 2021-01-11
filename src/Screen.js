import React, { useContext } from "react";
import { UserContext } from "./context";
import Header from "./Header";
import Color from "./color";

const Screen = () => {
    const {logUserIn, switchColor} = useContext(UserContext);
 return(
    <>
    <Header/>
    <h1>FirstScreen</h1>
    <button onClick ={logUserIn}>Log user in</button>
    <Color/>
    <button onClick = {switchColor}>Change the Color!</button>
    </>
);
};

export default Screen;