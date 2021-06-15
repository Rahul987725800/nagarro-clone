import React from 'react';
import styles from './NavCard.module.scss';
import ArrowLink from './ArrowLink';
function NavCard({ head, content, buttonText }) {
  return (
    <div className={styles.card}>
      <div className={styles.head}>{head}</div>
      <div className={styles.content}>{content}</div>
      <ArrowLink dark width={100} hoveredWidth={120} arrowPadding="20px">
        {buttonText}
      </ArrowLink>
    </div>
  );
}

export default NavCard;
