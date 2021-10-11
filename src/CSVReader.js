import { useState } from 'react';

function CSVReader(props) {
    const [file, setFile] = useState();
    const [csvArray, setCSVArray] = useState([]);
    const [isCSV, setIsCSV] = useState(false);

    function submitFile() {
        const csvFile = file;
        const reader = new FileReader();

        reader.onload = function(ev) {
            ev.preventDefault();
            const data = ev.target.result;
            console.log(data);
            processCSVData(data);
            props.csvData(csvArray);
        }

        reader.readAsText(csvFile);
    }

    //Comma as the deliminator
    function processCSVData(data) {
        const headers = data.slice(0, data.indexOf("\n")).split(",");
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
                    var fileName = ev.target.files[0].name;
                    if (fileName.split(".").pop() == "csv") {
                        setIsCSV(true);
                        setFile(ev.target.files[0]);
                    } else {
                        setIsCSV(false);
                        alert("Only CSV files are accepted.");
                    }           
                }}>
            </input>
            <br/>
            <button
                onClick={(ev) => {
                    ev.preventDefault();
                    if (file && isCSV)
                        submitFile();
                    else if (file && !isCSV)
                        alert("Only CSV files are accepted.");
                }}>Submit</button>
        </form>
    );
}

export default CSVReader;