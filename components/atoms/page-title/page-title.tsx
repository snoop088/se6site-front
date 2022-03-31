import Wrapper from "@/components/organisms/Wrapper/Wrapper";
import classNames from "classnames";
import Link from "next/link";
import Icon from "../Icon/Icon";
import styles from "./page-title.module.scss";
interface PageTitleProps {
  title: string;
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
        {icon && <Icon icon={icon} className={styles.icon} />}
        <h1>{title}</h1>
        <div className={styles.nav}>
          {prevId && (
            <Link href={"/showcase/" + prevId}>
              <a>
                <Icon icon="arrow-thin" className={styles.prevIcon} />
              </a>
            </Link>
          )}
          {nextId && (
            <Link href={"/showcase/" + nextId}>
              <a>
                <Icon icon="arrow-thin" className={styles.nextIcon} />
              </a>
            </Link>
          )}

          <Link href="./" passHref>
            <a>
              <Icon icon="close-thin" className={styles.closeIcon} />
            </a>
          </Link>
        </div>
      </Wrapper>
    </div>
  );
};
