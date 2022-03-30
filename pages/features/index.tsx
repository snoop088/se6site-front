import { NextPage } from "next";
import { useRef, useState } from "react";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { FeatureSlim } from "@/components/molecules/feature-slim/feature-slim";
import { RevealMore } from "@/components/molecules/reveal-more/reveal-more";
import Wrapper from "@/components/organisms/Wrapper/Wrapper";
import { FeatureItemSlim } from "interfaces/feature-item-slim";
import { PageMeta } from "interfaces/page-meta";
import { WhyIsStreameyeRight } from "@/components/molecules/why-is-streameye-right/why-is-streameye-right";
import Button from "@/components/molecules/Button/Button";
import { FeatureEnterprise } from "interfaces/feature-enterprise";

import styles from "./index.module.scss";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  ENTERPRISE_FEATURES,
  FEATURES_SLIM,
  FIND_OUT_MORE,
  HELPING,
} from "api/mockdata/features";
import ReactMarkdown from "react-markdown";
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
  const demoClickHandler = () => {
    console.log("demo clicked");
  };
  const readMoreClickHandler = (id: string) => {
    console.log("read more on" + id);
  };
  const handleRevealMore = () => {
    if (!isRevealed) {
      scrollToRef!.current!.scrollIntoView({ behavior: "smooth" });
    }
    if (isRevealed) {
      scrollToTop!.current!.scrollIntoView({ behavior: "smooth" });
    }
    setIsRevealed(!isRevealed);
  };
  return (
    <div className={styles.container} ref={scrollToTop}>
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
      <div className={styles.cta}>
        <Button title="Lets talk" variant="green" />
      </div>
      <div className={styles.findOutMore} ref={scrollToRef}>
        <RevealMore
          copy={findOutMore}
          onReveal={handleRevealMore}
          isRevealed={isRevealed}
          overlapColour="#e2f6fa"
        />
      </div>
      <div className={styles.entFeaturesSlides}>
        <Wrapper isWide className={styles.swiperContainer}>
          <Swiper
            slidesPerView={1}
            spaceBetween={52}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              769: {
                slidesPerView: 2,
                spaceBetween: 18,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 18,
              },
              1920: {
                slidesPerView: 4,
                spaceBetween: 18,
              },
            }}
            navigation
            modules={[Pagination, Navigation]}
            className={styles.mySwiper}
          >
            {featuresEnterprise.map((feature) => (
              <SwiperSlide key={feature.title}>
                <div className={styles.enterpriseFeature}>
                  <h1>{feature.title}</h1>
                  <div className={styles.copy}>
                    <ReactMarkdown>{feature.copyMd}</ReactMarkdown>
                  </div>
                  <div className={styles.contract}>{feature.contract}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Wrapper>
      </div>
      <div className={styles.help}>
        <WhyIsStreameyeRight
          title={helping.title}
          copy={helping.copy}
          cta={
            <Button
              title="Get in touch"
              variant="green"
              onClick={() => console.log("book a demo route")}
            />
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
