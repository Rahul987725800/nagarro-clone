import React from 'react';
import ArrowLink from '../../Shared/ArrowLink';
import LinksSection from '../../Shared/LinksSection';
import styles from './Contact.module.scss';
import FacebookIcon from '../../../public/icons/facebook.svg';
import TwitterIcon from '../../../public/icons/twitter.svg';
import LinkedinIcon from '../../../public/icons/linkedin.svg';
import YoutubeIcon from '../../../public/icons/youtube.svg';
import InstagramIcon from '../../../public/icons/instagram.svg';
function Contact() {
  return (
    <div className={styles.contact}>
      <div>
        <p className={styles.head}>talk to us</p>
        <p className={styles.purple}>Welcome to digital product engineering</p>
        <p className={styles.gray}>
          Thanks for your interest. How can we help?
        </p>

        <ArrowLink dark>view contact details</ArrowLink>
      </div>
      <div>
        <p className={styles.head}>offices</p>
        <LinksSection links={['americas', 'emea', 'asia-pacific']} />
      </div>
      <div>
        <p className={styles.head}>follow us</p>
        <LinksSection
          links={[
            <span className={styles.iconLink}>
              <LinkedinIcon /> linkedin
            </span>,
            <span className={styles.iconLink}>
              <TwitterIcon /> twitter
            </span>,
            <span className={styles.iconLink}>
              <FacebookIcon /> facebook
            </span>,
            <span className={styles.iconLink}>
              <InstagramIcon /> instagram
            </span>,
            <span className={styles.iconLink}>
              <YoutubeIcon /> youtube
            </span>,
          ]}
        />
      </div>
    </div>
  );
}

export default Contact;
