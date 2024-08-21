import React, { useState } from 'react';

import { uploadTTLFile } from '../services/TtlFileUploadService';
import '../style.css';



function UploadForm() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState('');

  const onFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const onUpload = () => {
    if (!selectedFile) {
      alert('Please select a file first.');
      return;
    }

    uploadTTLFile(selectedFile)
      .then((response) => {
        setMessage('Upload successful!');
      })
      .catch((error) => {
        setMessage('Upload failed: ' + error.message);
      });
  };

  return (
    <div className="UploadForm">
      <h1>Upload TTL File</h1>
      <input type="file" onChange={onFileChange} />
      <button onClick={onUpload}>Upload</button>
      <p>{message}</p>
    </div>
  );
}

export default UploadForm;
