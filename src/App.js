import { useState } from "react";
import CSVReader from "./CSVReader";
import Radiob from "./components/Radiob";
import InputFields from "./components/InputFields";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Preview from "./components/Preview";
import samplePDF from "./sample.pdf";

function App() {
  // State settings for input field files
  const [logo, setLogo] = useState(null);
  const [header, setHeader] = useState(null);
  const [background, setBackground] = useState(null);
  const [eSignature, setESignature] = useState(null);
  const [csvJson, setCsvJson] = useState(null);
  const [preview, setpreview] = useState(false);
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
        <button className="mx-10 text-blue-400" onClick={() => setpreview(!preview)}>
          Preview
        </button>
        <div className={preview && "hidden"}>
          <Preview pdf={samplePDF} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
