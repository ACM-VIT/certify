import { useState } from 'react';

function CSVReader() {
    const [file, setFile] = useState();

    return(
        <form id='submit-csv-form'>
            <input type="file" accept=".csv" id="file">
            </input>
            <br/>
            <button>Submit</button>
        </form>
    );
}

export default CSVReader;