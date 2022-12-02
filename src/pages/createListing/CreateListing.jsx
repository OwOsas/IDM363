import {
  doc,
  addDoc,
  collection,
  Timestamp,
  onSnapshot,
  updateDoc,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import style from './CreateListing.css';
import { db } from '../../firebase/firebase-config';
import { CloudinaryUploadWidget } from '../../components';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';

function CreateListing() {
  document.title = 'Listing';

  const { uid } = useParams();
  const [item, setItem] = useState({
    uid: uid,
    imgURL: '',
    itemName: '',
    price: 0,
    stock: 0,
    description: '',
  });

  //get item form redux
  function getItem(uid) {
    const itemRef = doc(db, 'inventory', uid);
    onSnapshot(itemRef, (doc) => {
      setItem({ ...doc.data(), uid: doc.id });
    });
  }

  useEffect(() => {
    if (uid && uid !== 'create') {
      getItem(uid);
    }
  }, [uid]);
  console.log('item: ', item);

  const imgRef = (e) => setItem({ ...item, imgURL: e });
  const navigate = useNavigate();

  async function pushListing(itemName, price, stock, imgURL, description) {
    await addDoc(collection(db, 'inventory'), {
      itemName: itemName,
      price: price,
      stock: stock,
      imgURL: imgURL,
      description: description,
      createdAt: Timestamp.fromMillis(Date.now()),
    });
    navigate('/');
  }
  pushListing.propTypes = {
    itemName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    imgURL: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

  async function updateListing(itemName, price, stock, imgURL, description) {
    await updateDoc(doc(db, 'inventory', uid), {
      itemName: itemName,
      price: price,
      stock: stock,
      imgURL: imgURL,
      description: description,
      createdAt: Timestamp.fromMillis(Date.now()),
    });
    navigate('/');
  }
  updateListing.propTypes = {
    itemName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    imgURL: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

  return (
    <div className='container'>
      <div className='preview'>
        <CloudinaryUploadWidget
          defaultImg={uid && uid === 'create' ? null : item.imgURL}
          imgRef={imgRef}
        />
      </div>
      <div className='dataFill'>
        <label htmlFor=''>Item Name: </label>
        <input
          onChange={(e) => setItem({ ...item, itemName: e.target.value })}
          type='text'
          required='required'
          id='itemName'
          value={item.itemName}
        ></input>
        <label htmlFor=''>Unit Price: </label>
        <input
          onChange={(e) => setItem({ ...item, price: e.target.value })}
          type='number'
          id='unitPrice'
          value={item.price}
        ></input>
        <label htmlFor=''>Stock Quantity: </label>
        <input
          onChange={(e) => setItem({ ...item, stock: e.target.value })}
          type='number'
          id='stock'
          value={item.stock}
        ></input>
        <label htmlFor=''>Description: </label>
        <textarea
          onChange={(e) => setItem({ ...item, description: e.target.value })}
          rows='5'
          cols='50'
          id='description'
          value={item.description}
        ></textarea>

        <button
          className='upload'
          onClick={() => {
            if (uid && uid === 'create') {
              pushListing(
                item.itemName,
                item.price,
                item.stock,
                item.imgURL,
                item.description
              );
            } else {
              updateListing(
                item.itemName,
                item.price,
                item.stock,
                item.imgURL,
                item.description
              );
            }
          }}
        >
          {uid && uid === 'create' ? 'Upload' : 'Update'}
        </button>
      </div>
    </div>
  );
}

export default CreateListing;
