import React, { useEffect, useRef, useState } from 'react';
import CustomImage from '../../components/Shared/CustomImage';
import MovableText from '../../components/Shared/MovableText';
import styles from './CaringBlock.module.scss';
function CaringBlock() {
  const deliverFloorRef = useRef();
  const responsibleFloorRef = useRef();
  const itFloorRef = useRef();
  const [deliverReachedFloor, setDeliverReachedFloor] = useState(false);
  const [responsibleReachedFloor, setResponsibleReachedFloor] = useState(false);
  useEffect(() => {
    console.log('reached');
    console.log(deliverReachedFloor);
  }, [deliverReachedFloor]);
  return (
    <div className={styles.caringBlock}>
      <div className={styles.firstPart}>
        <div className={styles.left}>
          <div className={styles.greenText}>
            <p>We care.</p>
            <p>Caring is our superpower.</p>
          </div>
          <MovableText
            floorRef={deliverFloorRef}
            setReachedFloor={setDeliverReachedFloor}
          >
            <div className={styles.movable}>
              {deliverReachedFloor ? (
                <MovableText
                  floorRef={responsibleFloorRef}
                  mustStartMove
                  addToTop={deliverReachedFloor}
                >
                  it
                </MovableText>
              ) : (
                <span>it</span>
              )}
              &nbsp;drives us to deliver <br />
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
      <div className={styles.secondPart}>
        <div className={styles.left}>
          <MovableText
            floorRef={responsibleFloorRef}
            setReachedFloor={setResponsibleReachedFloor}
          >
            <div className={styles.movable}>
              it makes us <br />
              responsible
            </div>
          </MovableText>
          <div className={styles.movableFloor} ref={responsibleFloorRef}>
            it makes us <br />
            responsible
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.text}>
            At Nagarro, we care about sustainability, about inclusion &
            diversity, about our social responsibility.
          </div>
          <div className={styles.boxBlock}>
            <Box
              head="#GenderEquality"
              imgSrc="https://www.nagarro.com/hs-fs/hubfs/Nagarro-March2018-Theme/Insights-Homepage-images/inclusion%20and%20gender%20equality-Blog-Homepage-Tile.jpg?width=895&height=894&name=inclusion%20and%20gender%20equality-Blog-Homepage-Tile.jpg"
              description="Caring for inclusion and gender equality at the workplace"
            />
            <Box
              head="#InclusionandDiversity"
              imgSrc="https://www.nagarro.com/hs-fs/hubfs/Nagarro-March2018-Theme/TestingPro_Banner%20(2).jpg?width=720&height=720&name=TestingPro_Banner%20(2).jpg"
              description="Autism - movie stereotypes vs. real-life experiences"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaringBlock;
function Box({ head, imgSrc, description }) {
  return (
    <div className={styles.box}>
      <div className={styles.head}>{head}</div>
      <div className={styles.section}>
        <div className={styles.image}>
          <CustomImage src={imgSrc} />
        </div>
        <div className={styles.description}>{description}</div>
        <div className={styles.arrow}>
          <img src="/white arrow.svg" alt="arrow" />
        </div>
      </div>
    </div>
  );
}
