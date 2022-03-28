import { FeatureSlim } from "@/components/molecules/feature-slim/feature-slim";
import Wrapper from "@/components/organisms/Wrapper/Wrapper";
import { FEATURES_SLIM } from "api/mockdata/features";
import { FeatureItemSlim } from "interfaces/feature-item-slim";
import { PageMeta } from "interfaces/page-meta";
import { NextPage } from "next";
import styles from "./index.module.scss";
interface PageProps {
  meta?: PageMeta;
  features: FeatureItemSlim[];
}
const Index: NextPage<PageProps> = ({ features }: PageProps) => {
  const demoClickHandler = () => {
    console.log("demo clicked");
  };
  const readMoreClickHandler = (id: string) => {
    console.log("read more on" + id);
  };
  return (
    <Wrapper isWide className={styles.container}>
      <div className={styles.featuresContainer}>
        {features.map((feature) => (
          <div key={feature.id} className={styles.feature}>
            <FeatureSlim
              featureItemSlim={feature}
              onDemoClick={demoClickHandler}
              onReadMoreClick={readMoreClickHandler}
            />
          </div>
        ))}
      </div>
    </Wrapper>
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
    } as PageProps, // will be passed to the page component as props
  };
}
export default Index;
