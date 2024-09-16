import React, { useState, useEffect } from 'react';
import styles from '../styles/Gallery.module.css';

const Gallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // In a real scenario, you'd fetch this list from your server
    // For now, we'll simulate it with a hard-coded list
    const photoList = [
      {
        id: 1,
        filename: 'A01.jpg',
        title: 'Madison Ave',
        date: '2023-12-04'
      },
      // Add more photos as needed
    ];
    setPhotos(photoList);
  }, []);

  return (
    <div id="gallery" className={styles.gallery}>
      <div className={styles.content}>
        <h1>My Photos</h1>
        <div className={styles.photoGrid}>
          {photos.map((photo) => (
            <div key={photo.id} className={styles.photoItem}>
              <div className={styles.photoInfo}>
                <h3 className={styles.photoTitle}>{photo.title}</h3>
                <p className={styles.photoDate}>{new Date(photo.date).toLocaleDateString()}</p>
              </div>
              <img 
                src={`../photos/${photo.filename}`} 
                alt={photo.title}
                className={styles.photo}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;