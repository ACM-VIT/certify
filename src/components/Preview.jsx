import React, { useState } from "react";
import { Document, Page } from "react-pdf";

export default function Preview(props) {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const { pdf } = props;

  return (
    <Document
      file={pdf} // sample data
      options={{
        workerSrc:
          "https://cdn.jsdelivr.net/npm/react-pdf@4.1.0-beta.5/dist/pdf.worker.entry.js",
      }}
      onLoadSuccess={onDocumentLoadSuccess}
    >
      <div className="flex flex-col md:flex-row gap-4">
        {Array.from(new Array(numPages), (el, index) => (
          <Page
            className="shadow-lg hover:shadow-2xl"
            key={`page_${index + 1}`}
            pageNumber={index + 1}
          />
        ))}
      </div>
    </Document>
  );
}
