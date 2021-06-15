import React from 'react';
import LinksSection from '../../Shared/LinksSection';
import NavCard from '../../Shared/NavCard';
import styles from './Services.module.scss';
function Services() {
  return (
    <div className={styles.services}>
      <div className={styles.card}>
        <NavCard
          head="services"
          content="Accelerate your vision with technologies that are both agile and cutting-edge."
          buttonText="view all services"
        />
      </div>
      <div className={styles.links}>
        <LinksSection links={links} />
      </div>
    </div>
  );
}
const links = [
  'accelerated quality & test-engineering',
  'agile',
  'api management',
  'application development',
  'application managed services',
  'artificial intelligence, data & analytics',
  'blockchain',
  'cloud',
  'crm',
  'customer communications',
  'break',
  'devops',
  'digital commerce',
  'digital marketing and personalization',
  'digital ventures',
  'ecm & portals',
  'enterprise architecture consulting',
  'erp',
  'identity and access management',
  'innovation',
  'internet of things',
  'break',
  'mainfram & legacy',
  'mobility solutions',
  'process consulting',
  'product engineering',
  'resilience engineering',
  'security',
  'technical communication',
  'trainings',
  'transformation and modernization',
];
export default Services;
