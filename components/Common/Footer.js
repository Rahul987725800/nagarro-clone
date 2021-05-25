import React from 'react';
import styles from './Footer.module.scss';
// import { useDynamicSVGImport } from './useDynamicSVGImport';

import FacebookIcon from '../../public/icons/facebook.svg';
import TwitterIcon from '../../public/icons/twitter.svg';
import LinkedinIcon from '../../public/icons/linkedin.svg';
import YoutubeIcon from '../../public/icons/youtube.svg';
import InstagramIcon from '../../public/icons/instagram.svg';
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <img src="/logo.svg" alt="logo" />
        <p className={styles.name}>nagarro</p>
        <p className={styles.year}>&#9400; 2021</p>
      </div>
      <div className={styles.links}>
        <div className={styles.site}>
          <p>contact us</p>
          <p>privacy policy</p>
          <p>imprint</p>
          <p>sitemap</p>
        </div>
        <div className={styles.social}>
          <FacebookIcon />
          <TwitterIcon />
          <div
            style={{
              alignSelf: 'start',
            }}
          >
            <LinkedinIcon />
          </div>
          <YoutubeIcon />
          <InstagramIcon />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
