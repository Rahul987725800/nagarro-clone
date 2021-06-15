import React, { useState, useRef, useEffect } from 'react';
import styles from './ArrowLink.module.scss';
function ArrowLink({ children, dark, marginTopArrow = 0 }) {
  const textRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const textPos = textRef.current.getBoundingClientRect();
    setWidth(textPos.width);
  }, []);
  return (
    <span
      className={[styles.link, dark ? styles.dark : styles.light].join(' ')}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className={styles.text} ref={textRef}>
        {children}
      </span>

      <span
        className={styles.image}
        style={{
          width: hovered ? width + 20 : width + 'px',
          marginLeft: (width * 15) / 100 + 'px',
          marginTop: marginTopArrow + 'px',
        }}
      >
        <img src="/arrow-stick.svg" alt="" />
      </span>
    </span>
  );
}

export default ArrowLink;
