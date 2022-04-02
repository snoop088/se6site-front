import { NextPage } from "next";
import { FeatureItem } from "interfaces/feature-item";
import styles from "./[id].module.scss";
import { PageMeta } from "interfaces/page-meta";
import { PageTitle } from "@/components/atoms/page-title/page-title";
import { BulletListMd } from "@/components/atoms/bullet-list-md/bullet-list-md";
import {
  ENTERPRISE_FEATURES,
  FEATURES_FULL,
  FIND_OUT_MORE,
} from "api/mockdata/features";
import Wrapper from "@/components/organisms/Wrapper/Wrapper";
import ReactMarkdown from "react-markdown";
import Button from "@/components/molecules/Button/Button";
import { RevealMore } from "@/components/molecules/reveal-more/reveal-more";
import { FeaturesSlider } from "@/components/molecules/features-slider/features-slider";
import { FeatureEnterprise } from "interfaces/feature-enterprise";

interface PageProps {
  feature: FeatureItem;
  meta?: PageMeta;
  prevId?: string;
  nextId?: string;
  topRoute: string;
  findOutMore: string;
  featuresEnterprise: FeatureEnterprise[];
}

const Index: NextPage<PageProps> = ({
  feature: { title, icon, descriptionMd, mediaUrl, usingFor, gettingStarted },
  prevId,
  nextId,
  topRoute,
  findOutMore,
  featuresEnterprise,
}: PageProps) => {
  const handleRevealMore = () => {};
  return (
    <div className={styles.container}>
      <PageTitle
        title={title}
        prevId={prevId}
        nextId={nextId}
        icon={icon}
        topRoute={topRoute}
      />
      <Wrapper isWide className={styles.feature}>
        <div className={styles.content}>
          <ReactMarkdown>{descriptionMd}</ReactMarkdown>
          <div className={styles.usesAndSteps}>
            <div className={styles.uses}>
              <h3>{usingFor.title}</h3>
              <div className={styles.copy}>
                <BulletListMd
                  listMd={usingFor.uses}
                  className={styles.bullets}
                />
              </div>
            </div>
            <div className={styles.steps}>
              <h3>{gettingStarted.title}</h3>
              <div className={styles.copy}>
                <BulletListMd
                  listMd={gettingStarted.steps}
                  className={styles.bullets}
                />
              </div>
              <div className={styles.cta}>
                <Button
                  title="Get in touch to start"
                  icon="button-arrow"
                  variant="green"
                />
              </div>
            </div>
          </div>
        </div>
        <figure>
          <video autoPlay loop muted playsInline>
            <source src="/templates.mp4" type="video/mp4" />
          </video>
        </figure>
      </Wrapper>
      {/* <div className={styles.findOutMore}>
        <RevealMore
          copy={findOutMore}
          onReveal={handleRevealMore}
          isRevealed={false}
          overlapColour="#e2f6fa"
        />
      </div>
      <div className={styles.entFeaturesSlides}>
        <FeaturesSlider features={featuresEnterprise} />
      </div> */}
    </div>
  );
};
export async function getStaticPaths() {
  const paths = FEATURES_FULL.map((item) => ({ params: { id: item.id } }));
  return {
    paths,
    fallback: false, // false or 'blocking'
  };
}
export async function getStaticProps({
  params: { id },
}: {
  params: { id: string };
}) {
  // eventually get meta data from CMS?
  const index = FEATURES_FULL.findIndex((item) => item.id === id);
  const prevId = index > 0 ? FEATURES_FULL[index - 1].id : null;
  const nextId =
    index < FEATURES_FULL.length - 1 ? FEATURES_FULL[index + 1].id : null;
  return {
    props: {
      meta: {
        title: "Streameye - Features - " + FEATURES_FULL[index].title,
        description: "I am the home page",
        keywords: ["kw1", "kw2"],
      },
      feature: FEATURES_FULL[index],
      prevId,
      nextId,
      topRoute: "/features",
      findOutMore: FIND_OUT_MORE,
      featuresEnterprise: ENTERPRISE_FEATURES,
    } as PageProps, // will be passed to the page component as props
  };
}
export default Index;
