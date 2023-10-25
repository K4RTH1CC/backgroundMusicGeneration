import { Fragment } from "react";
import { useState } from 'react';
import axios from "axios";

function HomePage(){
    
    const [file, setFile] = useState(null);
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
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
            <div className="mt-40">
                <form onSubmit={handleFormSubmit} encType="multipart/form-data">
                    <div className="justify-evenly border-2 rounded-md border-gray-300">
                        <label className="text-black border-1 rounded-l-sm border-gray-600 ">Upload Image:</label>
                        <input type='file' name='image' onChange={handleFileChange} className="border-1 rounded-r-sm border-gray-600" required/>
                    </div>
                    <button className="mt-3" type="submit">
                        Upload
                    </button>
                </form>
            </div>
        </Fragment>
    )
}

export default HomePage;
