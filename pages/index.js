import Head from 'next/head';

import ArrowLink from '../components/Shared/ArrowLink';
import BlogCard from '../components/Shared/BlogCard';

import VerticalStory from './VerticalStoriesBlock/VerticalStory';
import styles from './Home.module.scss';
import CaringBlock from './CaringBlock/CaringBlock';
import StoriesBlock from './StoriesBlock/StoriesBlock';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StoriesBlock />
      <VerticalStory />
      <CaringBlock />
      <div className={styles.insightsBlock}>
        <div className={styles.title}>featured insights</div>
        <div className={styles.blogs}>
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
        <div className={styles.more}>
          <ArrowLink dark width={190} hoveredWidth={200} arrowPadding="1rem">
            View more insights
          </ArrowLink>
        </div>
      </div>
      <div className={styles.eventsBlock}>
        <div className={styles.title}>featured events</div>
        <div className={styles.events}>
          <div className={styles.block} style={{ minWidth: '58%' }}>
            <div className={styles.image}>
              <img src="/phone.webp" />
            </div>
            <div className={styles.content}>
              <p className={styles.date}>Virtual Event | May 26</p>
              <p className={styles.question}>
                How API management empowers innovation in financial services
              </p>
              <p className={styles.sol}>
                Learn how API-enabled business transformation can help you
                trigger business growth.
              </p>
            </div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.block}>
            <div className={styles.content}>
              <p className={styles.date}> Webinar | May 18</p>
              <p className={styles.question}>
                How to benefit from Advanced Intelligence for Testing
              </p>
              <p className={styles.sol}>
                Understand how to drastically reduce testing effort by using
                intelligent testing solutions like artificial intelligence &
                machine learning.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.careerBlock}>
        <div className={styles.block}>
          <div className={styles.question}>What can we help you achieve?</div>

          <div className={styles.button}>Let's get to work</div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.block}>
          <div className={styles.question}>
            Where will your career take you?
          </div>

          <div className={styles.button}>Come and find out</div>
        </div>
      </div>
      <div className={styles.contactBlock}>
        <div className={styles.left}>
          Stay up to date with insights from Nagarro!
        </div>
        <div className={styles.right}>
          <input type="email" placeholder="Email address*" />
          <div className={styles.button}>Subscribe</div>
        </div>
      </div>
    </div>
  );
}
