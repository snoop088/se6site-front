import classNames from "classnames";
import styles from "./tags.module.scss";
interface TagsProps {
  items: string[];
  className?: string;
  onTagClick?: (tag: string) => void;
}
export const Tags = ({ items, className, onTagClick }: TagsProps) => {
  return (
    <div
      className={classNames([
        styles.container,
        className,
        { [styles.clickable]: onTagClick },
      ])}
    >
      {items.map((tag) => (
        <span key={tag} onClick={() => (onTagClick ? onTagClick(tag) : null)}>
          {tag}
        </span>
      ))}
    </div>
  );
};
