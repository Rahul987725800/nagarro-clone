import React, { useEffect, useRef, useState } from 'react';
import ArrowLink from '../../components/Shared/ArrowLink';
import CustomImage from '../../components/Shared/CustomImage';
import MovableText from '../../components/Shared/MovableText';
import styles from './CaringBlock.module.scss';

function CaringBlock() {
  const videoRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      const videoPos = videoRef.current.getBoundingClientRect();
      // console.log(videoPos);
      if (videoPos.top < 200) {
        videoRef.current.play();
      }
    });
    videoRef.current.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    });
  }, []);
  const deliverFloorRef = useRef();
  const responsibleFloorRef = useRef();
  const colleaugesFloorRef = useRef();
  const colleaugesTopRef = useRef();
  const [responsibleMoving, setResponsibleMoving] = useState(false);
  const [colleaguesMoving, setColleaguesMoving] = useState(false);
  const [colleaguesReachedFloor, setColleaguesReachedFloor] = useState(false);

  return (
    <div className={styles.caringBlock}>
      <div className={styles.firstPart}>
        <div className={styles.left}>
          <div className={styles.greenText}>
            <p>We care.</p>
            <p>Caring is our superpower.</p>
          </div>
          <div style={{ display: 'flex' }}>
            <MovableText floorRef={colleaugesTopRef}>
              <span
                className={styles.movable}
                style={{
                  visibility:
                    responsibleMoving ||
                    colleaguesMoving ||
                    colleaguesReachedFloor
                      ? 'hidden'
                      : 'visible',
                }}
              >
                it
              </span>
            </MovableText>
            <MovableText floorRef={deliverFloorRef}>
              <span className={styles.movable}>
                &nbsp;drives us to deliver <br />
                &emsp; excellence to our clients
              </span>
            </MovableText>
          </div>
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
          <div className={styles.manSvg}>
            <img
              src="https://www.nagarro.com/hubfs/NagarroWebsiteRedesign-Aug2020/Assets/Images/Caring_responsible_background.svg"
              alt=""
            />
          </div>
          <MovableText
            floorRef={responsibleFloorRef}
            setMoving={setResponsibleMoving}
          >
            <span className={styles.movable}>
              <span
                style={{
                  visibility: responsibleMoving ? 'visible' : 'hidden',
                }}
              >
                it
              </span>{' '}
              makes us <br />
              responsible
            </span>
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
          <div className={styles.link}>
            <ArrowLink marginTopArrow={2}>
              discover how we're creating a better world
            </ArrowLink>
          </div>
        </div>
      </div>
      <div className={styles.thirdPart}>
        <video
          ref={videoRef}
          src="https://www.nagarro.com/hubfs/NagarroWebsiteRedesign-Aug2020/Assets/Videos/home_careers-1.mp4"
          className={styles.video}
          muted="muted"
        ></video>
        <div className={styles.firstHalf}>
          <MovableText
            floorRef={colleaugesFloorRef}
            setMoving={setColleaguesMoving}
            setReachedFloor={setColleaguesReachedFloor}
          >
            <div className={styles.movable} ref={colleaugesTopRef}>
              <span
                style={{
                  visibility:
                    colleaguesMoving || colleaguesReachedFloor
                      ? 'visible'
                      : 'hidden',
                }}
              >
                it
              </span>{' '}
              makes us better colleagues
            </div>
          </MovableText>
          <div className={styles.movableFloor} ref={colleaugesFloorRef}>
            it makes us better colleagues
          </div>
        </div>
        <div className={styles.secondHalf}>
          <div className={styles.head}>We are a Nation of Nagarrians</div>
          <p className={styles.para}>
            We are not trying to emulate the companies of yesterday, we are the
            company of tomorrow. We are the future, logistically apart, together
            always.
          </p>
          <div className={styles.quest}>
            Think you have what it takes <br /> to be a Nagarrian?
          </div>
          <div className={styles.bottomBlock}>
            <p className={styles.colored}>
              Discover the oppurtunities waiting for you
            </p>
            <p className={styles.line}></p>
            <p className={styles.button}>Make the jump</p>
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
