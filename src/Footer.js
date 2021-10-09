import React from 'react';

import styles from './Footer.scss';

function Footer(){
  return (
    <footer id={styles.footer}>
      <section className={styles.footer_block}>
        <div className={`${styles.small_header} ${styles.footer}`}>MAIN FEATURES</div><a href="" target="_blank" className={styles.footer_link}>Rank Tracker</a><a href="" target="_blank" className={styles.footer_link}>Reporting</a><a href="" target="_blank" className={styles.footer_link}>Site Audit</a><a href="" target="_blank" className={styles.footer_link}>Agency Rank Tracker</a><a href="" target="_blank" className={styles.footer_link}>Daily Rank Tracking</a><a href="" target="_blank" className={styles.footer_link}>Enterprise Rank Tracker</a>
      </section>

      <section className={styles.footer_block}>
        <div className={`${styles.small_header} ${styles.footer}`}>OTHER TOOLS</div><a href="" target="_blank" className={styles.footer_link}>Search Engine Simulator</a><a href="" target="_blank" className={styles.footer_link}>Mobile Rank Tracker</a><a href="" target="_blank" className={styles.footer_link}>YouTube Rank Tracker</a><a href="" target="_blank" className={styles.footer_link}>Local SERP Tracking</a><a href="" target="_blank" className={styles.footer_link}>Bing Rank Tracker</a><a href="" target="_blank" className={styles.footer_link}>Large-Scale Rank Tracking</a>
      </section>

      <section className={styles.footer_block}>
        <div className={`${styles.small_header} ${styles.footer}`}>RESOURCES</div><a href="" target="_blank" className={styles.footer_link}>Affiliate Program </a><a href="" target="_blank" className={styles.footer_link}>Member Perks</a><a href="" target="_blank" className={styles.footer_link}>Help Docs</a><a href="" target="_blank" className={styles.footer_link}>API Docs</a><a href="" target="_blank" className={styles.footer_link}>Blog</a>
      </section>

      <section className={styles.footer_block}>
        <div className={`${styles.small_header} ${styles.footer}`}>COMPARE</div><a href="" target="_blank" className={styles.footer_link}>Ahrefs Rank Tracker</a><a href="" target="_blank" className={styles.footer_link}>SERPRobot/SERPLab</a><a href="" target="_blank" className={styles.footer_link}>Advanced Web Ranking</a><a href="" target="_blank" className={styles.footer_link}>GetStat</a>
      </section>

      <section className={styles.footer_block}>
        <div className={`${styles.small_header} ${styles.footer}`}>COMPANY</div><a href="" className={styles.footer_link}>Support</a><a href="" target="_blank" className={styles.footer_link}>Jobs</a><a href="" target="_blank" className={styles.footer_link}>Privacy Policy</a><a href="" target="_blank" className={styles.footer_link}>Terms of Service</a>
      </section>
    </footer>
  )
}

export default Footer;
