import { BulletListMd } from "@/components/atoms/bullet-list-md/bullet-list-md";
import { IconTitle } from "@/components/atoms/icon-title/icon-title";
import { FeatureItemSlim } from "interfaces/feature-item-slim";
import Image from "next/image";
import Button from "../Button/Button";
import styles from "./feature-slim.module.scss";
interface FeatureSlimProps {
  featureItemSlim: FeatureItemSlim;
  onDemoClick: () => void;
  onReadMoreClick: (id: string) => void;
}
export const FeatureSlim = ({
  featureItemSlim: { id, icon, title, benefits, mediaUrl },
  onDemoClick,
  onReadMoreClick,
}: FeatureSlimProps) => {
  return (
    <div className={styles.container}>
      <section>
        <IconTitle icon={icon} title={title} />
        <BulletListMd listMd={benefits} className={styles.benefits} />
      </section>

      <div className={styles.actionButtons}>
        <Button
          title="Book a Demo"
          onClick={onDemoClick}
          variant="green"
          icon="button-arrow"
          small
        />
        <Button
          variant="secondary"
          title="+ Read More"
          onClick={onDemoClick}
          small
        />
      </div>
      <figure>
        <Image
          src={mediaUrl}
          alt={title}
          layout="intrinsic"
          width={768}
          height={576}
        />
      </figure>
    </div>
  );
};
