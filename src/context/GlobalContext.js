import React, { createContext, useReducer } from "react";
import webReducer from "./WebReducer";

let Data = {
    GenderApi:[ ]
}

export const Global = createContext(Data);

function GlobalContext ({children}){

    let [state,dispatch] = useReducer(webReducer,Data);

    const addInfo = (object) => {
        dispatch({
            type:"ADD",
            payload:({
                id:object.id,
                name:object.name,
                gender:object.gender
            })
        })
    }

    return(
        <Global.Provider  value={{
            GenderApi : state.GenderApi,
            addInfo,
        }} >
         {children}
        </Global.Provider>
    )
}

export default GlobalContext;