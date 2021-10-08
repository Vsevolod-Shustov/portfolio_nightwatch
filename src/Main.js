import React from 'react';

import './Main.scss';
import Badges from '../public/images/badges.png'

function Main(){
  return (
    <main id="main">
      <section className="header-block">
        <h1 className="main-heading">
          Discover your exact search engine rankings from 107,296 locations worldwide
        </h1>
        <p className="p-large">
          Nightwatch solves the location tracking issue that plagues nearly every popular rank tracking tool.
          <br/><br/>
          Finally you can track your search engine rankings on all leading searching engines down to ZIP code level.
        </p>
        <div className="badges">
          <img src={Badges} alt="badges" />
        </div>
      </section>
    </main>
  )
}

export default Main;
