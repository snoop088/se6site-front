import { WhatIsStreameye } from "@/components/molecules/what-is-streameye/what-is-streameye";
import { WhoUsesStreameye } from "@/components/molecules/who-uses-streameye/who-uses-streameye";
import { WhyStreameye } from "@/components/molecules/why-streameye/why-streameye";
import Hero from "@/components/organisms/Hero/Hero";
import {
  HERO_BANNER,
  WHAT_IS_STREAMEYE,
  WHO_USES_STREAMEYE,
  WHY_STREAMEYE,
} from "api/mockdata/home";
import type { NextPage } from "next";
import styles from "./index.module.scss";

const Home: NextPage = () => {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div className={styles.container}>
      <div className={styles.heroBanner}>
        <Hero
          buttonOnClick={handleClick}
          title={HERO_BANNER.title}
          buttonTitle={HERO_BANNER.buttonTitle}
        ></Hero>
      </div>
      <div className={styles.whyStreameye}>
        <WhyStreameye
          title={WHY_STREAMEYE.title}
          copy={WHY_STREAMEYE.copy}
          usps={WHY_STREAMEYE.usps}
        />
      </div>
      <div className={styles.whoUsesStreameye}>
        <WhoUsesStreameye
          title={WHO_USES_STREAMEYE.title}
          copy={WHO_USES_STREAMEYE.copy}
          partners={WHO_USES_STREAMEYE.partners}
        />
      </div>
      <div className={styles.whatIsStreameye}>
        <WhatIsStreameye
          copyMd={WHAT_IS_STREAMEYE.copyMd}
          boldCopy={WHAT_IS_STREAMEYE.boldCopy}
          cta={WHAT_IS_STREAMEYE.cta}
        />
      </div>
    </div>
  );
};
export async function getStaticProps() {
  // eventually get meta data from CMS?
  return {
    props: {
      meta: {
        title: "Streameye - App",
        description: "I am the home page",
        keywords: ["kw1", "kw2"],
      },
    }, // will be passed to the page component as props
  };
}
export default Home;
