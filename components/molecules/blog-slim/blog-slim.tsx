import { BlogItemSlim } from "interfaces/blog-item-slim";
import styles from "./blog-slim.module.scss";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";

interface BlogSlimProps {
  blogItemSlim: BlogItemSlim;
}
export const BlogSlim = ({
  blogItemSlim: { title, date, author, mediaUrl, id, shortCopy },
}: BlogSlimProps) => {
  const formattedDate = new Date(date).toDateString();
  return (
    <div className={styles.container}>
      <figure>
        <Link href={"/blog/" + id} passHref>
          <a>
            <Image src={mediaUrl} width={725} height={480} alt={title} />
          </a>
        </Link>
      </figure>
      <h2>{title}</h2>
      <div className={styles.by}>
        By <span className={styles.author}>{author}</span>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <span className={styles.date}>{formattedDate}</span>
      </div>
      <p>{shortCopy}</p>
      <div className={styles.action}>
        <Link href={"/blog/" + id} passHref>
          <a>
            <Button title="Read more" small variant="green" />
          </a>
        </Link>
      </div>
    </div>
  );
};
