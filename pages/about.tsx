import { HERO_BANNER, OUR_MISSION, SHOWCASE } from "api/mockdata/about";
import { PageWithMeta } from "interfaces/page-with-meta";
import type { NextPage } from "next";
import styles from "./about.module.scss";
interface PageProps extends PageWithMeta {
  heroBanner: {
    title: string;
    bullets: [{ title: string; copy: string }];
  };
  ourMission: { title: string; copy: string };
  showCase: { title: string; copy: string; cta: string };
}
const About: NextPage<PageProps> = ({ heroBanner, ourMission, showCase }) => {
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
    } as PageProps, // will be passed to the page component as props
  };
}
export default About;
