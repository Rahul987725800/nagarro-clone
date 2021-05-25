import React, { useRef, useEffect } from 'react';
import styles from './MovableText.module.scss';
function getOffsetTop(elem) {
  var offsetTop = 0;
  do {
    if (!isNaN(elem.offsetTop)) {
      offsetTop += elem.offsetTop;
    }
  } while ((elem = elem.offsetParent));
  return offsetTop;
}

function MovableText({ children, floorRef }) {
  const movableTextRef = useRef();
  const ceilRef = useRef();

  useEffect(() => {
    const ceilTopOffset = getOffsetTop(ceilRef.current);
    const floorTopOffset = getOffsetTop(floorRef.current);
    const distance = floorTopOffset - ceilTopOffset;
    let start;
    let move = false;
    window.addEventListener('scroll', (e) => {
      const ceilTextPos = ceilRef.current.getBoundingClientRect();
      if (
        (ceilTextPos.top < 240 && ceilTextPos.top > 220) ||
        (start &&
          window.scrollY - start > 0 &&
          window.scrollY - start < distance)
      ) {
        if (!start) {
          start = window.scrollY;
        }
        move = true;
      }
      if (move) {
        const movableTopOffset = getOffsetTop(movableTextRef.current);
        if (movableTopOffset < ceilTopOffset) {
          movableTextRef.current.style.top = `0px`;
          move = false;
        } else if (movableTopOffset > floorTopOffset) {
          movableTextRef.current.style.top = `${distance - 40}px`;
          movableTextRef.current.style.transform = `translateY(${40}px)`;
          move = false;
        } else {
          movableTextRef.current.style.top = `${window.scrollY - start}px`;
          movableTextRef.current.style.transform = `translateY(${0}px)`;
        }
      }
    });
  }, []);

  return (
    <>
      <span className={styles.ceil} ref={ceilRef}>
        {children}
      </span>
      <span className={styles.movableText} ref={movableTextRef}>
        {children}
      </span>
    </>
  );
}

export default MovableText;
