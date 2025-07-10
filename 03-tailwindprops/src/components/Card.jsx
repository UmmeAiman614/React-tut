import React from "react";

function Card({username, btnText="Visit me"}){
    // console.log("props: ", props);
    
    return(
    <div>Hello {username}</div>
    )
}

export default Card