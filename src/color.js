import React, {useContext} from "react";
import { UserContext } from "./context";

const Color = () => {
    const {user: {color}} = useContext(UserContext)
    return(
        <h1>{color}</h1>
    )
}

export default Color;
