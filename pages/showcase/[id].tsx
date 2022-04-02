import { NextPage } from "next";
import styles from "./[id].module.scss";
import { SHOWCASE_ITEMS } from "api/mockdata/showcase-data";
import { PageMeta } from "interfaces/page-meta";
import { IShowcaseItem } from "interfaces/showcase-item";
import { PageTitle } from "@/components/atoms/page-title/page-title";
import Wrapper from "@/components/organisms/Wrapper/Wrapper";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { Tags } from "@/components/atoms/tags/tags";

interface PageProps {
  meta?: PageMeta;
  item: IShowcaseItem;
  topRoute: string;
  prevId?: string;
  nextId?: string;
}

const ShowcaseDetail: NextPage<PageProps> = ({
  item,
  prevId,
  nextId,
  topRoute,
}) => {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(/showcase/${item?.id}_backdrop.jpg)` }} // maybe rewrite this with url as param
    >
      <PageTitle
        title={item.client}
        prevId={prevId}
        nextId={nextId}
        topRoute={topRoute}
        elevated
      />
      <Wrapper isWide className={styles.wrapper}>
        <div className={styles.adsContainer}>
          {item.sizes?.map((size) => (
            <div
              className={styles.ad}
              key={size.seId || size.adUrl}
              data-width={size.seId && size.w}
            >
              {size.seId && (
                <iframe
                  src={"https://banners.streameye.net/" + size.seId}
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  scrolling="no"
                  style={{ width: size.w, height: size.h }}
                ></iframe>
              )}
              {size.adUrl && size.adType === "static" && (
                <figure>
                  <Image
                    src={"/showcase/static/" + size.adUrl}
                    width={size.w}
                    height={size.h}
                    alt={item.client}
                  />
                </figure>
              )}
            </div>
          ))}
        </div>
        <aside>
          <div className={styles.copyContainer}>
            <h2>{item.title}</h2>
            <ReactMarkdown>{item.copyMd ?? ""}</ReactMarkdown>
            <Tags items={item.tags} className={styles.tagsContainer} />
          </div>
        </aside>
      </Wrapper>
    </div>
  );
};
export async function getStaticPaths() {
  const paths = SHOWCASE_ITEMS.map((item) => ({ params: { id: item.id } }));
  return {
    paths,
    fallback: false, // false or 'blocking'
  };
}
export async function getStaticProps({
  params: { id },
}: {
  params: { id: string };
}) {
  // eventually get meta data from CMS?
  const index = SHOWCASE_ITEMS.findIndex((item) => item.id === id);
  const prevId = index > 0 ? SHOWCASE_ITEMS[index - 1].id : null;
  const nextId =
    index < SHOWCASE_ITEMS.length - 1 ? SHOWCASE_ITEMS[index + 1].id : null;
  return {
    props: {
      meta: {
        title: "Streameye - App",
        description: "I am the home page",
        keywords: ["kw1", "kw2"],
      },
      item: SHOWCASE_ITEMS[index],
      topRoute: "/showcase",
      prevId,
      nextId,
    } as PageProps, // will be passed to the page component as props
  };
}
export default ShowcaseDetail;
