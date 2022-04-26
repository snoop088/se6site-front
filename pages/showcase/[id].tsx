import { NextPage } from "next";
import styles from "./[id].module.scss";
import { SHOWCASE_ITEMS } from "api/mockdata/showcase-data";
import { IShowcaseItem } from "interfaces/showcase-item";
import { PageTitle } from "@/components/atoms/page-title/page-title";
import Wrapper from "@/components/organisms/Wrapper/Wrapper";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { Tags } from "@/components/atoms/tags/tags";
import { PageWithMeta } from "interfaces/page-with-meta";
import classNames from "classnames";

interface PageProps extends PageWithMeta {
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
    <div className={styles.container}>
      <div
        style={{
          backgroundImage: `url(${item.backdropUrl})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
        className={classNames([styles.backdrop])}
      ></div>
      <section className={styles.content}>
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
                {size.adUrl && size.adType === "video" && (
                  <video
                    width={"100%"}
                    height={"auto"}
                    controls
                    muted
                    src={"/showcase/videos/" + size.adUrl}
                  >
                    <source src={"/showcase/videos/" + size.adUrl} />
                  </video>
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
      </section>
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
        title: "Streameye - Showcase - " + SHOWCASE_ITEMS[index].client,
        description:
          "Streameye generated ads for " + SHOWCASE_ITEMS[index].client,
        keywords: [
          "digital ads",
          "html5",
          "generated ads",
          "ads for social channels",
          "automated ads",
        ],
      },
      item: SHOWCASE_ITEMS[index],
      topRoute: "/showcase",
      prevId,
      nextId,
    } as PageProps, // will be passed to the page component as props
  };
}
export default ShowcaseDetail;
