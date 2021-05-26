import React, { useState } from 'react';
import styles from './ArrowLink.module.scss';
function ArrowLink({
  children,
  width,
  hoveredWidth,
  dark,
  arrowPadding = '3rem',
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={styles.link}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={[styles.text, dark ? styles.dark : styles.light].join(' ')}
      >
        {children}
      </div>

      <div
        className={styles.image}
        style={{
          width: hovered ? hoveredWidth : width + 'px',
          paddingLeft: arrowPadding,
        }}
      >
        <img src="/arrow-stick.svg" alt="" />
      </div>
    </div>
  );
}

export default ArrowLink;
