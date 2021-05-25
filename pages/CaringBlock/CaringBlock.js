import React, { useRef } from 'react';
import MovableText from '../../components/Shared/MovableText';
import styles from './CaringBlock.module.scss';
function CaringBlock() {
  const deliverFloorRef = useRef();
  return (
    <div className={styles.caringBlock}>
      <div className={styles.left}>
        <div className={styles.greenText}>
          <p>We care.</p>
          <p>Caring is our superpower.</p>
        </div>
        <MovableText floorRef={deliverFloorRef}>
          <div className={styles.movable}>
            it drives us to deliver <br />
            &emsp; excellence to our clients
          </div>
        </MovableText>
        <div className={styles.movableFloor} ref={deliverFloorRef}>
          it drives us to deliver <br />
          &emsp; excellence to our clients
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.container}>
          <div className={styles.block}>
            <div className={styles.head}>industries</div>
            <div className={styles.text}>
              We leverage our expertise accross multiple business functions to
              drive technology-led business breakthroughs.
            </div>
            <div className={styles.button}>View all industries</div>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.block}>
            <div className={styles.head}>services</div>
            <div className={styles.text}>
              Call it what you want, innovation, disruption or transformation,
              it touches every part of our business. We are your turnkey
              partner.
            </div>
            <div className={styles.button}>View all services</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaringBlock;
