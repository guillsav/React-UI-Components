import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="footer-item">
        <img src={require('./chat.svg')} alt="" width="16px" height="16px" />
      </div>
      <div className="footer-item">
        <img src={require('./retweet.svg')} alt="" width="16px" height="16px" />
        <p>6</p>
      </div>
      <div className="footer-item">
        <img src={require('./like.svg')} alt="" width="16px" height="16px" />
        <p>4</p>
      </div>
      <div className="footer-item">
        <img
          src={require('./direct-message.svg')}
          alt=""
          width="16px"
          height="16px"
        />
      </div>
    </div>
  );
};

export default Footer;
