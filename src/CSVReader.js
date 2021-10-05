import { useState } from 'react';

function CSVReader() {
    const [file, setFile] = useState();

    function submitFile() {
        const csvFile = file;
        const reader = new FileReader();

        reader.onload = function(ev) {
            const data = ev.target.result;
            console.log(data);
        }

        reader.readAsText(csvFile);
    }

    return(
        <form id='submit-csv-form'>
            <input type="file" accept=".csv" id="file"
                onChange={(ev) => {
                    setFile(ev.target.files[0])
                }}>
            </input>
            <br/>
            <button
                onClick={(ev) => {
                    ev.preventDefault();
                    if (file)
                        submitFile();
                }}>Submit</button>
        </form>
    );
}

export default CSVReader;