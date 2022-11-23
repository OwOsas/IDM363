import { doc, addDoc, collection, Timestamp } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { plus } from '../../img/icons';
import './CreateListing.css';
import { db } from '../../firebase/firebase-config';
import { CloudinaryUploadWidget } from '../../components';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

function CreateListing() {
  const [img, setImg] = useState(null);
  const [name, setName] = useState('Please Enter Name');
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [description, setDescription] = useState('');

  const imgRef = (e) => setImg(e);

  async function pushListing(itemName, price, stock, imgURL, description) {
    await addDoc(collection(db, 'inventory'), {
      itemName: itemName,
      price: price,
      stock: stock,
      imgURL: imgURL,
      description: description,
      createdAt: Timestamp.fromMillis(Date.now()),
    });
    Navigate('/');
  }
  pushListing.propTypes = {
    itemName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  };

  // useEffect(() => {
  //   if (img) {
  //     console.log(img);
  //     Array.from(img).map((i) => setImgPrev(URL.createObjectURL(i)));
  //   } else {
  //     setImgPrev(null);
  //   }
  // }, [img]);

  return (
    <div className='container'>
      <div className='preview'>
        {/* <input
          onChange={(e) => setImg(e.target.files)}
          type='file'
          required='required'
          id='itemImg'
          accept='image/*'
        ></input>
        <label id='itemImgLabel' htmlFor='itemImg'>
          <div className='imgPrev'>
            {imgPrev ? (
              <img src={imgPrev} alt='' />
            ) : (
              <span className='plus'></span>
            )}
          </div>

          <div className='imgUploadBtn'>Upload Item Image</div>
        </label> */}
        <CloudinaryUploadWidget imgRef={imgRef} />
      </div>
      <div className='dataFill'>
        <label htmlFor=''>Item Name: </label>
        <input
          onChange={(e) => setName(e.target.value)}
          type='text'
          required='required'
          id='itemName'
        ></input>
        <label htmlFor=''>Unit Price: </label>
        <input
          onChange={(e) => setPrice(e.target.value)}
          type='number'
          id='unitPrice'
        ></input>
        <label htmlFor=''>Stock Quantity: </label>
        <input
          onChange={(e) => setStock(e.target.value)}
          type='number'
          id='stock'
        ></input>
        <label htmlFor=''>Description: </label>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          rows='5'
          cols='50'
          id='description'
        ></textarea>

        <button
          className='upload'
          onClick={() => {
            pushListing(name, price, stock, img, description);
            console.log(name, price, stock, description);
          }}
        >
          Upload
        </button>
      </div>
    </div>
  );
}

export default CreateListing;
