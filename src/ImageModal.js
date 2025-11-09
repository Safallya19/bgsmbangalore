import React from 'react';
import './ImageModal.css';

const ImageModal = ({ image, alt, onClose, onNext, onPrevious, hasNext, hasPrevious }) => {
  if (!image) return null;

  const handleClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={handleClick}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        {hasPrevious && (
          <button className="modal-nav prev" onClick={onPrevious}>❮</button>
        )}
        <img src={image} alt={alt} className="modal-image" />
        {hasNext && (
          <button className="modal-nav next" onClick={onNext}>❯</button>
        )}
      </div>
    </div>
  );
};

export default ImageModal;