import Button from "@/components/molecules/Button/Button";
import { NotConvinced } from "@/components/molecules/not-convinced/not-convinced";
import { WhatIsStreameye } from "@/components/molecules/what-is-streameye/what-is-streameye";
import { WhoUsesStreameye } from "@/components/molecules/who-uses-streameye/who-uses-streameye";
import { WhyIsStreameyeRight } from "@/components/molecules/why-is-streameye-right/why-is-streameye-right";
import { WhyStreameye } from "@/components/molecules/why-streameye/why-streameye";
import Hero from "@/components/organisms/Hero/Hero";
import {
  HERO_BANNER,
  NOT_CONVINCED,
  WHAT_IS_STREAMEYE,
  WHO_USES_STREAMEYE,
  WHY_IS_STREAMEYE_RIGHT,
  WHY_STREAMEYE,
} from "api/mockdata/home";
import type { NextPage } from "next";
import Link from "next/link";
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
      <div className={styles.notConvinced}>
        <NotConvinced
          title={NOT_CONVINCED.title}
          caseStudyPreviews={NOT_CONVINCED.caseStudyPreviews}
        />
      </div>
      <div className={styles.whyIsStreameyeRight}>
        <WhyIsStreameyeRight
          title={WHY_IS_STREAMEYE_RIGHT.title}
          copy={WHY_IS_STREAMEYE_RIGHT.copy}
          cta={
            <Link href="/contact" passHref>
              <a>
                <Button
                  variant="white"
                  elevated
                  title="Talk to us"
                  icon="button-arrow"
                />
              </a>
            </Link>
          }
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
        title: "Streameye - App - Welcome",
        description:
          "Streameye is a modular, scalable ad content management platform - a SaaS to rapidly generate, update and deploy ads for omni - channel audiences.",
        keywords: [
          "digital",
          "ads",
          "creative",
          "platform",
          "omni-channel",
          "SaaS",
          "generate",
          "generate ads",
        ],
      },
    }, // will be passed to the page component as props
  };
}
export default Home;
