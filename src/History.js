import React from "react";

function History({GenderApi}){

    return(
        <li key={GenderApi.id}><div>{GenderApi.name}</div><div>{GenderApi.gender}</div></li>
    )
}

export default History;