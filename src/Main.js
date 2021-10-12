import React from 'react';

import styles from './Main.scss';
import Badges from '../public/images/badges.png'
import Globe from '../public/images/globe.png'

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
        <a className={styles.main_signup_button} href="">Sign up for 14 days free &rarr;</a>
        <div className={styles.badges}>
          <img src={Badges} alt="badges" />
        </div>
      </section>

      <section className={styles.why}>
        <div className={styles.why_left}>
          <h2>Why track your search rankings locally?</h2>
          <p className={`${styles.p_large} ${styles.blue}`}>Understanding your local rankings is critical to growing your local search reach and sales. We track over 50,000 more locations than anyone else.</p>
          <p className={styles.p_large}>Nightwatch&apos;s local rank tracking allows you track your critical keywords in 107,296 locations worldwide, across both the search engine results page and map pack.<br/><br/>
          One of our clients tracks 6,003 locations across America and Mexico, down to a zip code level.<br/><br/>They receive accurate data across multiple devices, and continuously optimize. Which is why they&apos;ve achieved 22% increase in search referrals in the last 3 months.</p>
        </div>
        <div className={styles.why_right}>
          <img src={Globe} alt="globe" />
        </div>
      </section>
    </main>
  )
}

export default Main;
