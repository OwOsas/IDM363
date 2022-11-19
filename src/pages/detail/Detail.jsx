import React from 'react';
import { useParams } from 'react-router-dom';
import './Detail.css';
import { db } from '../../firebase/firebase-config';
import { doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';

function Detail() {
  const { uid } = useParams();
  const [page, setPage] = useState({});

  function getItem(uid) {
    const itemRef = doc(db, 'inventory', uid);
    onSnapshot(itemRef, (doc) => {
      setPage({ ...doc.data(), uid: doc.id });
    });
  }

  console.log(page);

  useEffect(() => getItem(uid), []);

  var rawData =
    "Storytelling, Video Editing, Cinematography, Filmmaking, Storytelling, Creative Writing, Scriptwriting, Textile, Furniture Making, Decorating, Model Making, Product Design, 3D Modeling, Model Making, Photography, Photo Editing, Photo Printing & Developing, Culture Study, Music Production, Audio Production, Performance, Immersive Experience, Game Development, Augmented Reality / Virtual Reality, Model Making, 3D Modeling, Engineering, Architecture, Interface Design, Web Development, User Experience, Web Design, Graphic Design, Web Design, Web Development, Printmaking, Game Development, Game Design, 3D Modeling, 3D Animation, Fashion, Fashion Design, Textile, Garment Making, Dance, Performance, Culture Study, History, Philosophy, Creative Writing, Business Management, Business Strategy, Art Related Laws***, Brand Development, Retail, Merchandising, Augmented Reality / Virtual Reality, Fashion, 3D Animation, 3D Modeling, Visual Effects, I'm not sure";

  var processedData = rawData.split(', ');

  processedData.map((tag, index) => {
    if (processedData.includes(tag)) {
      processedData = processedData.filter((e) => e !== tag);
      processedData = [...processedData, tag];
    }
  });
  console.log(processedData);

  return (
    <>
      <div className='tagContainer'>
        <div className='tags'>
          {processedData.map((tag, index) => {
            return (
              <div className='tag' key={index}>
                {tag}
              </div>
            );
          })}
        </div>
      </div>

      <div className='itemImg'></div>
      <h1 className='itemName'>{page.itemName}</h1>
      <h2 className='itemPrice'>{page.price}</h2>
    </>
  );
}

export default Detail;
