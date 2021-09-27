import React from 'react';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

import './App.scss';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div id="app">
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App;
