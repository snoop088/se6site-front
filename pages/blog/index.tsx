import { BlogSlim } from "@/components/molecules/blog-slim/blog-slim";
import Wrapper from "@/components/organisms/Wrapper/Wrapper";
import { BLOG_POSTS_SLIM } from "api/mockdata/blog";
import { BlogItemSlim } from "interfaces/blog-item-slim";
import { PageWithMeta } from "interfaces/page-with-meta";
import { NextPage } from "next";
import { useMemo, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import Image from "next/image";
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
        ...post,
        id: post.id + i,
      }));
      const p = new Promise((resolve) => setTimeout(resolve, timeInterval));
      await p;
      yield a;
    }
  }
  // must memoise or it will be recreated on re-render!
  // no dependencies needed as this is only derived once
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const nextPostsCall = useMemo(() => articleGenerator(3, 1000), []);
  const blogLoader = async () => {
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
        loader={
          <div key={873432} className={styles.loader}>
            <Image
              className={styles.loadingAd}
              src="/loader-puff-dark.svg"
              width={32}
              height={32}
              alt="Loading"
            />
          </div>
        }
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
