import React, { useContext, useRef, useState } from 'react';
import styles from './Breakthroughs.module.scss';
import { useSwipeable } from 'react-swipeable';
import { CSSTransition } from 'react-transition-group';
import { mod } from '../../utils';
import { items } from './data';
import { NavbarStateContext } from '../../state/navbarState';

function withinRange(val, low, high) {
  return val >= low && val <= high;
}
function withinBox(mouse, box) {
  if (box)
    return (
      withinRange(mouse.clientX, box.left, box.left + box.width) &&
      withinRange(mouse.clientY, box.top, box.top + box.height)
    );
}
function Breakthroughs() {
  const { navbarRef } = useContext(NavbarStateContext);
  const seeVideoButtonRef = useRef();
  const breakthroughsRef = useRef();
  const [cursorPosition, setCursorPosition] = useState({
    left: 0,
    right: 0,
  });
  const [showCursor, setShowCursor] = useState(false);

  const [active, setActive] = useState(0);
  const [swipeType, setSwipeType] = useState('left');
  const [modFunction, setModFunction] = useState({
    mod: mod(0),
  });

  const prevBlock = () => {
    setActive((prevActive) => {
      if (prevActive === 0) {
        return items.length - 1;
      }
      return prevActive - 1;
    });
  };
  const nextBlock = () => {
    setActive((prevActive) => {
      if (prevActive === items.length - 1) {
        return 0;
      }
      return prevActive + 1;
    });
  };
  const handlers = useSwipeable({
    onSwipedLeft: (e) => {
      // console.log('Swiped Left');
      // console.log(e);
      setSwipeType('left');
      nextBlock();
    },
    onSwipedRight: (e) => {
      // console.log('Swiped Right');
      // console.log(e);

      setSwipeType('right');
      prevBlock();
    },
    onSwiped: (e) => {
      // console.log('Swiped');
      // console.log(e);
      // this is called first
      setModFunction({
        mod: mod(active),
      });
    },
    trackMouse: true,
  });
  return (
    <div className={styles.breakthroughsContainer}>
      <div className={styles.verticalBar}>
        <div className={styles.left} onClick={prevBlock}>
          {'<'}
        </div>
        <div className={styles.right} onClick={nextBlock}>
          {'>'}
        </div>

        {items.map((_, i) => (
          <p key={i} className={i === active ? styles.active : ''}></p>
        ))}
        <div className={styles.currentPage}>{active + 1}</div>
        <div className={styles.totalPages}>{items.length}</div>
      </div>
      <div
        {...handlers}
        ref={breakthroughsRef}
        className={styles.breakthroughs}
        onMouseMove={(e) => {
          if (
            withinBox(e, seeVideoButtonRef.current?.getBoundingClientRect()) ||
            withinBox(e, navbarRef.current?.getBoundingClientRect())
          ) {
            setShowCursor(false);
            return;
          }
          const breakthroughsPos =
            breakthroughsRef.current.getBoundingClientRect();

          if (withinBox(e, breakthroughsPos)) {
            setShowCursor(true);
            setCursorPosition({
              top: e.clientY,
              left: e.clientX,
            });
          } else {
            setShowCursor(false);
          }
        }}
        onMouseLeave={() => {
          setShowCursor(false);
          // console.log('mouse leave');
        }}

        // makes sure when we move from screen cursor is not shown
      >
        {showCursor && (
          <div
            className={styles.customCursor}
            style={{
              top: cursorPosition.top + 'px',
              left: cursorPosition.left + 'px',
            }}
          >
            drag
          </div>
        )}

        <div className={styles.details}>
          <div className={styles.companyContainer}>
            {items.map(({ companyImgSrc, companyImgAlt }, i) => {
              return (
                <CSSTransition
                  classNames={`swipe-vertical-story-company`}
                  timeout={300}
                  in={i === active}
                  unmountOnExit
                  key={i}
                >
                  <p
                    className={styles.company}
                    style={{
                      zIndex: modFunction.mod(i),
                    }}
                  >
                    <img src={companyImgSrc} alt={companyImgAlt} />
                  </p>
                </CSSTransition>
              );
            })}
          </div>
          <div className={styles.textContainer}>
            {items.map(({ head, info }, i) => {
              return (
                <CSSTransition
                  classNames={`swipe-vertical-story-info`}
                  timeout={300}
                  in={i === active}
                  unmountOnExit
                  key={i}
                >
                  <div
                    className={styles.text}
                    style={{
                      zIndex: modFunction.mod(i),
                    }}
                  >
                    <p className={styles.head}>{head}</p>
                    <p className={styles.help}>How we helped</p>
                    <p className={styles.info}>{info}</p>
                    <span className={styles.button} ref={seeVideoButtonRef}>
                      See the video
                    </span>
                  </div>
                </CSSTransition>
              );
            })}
          </div>
        </div>
        <div className={styles.imageContainer}>
          {items.map(({ imgSrc, imgAlt }, i) => {
            return (
              <CSSTransition
                classNames={`swipe-vertical-story-image-${swipeType}`}
                timeout={300}
                in={i === active}
                unmountOnExit
                key={i}
              >
                <img
                  src={imgSrc}
                  alt={imgAlt}
                  style={{
                    zIndex: modFunction.mod(i),
                  }}
                />
              </CSSTransition>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Breakthroughs;
