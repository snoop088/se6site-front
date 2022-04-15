import { TestimonialsSlider } from "@/components/molecules/testimonials-slider/testimonials-slider";
import Wrapper from "@/components/organisms/Wrapper/Wrapper";
import { HERO_BANNER, OUR_MISSION, SHOWCASE } from "api/mockdata/about";
import { TESTIMONIALS } from "api/mockdata/testimonials";
import { PageWithMeta } from "interfaces/page-with-meta";
import { Testimonial } from "interfaces/testimonial";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./about.module.scss";
interface PageProps extends PageWithMeta {
  heroBanner: {
    title: string;
    bullets: [{ title: string; copy: string }];
  };
  ourMission: { title: string; copy: string };
  showCase: { title: string; copy: string; cta: string };
  testimonials: Testimonial[];
}
const About: NextPage<PageProps> = ({
  heroBanner,
  ourMission,
  showCase,
  testimonials,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.heroBanner}>
        <div className={styles.heroCopy}>
          <h1>{heroBanner.title}</h1>
          <ul>
            {heroBanner.bullets.map((bullet) => (
              <li key={bullet.title}>
                <h2>{bullet.title}</h2>
                <p>{bullet.copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Wrapper className={styles.missionStatement}>
        <div className={styles.ourMission}>
          <div className={styles.copy}>
            <ul>
              <li>
                <h2>{ourMission.title}</h2>
                <p>{ourMission.copy}</p>
              </li>
            </ul>
          </div>
          <figure>
            <Image
              src="/our_mission.svg"
              width={440}
              height={380}
              alt={ourMission.title}
            />
          </figure>
        </div>
        <div className={styles.ourAds}>
          <figure>
            <Image
              src="/we_create_ads.svg"
              width={728}
              height={465}
              alt={showCase.title}
            />
          </figure>
          <div className={styles.copy}>
            <ul>
              <li>
                <h2>{showCase.title}</h2>
                <p>{showCase.copy}</p>
                <div className={styles.cta}>
                  <Link href="/showcase" passHref>
                    <a>
                      <button>SHOWCASE</button>
                    </a>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Wrapper>
      <div className={styles.testimonials}>
        <h2>What others are saying:</h2>
        <TestimonialsSlider testimonials={testimonials} />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  // eventually get meta data from CMS?
  return {
    props: {
      meta: {
        title: "Streameye - About Us",
        description: "Streameye's mission statement",
        keywords: ["kw1", "kw2"],
      },
      heroBanner: HERO_BANNER,
      ourMission: OUR_MISSION,
      showCase: SHOWCASE,
      testimonials: TESTIMONIALS,
    } as PageProps, // will be passed to the page component as props
  };
}
export default About;
