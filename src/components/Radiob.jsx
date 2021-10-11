import { useState } from 'react';

function Radiob(props){
    const [selection, setSelection] = useState()
    const radioDetails = [
        { value: 'e-mail', text: "E-mail each user their certificates" },
        { value: 'download', text: "download all certificates as pdf in a zip file" }
    ]
    
    function handleRadioChangeEvent(event) {
        setSelection(event.target.value)
    }

    function getActionComponent() {
        switch (selection) {
            case 'e-mail':
                return props.csvComponent
                break;
        
            case 'download':
                return <button>Download PDF</button>
                break;
            default:
                return
                break;
        }
    }
    
    return (
        <div className="Radiob m-10">
            {radioDetails.map((d, idx) => {
                return (
                    <div>
                        <input type="radio" id={"choice"+idx} name="certi" value={d.value} onChange={handleRadioChangeEvent}></input>
                        <label for={"choice"+idx}>{d.text}</label>
                        <br />
                    </div>
                )
            })}

            <div>
                {getActionComponent()}
            </div>
        </div>
    );
} 

export default Radiob;