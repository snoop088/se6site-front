import { NextPage } from "next";
import { useState } from "react";

import { FeatureSlim } from "@/components/molecules/feature-slim/feature-slim";
import { RevealMore } from "@/components/molecules/reveal-more/reveal-more";
import Wrapper from "@/components/organisms/Wrapper/Wrapper";
import { FEATURES_SLIM, FIND_OUT_MORE } from "api/mockdata/features";
import { FeatureItemSlim } from "interfaces/feature-item-slim";
import { PageMeta } from "interfaces/page-meta";

import styles from "./index.module.scss";
interface PageProps {
  meta?: PageMeta;
  features: FeatureItemSlim[];
  findOutMore: string;
}
const Index: NextPage<PageProps> = ({ features, findOutMore }: PageProps) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const demoClickHandler = () => {
    console.log("demo clicked");
  };
  const readMoreClickHandler = (id: string) => {
    console.log("read more on" + id);
  };
  const handleRevealMore = () => {
    setIsRevealed(!isRevealed);
  };
  return (
    <div className={styles.container}>
      <Wrapper isWide className={styles.featuresContainer}>
        {features.map((feature) => (
          <div key={feature.id} className={styles.feature}>
            <FeatureSlim
              featureItemSlim={feature}
              onDemoClick={demoClickHandler}
              onReadMoreClick={readMoreClickHandler}
            />
          </div>
        ))}
      </Wrapper>
      <div className={styles.findOutMore}>
        <RevealMore
          copy={findOutMore}
          onReveal={handleRevealMore}
          isRevealed={isRevealed}
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
        title: "Streameye - Features",
        description: "Streameye's features that makes us unique",
        keywords: ["kw1", "kw2"],
      },
      features: FEATURES_SLIM,
      findOutMore: FIND_OUT_MORE,
    } as PageProps, // will be passed to the page component as props
  };
}
export default Index;
