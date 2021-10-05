import { useState } from 'react';
import CSVReader from './CSVReader'

function App() {
  const [csvData, setCSVData] = useState([]);

  const getCSVData = (data) => {
    console.log(data);
    setCSVData(data);
  }

  //csvData array variable holds the json objects extracted from the CSV file

  return (
    <div className="App">
      <p class="bg-red-500">Something is here</p>
      <CSVReader csvData={getCSVData}/>
    </div>
  );
}

export default App;
