import React from 'react';
import styles from './InsightsEvents.module.scss';
import NavCard from '../../Shared/NavCard';
import AuthorBlog from '../../Shared/AuthorBlog';
function InsightsEvents() {
  return (
    <div className={styles.insights}>
      <div className={styles.card}>
        <NavCard
          head="insights"
          content="Explore the thought process and insights of our experts."
          buttonText="view all insights"
        />
      </div>
      <div className={styles.rest}>
        <div className={styles.blog}>
          <AuthorBlog
            title="CARING@Nagarro: Mansi Gupta on being 'CARING'"
            author="Sabrina Floh"
          />
        </div>
        <div className={styles.blog}>
          <AuthorBlog
            title="Building a design system from scratch"
            author="Cody Cai"
          />
        </div>

        <div className={styles.events}>
          <p className={styles.head}>events</p>
          <div className={styles.details}>
            <p className={styles.date}>27 Apr, 2021</p>
            <p className={styles.text}>
              Using chaor to elevate your customer's experience
            </p>
            <p className={styles.bottom}>more information</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InsightsEvents;
