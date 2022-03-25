import Wrapper from "@/components/organisms/Wrapper/Wrapper";
import Link from "next/link";
import Icon from "../Icon/Icon";
import styles from "./showcase-title.module.scss";
interface ShowcaseTitleProps {
  client: string;
  prevId?: string;
  nextId?: string;
}
export const ShowcaseTitle = ({
  client,
  prevId,
  nextId,
}: ShowcaseTitleProps) => {
  return (
    <div className={styles.container}>
      <Wrapper isWide className={styles.title}>
        <h1>{client}</h1>
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

          <Link href="/showcase" passHref>
            <a>
              <Icon icon="close-thin" className={styles.icon} />
            </a>
          </Link>
        </div>
      </Wrapper>
    </div>
  );
};
