import { SelectedArticles } from "@/components/molecules/selected-articles/selected-articles";
import Wrapper from "@/components/organisms/Wrapper/Wrapper";
import { BLOG_POSTS_FULL, SELECTED_ARTICLES } from "api/mockdata/blog";
import { BlogItem } from "interfaces/blog-item";
import { BlogItemSlim } from "interfaces/blog-item-slim";
import { PageWithMeta } from "interfaces/page-with-meta";
import { NextPage } from "next";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

import styles from "./[id].module.scss";
import { readTheFile } from "helpers/read-the-file";

interface PageProps extends PageWithMeta {
  blogItem: BlogItem;
  selectedArticles?: BlogItemSlim[];
  blogCopyString?: string;
}

const BlogArticle: NextPage<PageProps> = ({
  blogItem,
  selectedArticles,
  blogCopyString,
}: PageProps) => {
  // const { isFallback } = useRouter();
  // if (isFallback) {
  //   return <div>WHAT!</div>;
  // }
  const { title, mediaUrl, author, date, copyMd } = blogItem;
  const formattedDate = new Date(date).toDateString();
  return (
    <div className={styles.container}>
      <Wrapper className={styles.article}>
        <figure>
          <Image src={mediaUrl} width={725} height={480} alt={title} />
        </figure>
        <h1>{title}</h1>
        <div className={styles.authorDate}>
          By <span className={styles.author}>{author}&nbsp;&nbsp;</span>|
          <span className={styles.date}>&nbsp;&nbsp;{formattedDate}</span>
        </div>
        <div className={styles.copy}>
          <ReactMarkdown linkTarget="_blank">
            {copyMd || blogCopyString || ""}
          </ReactMarkdown>
        </div>
      </Wrapper>
      {selectedArticles && (
        <div className={styles.selectedArticles}>
          <SelectedArticles articles={selectedArticles} />
        </div>
      )}
    </div>
  );
};
export async function getStaticPaths() {
  const paths = BLOG_POSTS_FULL.map((item) => ({ params: { id: item.id } }));
  return {
    paths,
    fallback: "blocking", // false or 'blocking'
  };
}
export async function getStaticProps({
  params: { id },
}: {
  params: { id: string };
}) {
  // eventually get meta data from CMS?
  const index = BLOG_POSTS_FULL.findIndex((item) => item.id === id);
  if (index === -1) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const nextId =
    index < BLOG_POSTS_FULL.length - 1 ? BLOG_POSTS_FULL[index + 1].id : 0;

  let md = "";
  try {
    md = await readTheFile(
      `./api/content/blog/${BLOG_POSTS_FULL[index].id}.md`
    );
  } catch (err) {
    console.error(err);
  }
  return {
    props: {
      meta: {
        title: "Streameye - Blog - " + BLOG_POSTS_FULL[index].title,
        description: "Streameye's Blog - Our findings on few digital topics",
        keywords: ["kw1", "kw2"],
      },
      blogItem: BLOG_POSTS_FULL[index],
      blogCopyString: md,
      selectedArticles: SELECTED_ARTICLES,
    } as PageProps, // will be passed to the page component as props
  };
}
export default BlogArticle;
