import React from 'react';
import styles from './LinksSection.module.scss';
function LinksSection({ links }) {
  return (
    <div className={styles.links}>
      {links.map((link, i) => {
        if (link === 'break') {
          return <p key={i} className={styles.spacer}></p>;
        }
        return (
          <p key={i} className={styles.link}>
            {link}
          </p>
        );
      })}
    </div>
  );
}

export default LinksSection;
