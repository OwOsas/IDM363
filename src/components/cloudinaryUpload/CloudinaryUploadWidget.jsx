import { useRef, useEffect, useState } from 'react';

const CloudinaryUploadWidget = ({ defaultImg, imgRef }) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  const [imgPrev, setImgPrev] = useState();
  useEffect(() => setImgPrev(defaultImg), [defaultImg]);
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: 'dbqe13ona',
        uploadPreset: 'e6ip0daw',
      },
      (error, result) => {
        console.log(error, result);
        if (!error && result && result.event === 'success') {
          setImgPrev(result.info.url);
          imgRef(result.info.url);
          console.log('imgPrev: ', imgPrev);
        }
      }
    );
  }, [imgPrev, imgRef]);
  return (
    <div id='itemImgLabel'>
      <button className='imgPrev' onClick={() => widgetRef.current.open()}>
        {!imgPrev ? (
          <span className='plus'></span>
        ) : (
          <img src={imgPrev} alt='' />
        )}
      </button>
      <button className='imgUploadBtn' onClick={() => widgetRef.current.open()}>
        Upload Image
      </button>
    </div>
  );
};
export default CloudinaryUploadWidget;
