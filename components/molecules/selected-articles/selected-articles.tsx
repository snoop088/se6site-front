import { BlogItemSlim } from "interfaces/blog-item-slim";
import Link from "next/link";
import Image from "next/image";

import styles from "./selected-articles.module.scss";
import Wrapper from "@/components/organisms/Wrapper/Wrapper";

interface SelectedArticlesProps {
  articles: BlogItemSlim[];
}
export const SelectedArticles = ({ articles }: SelectedArticlesProps) => {
  return (
    <Wrapper isWide className={styles.container}>
      <h2>LATEST IN THE BLOG</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <figure>
              <Link href={"/blog/" + article.id} passHref>
                <a>
                  <Image
                    src={article.mediaUrl}
                    width={363}
                    height={240}
                    alt={article.title}
                  />
                </a>
              </Link>
            </figure>
            <h4>{article.title}</h4>
            <div className={styles.action}>
              <Link href={"/blog/" + article.id} passHref>
                <a>Read more</a>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};
