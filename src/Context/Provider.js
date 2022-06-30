import React, {useState} from "react";
import context from "./Context";

const Provider = (props) => {
    const [cricketer, setCricketer] = useState(
        {
            name: "Sachin Tendulkar",
            age: "38",
            role: "Batsman"
        }
    );
    return (
        <context.Provider value={
           { data: cricketer}
        }>  
          {props.children}  
        </context.Provider>
        
    )
}

export default Provider;