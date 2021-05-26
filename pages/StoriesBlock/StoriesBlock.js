import React from 'react';
import StorySwipe from './StorySwipe';
import Story from './Story';
import styles from './StoriesBlock.module.scss';
function StoriesBlock() {
  return (
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
  );
}

export default StoriesBlock;
