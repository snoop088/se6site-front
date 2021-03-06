import { NextPage } from "next";
import { useRef, useState } from "react";

import { FeatureSlim } from "@/components/molecules/feature-slim/feature-slim";
import { RevealMore } from "@/components/molecules/reveal-more/reveal-more";
import Wrapper from "@/components/organisms/Wrapper/Wrapper";
import { FeatureItemSlim } from "interfaces/feature-item-slim";
import { PageMeta } from "interfaces/page-meta";
import { WhyIsStreameyeRight } from "@/components/molecules/why-is-streameye-right/why-is-streameye-right";
import Button from "@/components/molecules/Button/Button";
import { FeatureEnterprise } from "interfaces/feature-enterprise";

import styles from "./index.module.scss";

import {
  ENTERPRISE_FEATURES,
  FEATURES_SLIM,
  FIND_OUT_MORE,
  HELPING,
} from "api/mockdata/features";
import { FeaturesSlider } from "@/components/molecules/features-slider/features-slider";
import { useWindowSize } from "hooks/useWindowSize";
import Link from "next/link";
interface PageProps {
  meta?: PageMeta;
  features: FeatureItemSlim[];
  findOutMore: string;
  helping: { title: string; copy: string };
  featuresEnterprise: FeatureEnterprise[];
}
const Index: NextPage<PageProps> = ({
  features,
  findOutMore,
  helping,
  featuresEnterprise,
}: PageProps) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const scrollToRef = useRef<null | HTMLDivElement>(null);
  const scrollToTop = useRef<null | HTMLDivElement>(null);
  const wSize = useWindowSize();

  const handleRevealMore = () => {
    if (!isRevealed) {
      // scroller();
      scrollToRef!.current!.scrollIntoView({ behavior: "smooth" });
    }
    if (isRevealed) {
      scrollToTop!.current!.scrollIntoView({ behavior: "smooth" });
    }
    setIsRevealed(!isRevealed);
  };
  return (
    <div className={styles.container}>
      <div className={styles.top} ref={scrollToTop}></div>
      <Wrapper isWide className={styles.featuresContainer}>
        {features.map((feature) => (
          <div key={feature.id} className={styles.feature}>
            <FeatureSlim featureItemSlim={feature} />
          </div>
        ))}
      </Wrapper>
      <div className={styles.cta}>
        <Link passHref href="/contact">
          <a>
            <Button title="Lets talk" variant="green" />
          </a>
        </Link>
      </div>
      <div className={styles.findOutMore} ref={scrollToRef}>
        <RevealMore
          copy={findOutMore}
          onReveal={handleRevealMore}
          isRevealed={isRevealed}
          overlapColour="#e2f6fa"
          isAnimated={!!wSize.width && wSize.width > 1280}
        />
      </div>
      <div className={styles.entFeaturesSlides}>
        <FeaturesSlider features={featuresEnterprise} />
      </div>
      <div className={styles.help}>
        <WhyIsStreameyeRight
          title={helping.title}
          copy={helping.copy}
          cta={
            <Link href="/contact" passHref>
              <a>
                <Button title="Get in touch" variant="green" />
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
        title: "Streameye - Features",
        description: "Streameye's features that makes us unique",
        keywords: ["kw1", "kw2"],
      },
      features: FEATURES_SLIM,
      findOutMore: FIND_OUT_MORE,
      helping: HELPING,
      featuresEnterprise: ENTERPRISE_FEATURES,
    } as PageProps, // will be passed to the page component as props
  };
}
export default Index;
