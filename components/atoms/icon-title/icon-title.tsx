import Icon from "../Icon/Icon";
import styles from "./icon-title.module.scss";
interface IconTitleProps {
  icon: string;
  title: string;
}
export const IconTitle = ({ icon, title }: IconTitleProps) => {
  return (
    <div className={styles.container}>
      <span>
        <Icon icon={icon} className={styles.icon} />
      </span>
      <h1>{title}</h1>
    </div>
  );
};
