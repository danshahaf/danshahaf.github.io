import React, { useState } from 'react';
import './Intro.css';
import img_0 from '../attachments/photos/graduated.jpg';
import img_1 from '../attachments/photos/family.jpg';

function Intro() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setShowModal(false);
  };

  return (
    <div id="intro-container" className="section">
      <h1>What's up?</h1>
      <div className="subsection">
        <div className="context">
          <h3>Let me tell you a little bit about me:</h3>
          <h5>
            I am 23 years old and live in the best city in the world - NYC! <br />
            I graduated in 2022 and have worked in various jobs and research opportunities, both remotely and in Boston, which can be seen in detail.
          </h5>
        </div>
        <div className="gallery">
          {showModal && (
            <div className="modal">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <img src={selectedImage} alt="Expanded Image" />
            </div>
          )}
          <div
            className="gallery-item"
            onClick={() => openModal(img_0)}
          >
            <img src={img_0} alt="Graduated!" />
            <div className="description">Graduated!</div>
          </div>
          <div
            className="gallery-item"
            onClick={() => openModal(img_1)}
          >
            <img src={img_1} alt="My family!" />
            <div className="description">My family!</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
