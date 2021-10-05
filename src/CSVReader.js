import { useState } from 'react';

function CSVReader() {
    const [file, setFile] = useState();
    const [csvArray, setCSVArray] = useState([]);

    function submitFile() {
        const csvFile = file;
        const reader = new FileReader();

        reader.onload = function(ev) {
            const data = ev.target.result;
            console.log(data);
            processCSVData(data);
        }

        reader.readAsText(csvFile);
    }

    //Comma as the deliminator
    function processCSVData(data) {
        const headers = data.slice(0, data.indexOf("\n").split(","));
        const rows = data.slice(data.indexOf("\n") + 1).split("\n");

        const array = rows.map((row) => {
            const values = row.split(",");
            const object = headers.reduce((obj, header, i) => {
                obj[header] = values[i];
                return obj;
            }, {});
            return object;
        });

        setCSVArray(array);
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