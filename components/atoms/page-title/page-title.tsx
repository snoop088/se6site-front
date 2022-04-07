import Wrapper from "@/components/organisms/Wrapper/Wrapper";
import classNames from "classnames";
import Link from "next/link";
import { IconTitle } from "../icon-title/icon-title";
import Icon from "../Icon/Icon";
import styles from "./page-title.module.scss";
interface PageTitleProps {
  title: string;
  topRoute?: string;
  icon?: string;
  elevated?: boolean;
  prevId?: string;
  nextId?: string;
}
export const PageTitle = ({
  icon,
  title,
  prevId,
  nextId,
  topRoute,
  elevated,
}: PageTitleProps) => {
  return (
    <div
      className={classNames([
        styles.container,
        { [styles.elevated]: elevated },
      ])}
    >
      <Wrapper isWide className={styles.title}>
        <div className={styles.iconTitle}>
          <IconTitle title={title} icon={icon} />
        </div>
        <div className={styles.nav}>
          {prevId && (
            <Link href={`${topRoute}/${prevId}`}>
              <a>
                <Icon icon="arrow-thin" className={styles.prevIcon} />
              </a>
            </Link>
          )}
          {nextId && (
            <Link href={`${topRoute}/${nextId}`}>
              <a>
                <Icon icon="arrow-thin" className={styles.nextIcon} />
              </a>
            </Link>
          )}
          {topRoute && (
            <Link href={topRoute}>
              <a>
                <Icon icon="close-thin" className={styles.closeIcon} />
              </a>
            </Link>
          )}
        </div>
      </Wrapper>
    </div>
  );
};
