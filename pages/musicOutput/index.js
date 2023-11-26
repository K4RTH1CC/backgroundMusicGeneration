// // pages/loading.js
// import { Fragment, useEffect, useState } from 'react';
// import ReactLoading from "react-loading";
// import axios from 'axios';

// const Loader = () => {
//   return (
//     <div>
//       <ReactLoading type="bars" color="#000000" height={50} width={200} className='align-center'/>
//     </div>
//   );
// }
// const LoadingPage = () => {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios.get("http://127.0.0.1:5000")
//       .then((response) => {
//         if (response.status === 200) {
//           return response.blob();
//         } else {
//           throw new Error('Failed to fetch the audio file');
//         }
//       })
//       .then((blob) => {
//         const audioUrl = URL.createObjectURL(blob);
//         const audio = new Audio(audioUrl);
//         audio.play();
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error(error);
//         setError('Failed to load the audio file');
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <Fragment>
//       {loading ? (
//         <div className='mt-60 place-content-center m-auto'>
//           <Loader />
//         </div>
//       ) : error ? (
//         <div>Error: {error}</div>
//       ) : (
//         <div>Audio received and playing.</div>
//       )}
//     </Fragment>
//   );
// };

// export default LoadingPage;


// pages/loading.js
import { Fragment, useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import axios from 'axios';

const Loader = () => {
  return (
    <div>
      <ReactLoading type="bars" color="#000000" height={50} width={200} className="m-auto" />
    </div>
  );
};

const LoadingPage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const pollServer = async () => {
      try {
        const response = await axios.post('http://localhost:5000');
        if (response.status === 200) {
          // Process the response or initiate audio playback
          setLoading(false);
        } else {
          throw new Error('Failed to fetch the audio file');
        }
      } catch (error) {
        console.error(error);
        setError('Failed to load the audio file');
        // Retry after a delay, adjust as needed
        setTimeout(pollServer, 1000);
      }
    };

    pollServer();
  }, []);

  return (
    <Fragment>
      {loading ? (
        <div className="mt-60 place-content-center m-auto">
          <Loader />
        </div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <div>Audio received and playing.</div>
      )}
    </Fragment>
  );
};

export default LoadingPage;
