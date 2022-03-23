import { MediaThumb } from "@/components/atoms/media-thumb/media-tumb";
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
      <figure>
        <MediaThumb
          title={title}
          thumbUrl={thumbUrl}
          itemId={id}
          streameyeId={streameyeId}
        />
      </figure>
      <h3>{client}</h3>
      <div className={styles.title}>{title}</div>
      <div className={styles.tags}>
        {tags.map((tag) => (
          <span key={tag} onClick={() => onTagClick(tag)}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
