import { MediaThumb } from "@/components/atoms/media-thumb/media-tumb";
import { Tags } from "@/components/atoms/tags/tags";
import { IShowcaseItem } from "interfaces/showcase-item";
import styles from "./showcase-item.module.scss";

interface ShowcaseItemProps extends IShowcaseItem {
  onTagClick: (tag: string) => void;
}
export const ShowcaseItem = ({
  id,
  thumbUrl,
  tags,
  client,
  title,
  streameyeId,
  onTagClick,
}: ShowcaseItemProps) => {
  return (
    <div className={styles.container}>
      <section>
        <MediaThumb
          title={title}
          thumbUrl={thumbUrl}
          itemId={id}
          streameyeId={streameyeId}
        />
        <h3>{client}</h3>
        <div className={styles.title}>{title}</div>
      </section>

      <Tags items={tags} onTagClick={onTagClick} />
    </div>
  );
};
