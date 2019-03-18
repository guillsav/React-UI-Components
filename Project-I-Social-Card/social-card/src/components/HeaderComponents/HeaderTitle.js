import React from 'react';
import moment from 'moment';

import './Header.css';

const HeaderTitle = () => {
  return (
    <div className="title">
      <h4>Lambda School</h4>
      <p>@lambdaschool · {moment().format('ll')}</p>
    </div>
  );
};

export default HeaderTitle;
