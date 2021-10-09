import React from "react";


function Radiob(){
    return(
        <div className="Radiob m-10">

            <input type="radio" id="choice1" name="certi" value="certificate"></input>
            <label for="choice1">E-mail each user their certificates</label>
            <br />
            <input type="radio" id="choice2" name="certi" value="certificate"></input>
            <label for="choice2">download all certificates as pdf in a zip file</label>
        </div>
    );
} 

export default Radiob;