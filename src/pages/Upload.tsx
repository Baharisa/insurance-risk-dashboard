// [React] Core imports
import React, { useState } from 'react'; // useState = to manage file, message, error

// [React/TypeScript] Define the Upload functional component
const Upload: React.FC = () => {
  // [React State] Stores the uploaded file (or null if none selected)
  const [file, setFile] = useState<File | null>(null); // TypeScript's built-in File type

  // [React State] Feedback message shown to the user
  const [message, setMessage] = useState<string>(''); // Empty string by default

  // [React State] Whether the message is an error
  const [error, setError] = useState<boolean>(false); // Used to control color/styling

  // 🔹 Runs when user selects a file
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]; // Optional chaining (safe access)
    setMessage('');
    setError(false);

    if (selectedFile) {
      setFile(selectedFile); // Save the selected file
    }
  };

  // 🔹 Called when user clicks "Upload"
  const handleUpload = () => {
    if (!file) {
      setMessage('No file selected.'); // Error if no file
      setError(true);
      return;
    }

    // Normally: upload to server here using fetch or axios

    setMessage(`✅ Uploaded "${file.name}" successfully!`); // Show success
    setError(false);
    setFile(null); // Clear file (optional reset)
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded shadow">
      {/* 📦 Container styled with Tailwind CSS
          max-w-md = max width,
          mx-auto = center horizontally,
          mt-12 = margin top,
          p-6 = padding,
          bg-white = background white,
          rounded = rounded corners,
          shadow = box shadow
      */}

      <h2 className="text-xl font-semibold mb-4 text-center">
        Upload CSV File
      </h2>

      {/* ✅ Show message if exists (error or success) */}
      {message && (
        <p
          className={`text-sm mb-4 ${
            error ? 'text-red-600' : 'text-green-600'
          }`}
        >
          {message}
        </p>
      )}

      {/* 📂 File input */}
      <input
        type="file"
        accept=".csv"
        onChange={handleFileChange}
        className="w-full text-sm text-gray-700 border border-gray-300 rounded p-2 mb-4"
      />

      {/* 🚀 Upload button */}
      <button
        onClick={handleUpload}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Upload
      </button>
    </div>
  );
};

export default Upload;
