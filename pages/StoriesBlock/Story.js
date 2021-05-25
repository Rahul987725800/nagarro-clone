import React, { useRef } from 'react';
import { useEffect } from 'react';
import styles from './Story.module.scss';
function Story({
  fadedText,
  title,
  description,
  buttonText,
  imageUrl,
  videoUrl,
}) {
  const videoRef = useRef();
  useEffect(() => {
    if (videoUrl) {
      videoRef.current.addEventListener('ended', function () {
        this.currentTime = 0;
        this.play();
      });
      videoRef.current.currentTime = 3;
      videoRef.current.play();
    }
  }, []);
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <video className={styles.video} src={videoUrl} ref={videoRef}></video>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.fadedText}>{fadedText}</div>
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>{description}</div>
          <span className={styles.button}>{buttonText}</span>
        </div>
      </div>
    </div>
  );
}

export default Story;
