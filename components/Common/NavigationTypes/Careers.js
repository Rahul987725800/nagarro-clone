import React from 'react';
import ArrowLink from '../../Shared/ArrowLink';
import styles from './Careers.module.scss';
function Careers() {
  return (
    <div className={styles.careers}>
      <div className={styles.left}>
        <p className={styles.head}>
          Thinking about <br /> becoming a Nagarrian?
        </p>
        <ArrowLink dark>get to know us</ArrowLink>
      </div>
      <div className={styles.line}></div>
      <div className={styles.right}>
        <div className={styles.text}>
          Check our <br /> open positions
        </div>
        <div className={styles.flags}>
          <div className={styles.col}>
            <p>
              <img src="flags/austria.svg" /> Austria
            </p>
            <p>
              <img src="flags/germany.svg" />
              Germany
            </p>
            <p>
              <img src="flags/India.svg" />
              India
            </p>
            <p>
              <img src="flags/Mexico.svg" />
              Mexico
            </p>
          </div>
          <div className={styles.col}>
            <p>
              <img src="flags/Poland.svg" />
              Poland
            </p>
            <p>
              <img src="flags/Romania.svg" />
              Romania
            </p>
            <p>
              <img src="flags/Sri Lanka.svg" />
              Sri Lanka
            </p>
            <p>
              <img src="flags/usa.svg" />
              United States
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Careers;
