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
function closerToFirst(val, c1, c2) {
  if (Math.abs(val - c1) < Math.abs(val - c2)) {
    return true;
  }
  return false;
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
        if (
          movableTopOffset >= ceilTopOffset &&
          movableTopOffset - 40 <= floorTopOffset
          // movableTopOffset is not calculated accurately it is becoming more than floorTopOffset
        ) {
          movableTextRef.current.style.top = `${window.scrollY - start}px`;
        } else {
          if (closerToFirst(movableTopOffset, ceilTopOffset, floorTopOffset)) {
            movableTextRef.current.style.top = `0px`;
          } else {
            movableTextRef.current.style.top = `${distance}px`;
          }
          move = false;
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
