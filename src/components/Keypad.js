// Code Keypad Component Here

import React from "react";

function Keypad (){

    function handleChange(event){
     const val =event.target.value;
    console.log('Entering password...')
    console.log(`password:${val}`)
    }
    return (
        <div>
           <input 
           type="password"
           name="password"
           onChange={handleChange}
           placeholder="Enter password"
           />

           
        </div>
    )
}

export default Keypad;