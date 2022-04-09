import { BlogSlim } from "@/components/molecules/blog-slim/blog-slim";
import Wrapper from "@/components/organisms/Wrapper/Wrapper";
import { BLOG_POSTS_SLIM } from "api/mockdata/blog";
import { BlogItemSlim } from "interfaces/blog-item-slim";
import { PageWithMeta } from "interfaces/page-with-meta";
import { NextPage } from "next";
import styles from "./index.module.scss";

interface PageProps extends PageWithMeta {
  blogPostsSlim: BlogItemSlim[];
}

const Index: NextPage<PageProps> = ({ blogPostsSlim }: PageProps) => {
  return (
    <div className={styles.container}>
      <Wrapper isWide className={styles.blogGrid}>
        {blogPostsSlim.map((post) => (
          <div key={post.id}>
            <BlogSlim blogItemSlim={post} />
          </div>
        ))}
      </Wrapper>
    </div>
  );
};
export async function getStaticProps() {
  // eventually get meta data from CMS?
  return {
    props: {
      meta: {
        title: "Streameye - Case Studies",
        description: "Streameye's success stories",
        keywords: ["kw1", "kw2"],
      },
      blogPostsSlim: BLOG_POSTS_SLIM,
    } as PageProps, // will be passed to the page component as props
  };
}
export default Index;
