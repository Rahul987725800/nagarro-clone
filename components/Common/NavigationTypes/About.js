import React from 'react';
import styles from './About.module.scss';
import NavCard from '../../Shared/NavCard';
function About() {
  return (
    <div className={styles.about}>
      <NavCard
        head={
          <span>
            About
            <br /> nagarro
          </span>
        }
        content="Discover more about us, an outstanding digital solutions developer and a great place to work in."
        buttonText="About us"
      />
      <NavCard
        head="Investor relations"
        content="Financial information, governance, reports, announcements, and investor events."
        buttonText="Nagarro IR"
      />
      <NavCard
        head={
          <span>
            News &
            <br /> press releases
          </span>
        }
        content="Catch up to what we are doing, and what people are talking about."
        buttonText="News center"
      />
      <NavCard
        head="Caring & sustainability"
        content="We are for our world. Learn about our ESG initiatives."
        buttonText="Learn more"
      />
    </div>
  );
}

export default About;
