import styles from "./media-thumb.module.scss";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface MediaThumbProps {
  thumbUrl: string;
  itemId: string;
  title: string;
  streameyeId?: string; // to show some animation on hover
}
export const MediaThumb = ({
  thumbUrl,
  itemId,
  streameyeId,
  title,
}: MediaThumbProps) => {
  const [showAnimated, setShowAnimated] = useState(false);
  return (
    <div className={styles.container}>
      <Link href={"/showcase/" + itemId} passHref>
        <a
          onMouseEnter={() => streameyeId && setShowAnimated(true)}
          onMouseLeave={() => streameyeId && setShowAnimated(false)}
        >
          {showAnimated && streameyeId && (
            <>
              <iframe
                src={"https://banners.streameye.net/" + streameyeId}
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                scrolling="no"
              ></iframe>
              <Image
                className={styles.loadingAd}
                src="/loader-puff-dark.svg"
                width={32}
                height={32}
                alt="Loading"
              />
            </>
          )}
          {!showAnimated && (
            <figure>
              <Image
                width={300}
                height={250}
                src={"/showcase/" + thumbUrl}
                alt={title}
              />
            </figure>
          )}
        </a>
      </Link>
    </div>
  );
};
