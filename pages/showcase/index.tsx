import { TagFilter } from "@/components/molecules/tag-filter/tag-filter";
import { ShowcaseList } from "@/components/organisms/showcase-list/showcase-list";
import { SHOWCASE_ITEMS, SHOWCASE_TAGS } from "api/mockdata/showcase-data";
import { NextPage } from "next";
import { useState } from "react";
import styles from "./index.module.scss";

const Index: NextPage = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const handleSelectTag = (tag: string | null) => {
    setSelectedTag(tag);
  };
  const filtered = SHOWCASE_ITEMS.filter(
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
export default Index;
