import Head from 'next/head';

import ArrowLink from '../components/Shared/ArrowLink';
import BlogCard from '../components/Shared/BlogCard';

import CustomImage from '../components/Shared/CustomImage';
import Story from './StoriesBlock/Story';
import StorySwipe from './StoriesBlock/StorySwipe';
import VerticalStory from './VerticalStoriesBlock/VerticalStory';
import styles from './Home.module.scss';
import CaringBlock from './CaringBlock/CaringBlock';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.storiesBlock}>
        <StorySwipe
          items={[
            <Story
              fadedText="press release"
              title="10,000 Nagarrians, 10,000 trees"
              description="We are planting 10,000 trees to mark the achievement of crossing the 10,000-employee milestone"
              buttonText="Check it out"
              imageUrl="https://www.nagarro.com/hubfs/Nagarro-March2018-Theme/Insights-Homepage-images/PR-Nagarrians-Trees-Homepage-Carousel-2.jpg"
            />,
            <Story
              fadedText="annual report"
              title="A year of transformation for Nagarro SE"
              buttonText="Learn more"
              videoUrl="https://www.nagarro.com/hubfs/NagarroWebsiteRedesign-Aug2020/Assets/Videos/Banner_1440x900_loop.mp4?t=1620040821044"
            />,
            <Story
              fadedText="success story"
              title="A single flight-and-fare search app for Star Alliance's 26 airlines"
              buttonText="Read the story"
              imageUrl="https://www.nagarro.com/hubfs/Nagarro-March2018-Theme/Insights-Homepage-images/Star%20Alliance_website_1440x900px.jpg"
            />,
            <Story
              fadedText="press release"
              title="Re-engineering Adform's advertising platform"
              buttonText="Learn more"
              imageUrl="https://www.nagarro.com/hubfs/pexels-fauxels-3184422_lp.jpg"
            />,
          ]}
        />
      </div>
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
          <ArrowLink />
        </div>
      </div>
      <div className={styles.eventsBlock}>
        <div className={styles.title}>featured events</div>
        <div className={styles.events}>
          <div className={styles.image}>
            <CustomImage src="/phone.webp" />
          </div>
          <div className={styles.block}>
            <p className={styles.date}>Virtual Event | May 26</p>
            <p className={styles.question}>
              How API management empowers innovation in financial services
            </p>
            <p className={styles.sol}>
              Learn how API-enabled business transformation can help you trigger
              business growth.
            </p>
          </div>
          <div className={styles.line}></div>
          <div className={styles.block}>
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
