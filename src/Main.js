import React from 'react';

import styles from './Main.scss';
import Badges from '../public/images/badges.png'

function Main(){
  return (
    <main id={styles.main}>
      <section className={styles.header_block}>
        <h1 className={styles.main_heading}>
          Discover your exact search engine rankings from 107,296 locations worldwide
        </h1>
        <p className={styles.p_large}>
          Nightwatch solves the location tracking issue that plagues nearly every popular rank tracking tool.
          <br/><br/>
          Finally you can track your search engine rankings on all leading searching engines down to ZIP code level.
        </p>
        <div className={styles.badges}>
          <img src={Badges} alt="badges" />
        </div>
      </section>
    </main>
  )
}

export default Main;
