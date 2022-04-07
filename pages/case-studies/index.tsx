import { CaseStudySlim } from "@/components/molecules/case-study-slim/case-study-slim";
import Wrapper from "@/components/organisms/Wrapper/Wrapper";
import { CASE_STUDIES_SLIM } from "api/mockdata/case-studies";
import { CaseStudyItemSlim } from "interfaces/case-study-item-slim";
import { PageMeta } from "interfaces/page-meta";
import { PageWithMeta } from "interfaces/page-with-meta";
import { NextPage } from "next";
import styles from "./index.module.scss";
interface PageProps extends PageWithMeta {
  casesSlim: CaseStudyItemSlim[];
}

const Index: NextPage<PageProps> = ({ casesSlim }: PageProps) => {
  return (
    <div className={styles.container}>
      <Wrapper isWide>
        {casesSlim.map((caseSlim, index) => (
          <CaseStudySlim
            key={caseSlim.id}
            caseStudyItemSlim={caseSlim}
            order={index % 2 ? "normal" : "reverse"}
          />
        ))}
      </Wrapper>
    </div>
  );
};
export async function getStaticProps() {
  // eventually get meta data from CMS?
  return {
    props: {
      meta: {
        title: "Streameye - Case Studies",
        description: "Streameye's success stories",
        keywords: ["kw1", "kw2"],
      },
      casesSlim: CASE_STUDIES_SLIM,
    } as PageProps, // will be passed to the page component as props
  };
}
export default Index;
