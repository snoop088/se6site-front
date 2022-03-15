import Hero from "@/components/organisms/Hero/Hero";
import { HERO_BANNER } from "api/mockdata/home";
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
    </div>
    // <HomeTemplate
    //   metaDescription="Homepage"
    //   heroTitle="CREATE EYE - CATCHING ADS FOR ANY MARKETING CAMPAIGN IN NO TIME"
    //   heroButtonTitle="More info"
    //   heroButtonOnClick={() => {
    //     console.log("button clicked");
    //   }}
    // />
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
