import React from 'react';
import styles from './CustomImage.module.scss';
function CustomImage({ src }) {
  return (
    <div className={styles.image}>
      <img src={src} alt="tech image" />
    </div>
  );
}

export default CustomImage;
