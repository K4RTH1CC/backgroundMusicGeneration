import { Fragment } from "react";
import { useState } from 'react';
import FormData from "FormData";

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
          const response = await fetch('http://localhost:8000', {
            method: 'POST',
            body: formData,
          });
    
          if (response.ok) {
            // Handle success
            console.log('Image uploaded successfully.');
          } else {
            // Handle error
            console.error('Image upload failed.');
          }
        } catch (error) {
          console.error('Network error:', error);
        }
      };

    return (
        <Fragment>
            <div className="mt-40">
                <form onSubmit={handleFormSubmit}>
                    <div className="justify-evenly">
                        <label className="text-black">Upload Image:</label>
                        <input type='file' name='image' onChange={handleFileChange}/>
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
