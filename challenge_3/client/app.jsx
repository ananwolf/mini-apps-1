import React from 'react';
import checkout from './checkout.jsx';
import firstPage from './firstPage.jsx';
import secondPage from './secondPage.jsx';
import thirdPage from './thirdPage.jsx';
import confirmPage from './confirmPage';

class App extends React.component {
  super(props);
  this.state = {
    currentPage: 0,
    firstPageInfo: {},
    secondPageInfo: {},
    thirdPageInfo: {}
  };
}



