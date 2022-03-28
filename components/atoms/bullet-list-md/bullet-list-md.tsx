import classNames from "classnames";
import ReactMarkdown from "react-markdown";
import styles from "./bullet-list-md.module.scss";
interface BulletListMdProps {
  listMd: string[];
  className?: string;
}
export const BulletListMd = ({ listMd, className }: BulletListMdProps) => {
  return (
    <ul className={classNames([styles.container, className])}>
      {listMd.map((item, index) => (
        <li key={index}>
          <ReactMarkdown>{item}</ReactMarkdown>
        </li>
      ))}
    </ul>
  );
};
