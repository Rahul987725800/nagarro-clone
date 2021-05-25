import React, { useRef, useEffect, useState } from 'react';
import MovableText from '../../components/Shared/MovableText';
import Breakthroughs from './Breakthroughs';

import styles from './VerticalStory.module.scss';

function VerticalStory() {
  const thinkingBreakthroughFloorRef = useRef();

  return (
    <div className={styles.verticalStoryBlock}>
      <div className={styles.dark}>
        <p className={styles.staticText}>
          We excel at digital product engineering. We solve complex business
          challenges through agility and innovation. We call it
        </p>
        <MovableText floorRef={thinkingBreakthroughFloorRef}>
          thinking breakthroughs.
        </MovableText>
      </div>
      <div className={styles.light}>
        <div className={styles.textContainer}>
          <span className={styles.floor} ref={thinkingBreakthroughFloorRef}>
            thinking breakthroughs.
          </span>
          <p className={styles.text}>
            see how we have helped industry leaders embrace digitalization and
            accelerate technology-led innovation.
          </p>
        </div>
        <Breakthroughs />
      </div>
    </div>
  );
}

export default VerticalStory;
