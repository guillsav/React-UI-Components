import React from 'react';
import './Header.css';

const ImageThumbnail = () => {
  return (
    <div className="image-thumbnail">
      <img
        src={require('./lambda-school-logo-red.jpg')}
        alt="lambda school logo"
      />
    </div>
  );
};

export default ImageThumbnail;
