import React from "react";

function radio_button(){
    return(
        <div>

            <input type="radio" id="choice1" name="certi" value="certificate"></input>
            <label for="choice1">E-mail each user their certificates</label>

            <input type="radio" id="choice2" name="certi" value="certificate"></input>
            <label for="choice2">download all certificates as pdf in a zip file</label>
        </div>
    );
}

export default radio_button;