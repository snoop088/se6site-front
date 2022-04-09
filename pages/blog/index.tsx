import { BlogSlim } from "@/components/molecules/blog-slim/blog-slim";
import Wrapper from "@/components/organisms/Wrapper/Wrapper";
import { BLOG_POSTS_SLIM } from "api/mockdata/blog";
import { sensitiveHeaders } from "http2";
import { BlogItemSlim } from "interfaces/blog-item-slim";
import { PageWithMeta } from "interfaces/page-with-meta";
import { NextPage } from "next";
import { useMemo, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import styles from "./index.module.scss";

interface PageProps extends PageWithMeta {
  blogPostsSlim: BlogItemSlim[];
}

const Index: NextPage<PageProps> = ({ blogPostsSlim }: PageProps) => {
  const [hasNext, setHasNext] = useState(true);
  const [posts, setPosts] = useState(blogPostsSlim);

  // use to generate next articles. we can fetch more here instead of fake promise.
  async function* articleGenerator(
    num: number,
    timeInterval: number
  ): AsyncGenerator<BlogItemSlim[]> {
    let i = 0;
    for (let i = 0; i < num; i++) {
      const a: BlogItemSlim[] = blogPostsSlim.map((post) => ({
        id: post.id + "_" + i,
        medialUrl: post.medialUrl,
        author: post.author,
        date: post.date,
        title: post.title,
        shortCopy: post.shortCopy,
      }));
      const p = new Promise((resolve, reject) =>
        setTimeout(() => resolve(null), timeInterval)
      );
      await p;
      yield a;
    }
  }
  // must memoise or it will be recreated on re-render!
  const nextPostsCall = useMemo(() => articleGenerator(3, 1000), []);
  const blogLoader = async () => {
    console.log("well then?");
    const loaded = await nextPostsCall.next();
    if (loaded.done) {
      setHasNext(false);
    } else {
      setPosts((current) => [...current, ...loaded.value]);
    }
  };
  return (
    <div className={styles.container}>
      <InfiniteScroll
        pageStart={1}
        loadMore={blogLoader}
        hasMore={hasNext}
        loader={<div key={873432}>I am loading!</div>}
      >
        <Wrapper isWide className={styles.blogGrid}>
          {posts.map((post) => (
            <div key={post.id}>
              <BlogSlim blogItemSlim={post} />
            </div>
          ))}
        </Wrapper>
      </InfiniteScroll>
    </div>
  );
};
export async function getStaticProps() {
  // eventually get meta data from CMS?
  return {
    props: {
      meta: {
        title: "Streameye - Blog",
        description: "Streameye's articles from research and fun readings",
        keywords: ["kw1", "kw2"],
      },
      blogPostsSlim: BLOG_POSTS_SLIM,
    } as PageProps, // will be passed to the page component as props
  };
}
export default Index;
