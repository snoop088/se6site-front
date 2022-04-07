import { BulletListMd } from "@/components/atoms/bullet-list-md/bullet-list-md";
import { IconTitle } from "@/components/atoms/icon-title/icon-title";
import { FeatureItemSlim } from "interfaces/feature-item-slim";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";
import styles from "./feature-slim.module.scss";
interface FeatureSlimProps {
  featureItemSlim: FeatureItemSlim;
  onDemoClick: () => void;
}
export const FeatureSlim = ({
  featureItemSlim: { id, icon, title, benefits, mediaUrl },
  onDemoClick,
}: FeatureSlimProps) => {
  return (
    <div className={styles.container}>
      <section>
        <IconTitle icon={icon} title={title} />
        <BulletListMd listMd={benefits} className={styles.benefits} />
      </section>

      <div className={styles.actionButtons}>
        <span className={styles.bookADemo}>
          <Button
            title="Book a demo"
            onClick={onDemoClick}
            variant="green"
            icon="button-arrow"
            small
          />
        </span>
        <span className={styles.readMore}>
          <Link href={"/features/" + id}>
            <a>
              <Button
                className={styles.readMore}
                variant="secondary"
                title="+ Read more"
                small
              />
            </a>
          </Link>
        </span>
      </div>
      <figure>
        <Image
          src={mediaUrl}
          alt={title}
          width={768}
          height={476}
          quality={100}
        />
      </figure>
    </div>
  );
};
