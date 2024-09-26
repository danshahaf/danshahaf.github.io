// Step 1: Verify photo location
// Ensure your photos are in the following path:
// portfolio/docs/photos/A01.jpg

// Step 2: Update package.json
// Add this to your package.json scripts:
// "postbuild": "cp -R docs build/docs"

// Step 3: Update Gallery.js
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

  const getPhotoPath = (filename) => {
    // This function will work in both development and production
    if (process.env.NODE_ENV === 'production') {
      return `${process.env.PUBLIC_URL}/photos/${filename}`;
    } else {
      return `./photos/${filename}`;
    }
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
                src={getPhotoPath(photo.filename)}
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
            src={getPhotoPath(selectedPhoto.filename)}
            alt={selectedPhoto.title}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;

// Step 4: Rebuild your project
// Run: npm run build

// Step 5: Serve your build
// Use a local server to test the production build:
// npx serve -s build