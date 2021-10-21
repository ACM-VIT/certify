import { useState } from "react";
import CSVReader from "./CSVReader";
import Radiob from "./components/Radiob";
import InputFields from "./components/InputFields";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  // State settings for input field files
  const [logo, setLogo] = useState(null);
  const [header, setHeader] = useState(null);
  const [background, setBackground] = useState(null);
  const [eSignature, setESignature] = useState(null);
  const [csvJson, setCsvJson] = useState(null);
  let errors = { input: "" };

  // Single function updates input field file states based on input field name
  // This must be passed to the InputFields component when it is used
  // If not being used in a direct child component, consider refactoring to use Context instead
  const setFile = (field, file) => {
    switch (field) {
      case field === "logo":
        setLogo(file);
        break;
      case header === "header":
        setHeader(file);
        break;
      case background === "background":
        setBackground(file);
        break;
      case eSignature === "eSignature":
        setESignature(file);
        break;
      case csvJson === "csvJson":
        setCsvJson(file);
        break;
      default:
        errors.input = "Unable to set file";
    }
  };

  const [csvData, setCSVData] = useState([]);

  const getCSVData = (data) => {
    console.log(data);
    setCSVData(data);
  };

  //csvData array variable holds the json objects extracted from the CSV file

  return (
    <div className="App flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Radiob csvComponent={<CSVReader csvData={getCSVData} />} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
