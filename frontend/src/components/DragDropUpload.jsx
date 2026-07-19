import { Upload, FileText, CheckCircle } from "lucide-react";

function DragDropUpload({ selectedFile, setSelectedFile }) {
  const handleDrop = (e) => {
    e.preventDefault();

    const file = e.dataTransfer.files[0];

    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
    } else {
      alert("Please upload a PDF file.");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className="mt-8 border-2 border-dashed border-blue-400 rounded-2xl p-10 text-center bg-blue-50 hover:bg-blue-100 transition duration-300"
    >
      {!selectedFile ? (
        <>
          <Upload className="mx-auto h-14 w-14 text-blue-600" />

          <h3 className="mt-4 text-xl font-bold">
            Drag & Drop your PDF here
          </h3>

          <p className="text-gray-500 mt-2">
            or click below to browse
          </p>

          <label className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl cursor-pointer transition">
            Browse Files

            <input
              type="file"
              accept=".pdf"
              onChange={handleFileSelect}
              className="hidden"
            />
          </label>
        </>
      ) : (
        <>
          <CheckCircle className="mx-auto h-14 w-14 text-green-600" />

          <h3 className="mt-4 text-xl font-bold text-green-700">
            File Ready
          </h3>

          <div className="mt-4 flex justify-center items-center gap-2">
            <FileText className="text-blue-600" />

            <span className="font-medium">
              {selectedFile.name}
            </span>
          </div>

          <p className="text-gray-500 mt-3">
            Click Upload Report to continue.
          </p>
        </>
      )}
    </div>
  );
}

export default DragDropUpload;