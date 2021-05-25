import React from 'react';
import styles from './BlogCard.module.scss';
import CustomImage from './CustomImage';
function BlogCard() {
  return (
    <div className={styles.container}>
      <CustomImage src="/ai.jpg" />
      <div className={styles.content}>
        <p className={styles.description}>
          Architectural design patterns for multi-tenancy on AWS
        </p>
        <div className={styles.nameAndDate}>
          <p className={styles.name}>Blog</p>
          <p className={styles.date}>Jan 16, 2021</p>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
