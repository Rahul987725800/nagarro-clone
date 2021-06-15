import React from 'react';
import LinksSection from '../../Shared/LinksSection';
import NavCard from '../../Shared/NavCard';
import styles from './Industries.module.scss';
function Industries() {
  return (
    <div className={styles.industries}>
      <div className={styles.card}>
        <NavCard
          head="industries"
          content="Explore how digital product engineering can transform your industry."
          buttonText={
            <span style={{ display: 'inline-block', width: '100px' }}>
              view all
              <br /> industries
            </span>
          }
        />
      </div>
      <div className={styles.links}>
        <LinksSection links={links} />
      </div>
    </div>
  );
}
const links = [
  'automotive',
  'banking and financial services',
  'energy & utilites',
  'gaming & entertainment',
  'industry and automation',
  'break',
  'insurance',
  'isv',
  'life sciences & healthcare',
  'media & publishing',
  'non-profits and education',
  'break',
  'public sector',
  'retail & cpg',
  'telecommunications',
  'travel & logistics',
];
export default Industries;
