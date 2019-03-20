import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="footer-item">
        <img src={require('./chat2.svg')} alt="" width="18px" height="18px" />
      </div>
      <div className="footer-item">
        <img
          src={require('./retweet2.svg')}
          alt=""
          width="26px"
          height="18px"
        />
        <p className="retweet">6</p>
      </div>
      <div className="footer-item">
        <img src={require('./like2.svg')} alt="" width="18px" height="18px" />
        <p>4</p>
      </div>
      <div className="footer-item">
        <img
          src={require('./direct-message.svg')}
          alt=""
          width="18px"
          height="18px"
        />
      </div>
    </div>
  );
};

export default Footer;
