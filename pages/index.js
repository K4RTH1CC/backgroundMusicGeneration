import { Fragment, useState } from 'react';
import axios from 'axios';

function HomePage() {
  const [file, setFile] = useState(null);
  const [isFileSelected, setIsFileSelected] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setIsFileSelected(!!e.target.files[0]); 
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
        formData.append('image', file);
    
        try {
          const response = await axios.post('http://localhost:5000', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
    
          // Handle success
          console.log('Image uploaded successfully:', response.data);
        } catch (error) {
          // Handle error
          console.error('Image upload failed:', error);
        }
  };

  return (
    <Fragment>
      <div className="mt-40 flex">
        <form
          onSubmit={handleFormSubmit}
          encType="multipart/form-data"
          className="place-content-center m-auto"
        >
          <div className="max-w-xl flex">
            <label className="flex justify-center w-full h-32 px-4 transition bg-gray-300 border-2 border-gray-600 border-dashed rounded-l-md appearance-none cursor-pointer hover:border-gray-800 focus:outline-none">
              <span className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <span className="font-medium text-gray-600">
                  Drop files to Attach, or <span className="text-blue-600 underline">browse</span>
                  {isFileSelected && (
                    <div className="text-green-500 mt-2">
                      <br />File uploaded
                    </div>
                  )}
                </span>
              </span>
              <input type="file" name="image" className="hidden" onChange={handleFileChange}/>
            </label>
            <button className="h-32 m-auto text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-r-md text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="submit">
              Generate
            </button>
          </div>
        </form>
      </div>

      
    </Fragment>
  );
}

export default HomePage;