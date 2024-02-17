import React, { useState } from 'react';
import './summarize.css';

const Summarize = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    if (!selectedFile) return; 

    setIsLoading(true);

    // Placeholder for future TextRazor API call:
    // 1. You would read the file contents using a 'FileReader'
    // 2. Send the extracted text to your API endpoint or utilize the API's functionality here

    // Simulated delay with placeholder response (remove later)
    setTimeout(() => {
      setSummary('This is a placeholder summary. Your API-generated summary would appear here.');
      setIsLoading(false);
    }, 1500); 
  };

  return (
    <div className="container">
      <div className="upload-section">
        <h2>Upload Your Document</h2>
        <input type="file" accept=".pdf,.docx" onChange={handleFileChange} />
        <button onClick={handleFileUpload} disabled={isLoading}>
          {isLoading ? 'Generating Summary...' : 'Get Summary'}
        </button>
      </div>

      {summary && (
        <div className="summary-section">
          <h2>Summary</h2>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
};

export default Summarize;
