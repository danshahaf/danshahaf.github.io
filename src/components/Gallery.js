import React, { useState, useEffect } from 'react';
import styles from '../styles/Gallery.module.css';

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    const photoList = [
      {
        id: 1,
        filename: 'A01.jpg',
        title: 'Madison Ave',
        date: '2023-12-04',
      },
    ];
    setPhotos(photoList);
  }, []);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div id="gallery" className={styles.gallery}>
      <div className={styles.content}>
        <h2>My Photos</h2>
        <div className={styles.photoGrid}>
          {photos.map((photo) => (
            <div key={photo.id} className={styles.photoItem}>
              <div className={styles.photoInfo}>
                <h3 className={styles.photoTitle}>{photo.title}</h3>
                <p className={styles.photoDate}>{new Date(photo.date).toLocaleDateString()}</p>
              </div>
              <img
                src={`${process.env.PUBLIC_URL}/docs/photos/${photo.filename}`}
                alt={photo.title}
                className={styles.photo}
                onClick={() => handlePhotoClick(photo)}
              />
            </div>
          ))}
        </div>
      </div>

      {selectedPhoto && (
        <div className={styles.modal}>
          <button className={styles.closeButton} onClick={handleCloseModal}>
            &times;
          </button>
          <img
            src={`/photos/${selectedPhoto.filename}`}
            alt={selectedPhoto.title}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
