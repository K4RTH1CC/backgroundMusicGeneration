// pages/loading.js
import { useEffect, useState } from 'react';

const LoadingPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('localhost 5000 most likely', {method: 'POST',})
      .then((response) => {
        if (response.status === 200) {
          return response.blob();
        } else {
          throw new Error('Failed to fetch the audio file');
        }
      })
      .then((blob) => {
        const audioUrl = URL.createObjectURL(blob);
        const audio = new Audio(audioUrl);
        audio.play();
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>Audio received and playing.</div>
      )}
    </div>
  );
};

export default LoadingPage;
