import { NextPage } from "next";
import { FeatureItem } from "interfaces/feature-item";
import styles from "./[id].module.scss";
import { PageMeta } from "interfaces/page-meta";
import { PageTitle } from "@/components/atoms/page-title/page-title";
import { FEATURES_FULL } from "api/mockdata/features";
import { features } from "process";
import Wrapper from "@/components/organisms/Wrapper/Wrapper";
import ReactMarkdown from "react-markdown";

interface PageProps {
  feature: FeatureItem;
  meta?: PageMeta;
  prevId?: string;
  nextId?: string;
}

const Index: NextPage<PageProps> = ({
  feature: { title, icon, descriptionMd, mediaUrl },
  prevId,
  nextId,
}: PageProps) => {
  return (
    <div className={styles.container}>
      <PageTitle title={title} prevId={prevId} nextId={nextId} icon={icon} />
      <Wrapper isWide className={styles.feature}>
        <div className={styles.content}>
          <ReactMarkdown>{descriptionMd}</ReactMarkdown>
        </div>
        <figure>
          <video autoPlay loop muted playsInline>
            <source src={"/" + mediaUrl} />
          </video>
        </figure>
      </Wrapper>
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
    }, // will be passed to the page component as props
  };
}
export default Index;
