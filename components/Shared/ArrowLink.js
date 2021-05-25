import React from 'react';
import styles from './ArrowLink.module.scss';
function ArrowLink() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>View more insights</p>
      <p className={styles.rightArrow}></p>
    </div>
  );
}

export default ArrowLink;
