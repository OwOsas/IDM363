import {
  doc,
  addDoc,
  collection,
  Timestamp,
  onSnapshot,
  updateDoc,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import './CreateListing.css';
import { db } from '../../firebase/firebase-config';
import { CloudinaryUploadWidget } from '../../components';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';

function CreateListing() {
  document.title = 'Listing';

  const { uid } = useParams();
  const [item, setItem] = useState({});

  //get item form redux
  function getItem(uid) {
    const itemRef = doc(db, 'inventory', uid);
    onSnapshot(itemRef, (doc) => {
      setItem({ ...doc.data(), uid: doc.id });
    });
  }

  //Upload Prop
  const [img, setImg] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [description, setDescription] = useState('');

  //set content to item content if modifying
  useEffect(() => {
    if (uid && uid !== 'create') {
      setImg(item.imgURL);
      setName(item.itemName);
      setPrice(item.price);
      setStock(item.stock);
      setDescription(item.description);
    }
  }, [item, uid]);

  useEffect(() => {
    if (uid && uid !== 'create') {
      getItem(uid);
    }
  }, [uid]);
  console.log('item: ', item);

  const imgRef = (e) => setImg(e);
  const navigate = useNavigate();

  console.log(img, name, price, stock, description);

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
          defaultImg={uid && uid === 'create' ? null : img}
          imgRef={imgRef}
        />
      </div>
      <div className='dataFill'>
        <label htmlFor=''>Item Name: </label>
        <input
          onChange={(e) => setName(e.target.value)}
          type='text'
          required='required'
          id='itemName'
          value={name}
        ></input>
        <label htmlFor=''>Unit Price: </label>
        <input
          onChange={(e) => setPrice(e.target.value)}
          type='number'
          id='unitPrice'
          value={price}
        ></input>
        <label htmlFor=''>Stock Quantity: </label>
        <input
          onChange={(e) => setStock(e.target.value)}
          type='number'
          id='stock'
          value={stock}
        ></input>
        <label htmlFor=''>Description: </label>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          rows='5'
          cols='50'
          id='description'
          value={description}
        ></textarea>

        <button
          className='upload'
          onClick={() => {
            if (uid && uid === 'create') {
              pushListing(name, price, stock, img, description);
            } else {
              updateListing(name, price, stock, img, description);
            }
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
