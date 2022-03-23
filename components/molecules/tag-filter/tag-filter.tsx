import classNames from "classnames";
import styles from "./tag-filter.module.scss";
interface TagFilterProps {
  tags: string[];
  selectedTag?: string | null;
  onSelectTag: (tag: string | null) => void;
}
export const TagFilter = ({
  tags,
  selectedTag = null,
  onSelectTag,
}: TagFilterProps) => {
  return (
    <div className={styles.container}>
      <span
        className={classNames([
          styles.tag,
          { [styles.active]: selectedTag === null },
        ])}
        onClick={() => onSelectTag(null)}
      >
        All
      </span>
      {tags.map((tag) => (
        <span
          key={tag}
          className={classNames([
            styles.tag,
            { [styles.active]: selectedTag === tag },
          ])}
          onClick={() => onSelectTag(tag)}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};
