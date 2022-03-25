import { TagFilter } from "@/components/molecules/tag-filter/tag-filter";
import { ShowcaseList } from "@/components/organisms/showcase-list/showcase-list";
import { SHOWCASE_ITEMS, SHOWCASE_TAGS } from "api/mockdata/showcase-data";
import { PageMeta } from "interfaces/page-meta";
import { IShowcaseItem } from "interfaces/showcase-item";
import { NextPage, InferGetServerSidePropsType } from "next";
import { useState } from "react";
import styles from "./index.module.scss";
interface PageProps {
  meta?: PageMeta;
  showcaseItems: IShowcaseItem[];
}
const Index: NextPage<PageProps> = ({ showcaseItems }: PageProps) => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const handleSelectTag = (tag: string | null) => {
    setSelectedTag(tag);
  };
  const filtered = showcaseItems.filter(
    (item) => !selectedTag || item.tags.some((tag) => tag === selectedTag)
  );
  return (
    <div className={styles.container}>
      <TagFilter
        tags={SHOWCASE_TAGS}
        onSelectTag={handleSelectTag}
        selectedTag={selectedTag}
      />
      <div className={styles.showcaseList}>
        <ShowcaseList showcaseItems={filtered} onSelectTag={handleSelectTag} />
      </div>
    </div>
  );
};
export async function getStaticProps() {
  // eventually get meta data from CMS?
  return {
    props: {
      meta: {
        title: "Streameye - Showcase",
        description: "Streameye generated ads for various clients",
        keywords: ["kw1", "kw2"],
      },
      showcaseItems: SHOWCASE_ITEMS,
    } as PageProps, // will be passed to the page component as props
  };
}
export default Index;
