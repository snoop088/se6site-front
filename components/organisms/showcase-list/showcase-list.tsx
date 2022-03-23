import { ShowcaseItem } from "@/components/molecules/showcase-item/showcase-item";
import { IShowcaseItem } from "interfaces/showcase-item";
import Wrapper from "../Wrapper/Wrapper";
import styles from "./showcase-list.module.scss";
interface ShowcaseListProps {
  showcaseItems: IShowcaseItem[];
  onSelectTag: (tag: string) => void;
}
export const ShowcaseList = ({
  showcaseItems,
  onSelectTag,
}: ShowcaseListProps) => {
  return (
    <Wrapper isWide className={styles.itemsContainer}>
      {showcaseItems.map((item) => (
        <div className={styles.showcaseItem} key={item.id}>
          <ShowcaseItem
            id={item.id}
            thumbUrl={item.thumbUrl}
            tags={item.tags}
            client={item.client}
            title={item.title}
            streameyeId={item.streameyeId}
            onTagClick={onSelectTag}
          />
        </div>
      ))}
    </Wrapper>
  );
};
