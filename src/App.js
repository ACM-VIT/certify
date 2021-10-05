import { useState } from 'react';
import CSVReader from './CSVReader'

function App() {
  const [csvData, setCSVData] = useState([]);

  const getCSVData = (data) => {
    setCSVData(data);
  }

  return (
    <div className="App">
      <p class="bg-red-500">Something is here</p>
      <CSVReader csvData={getCSVData}/>
    </div>
  );
}

export default App;
