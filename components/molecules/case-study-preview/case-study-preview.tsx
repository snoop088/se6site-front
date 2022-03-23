import Icon from "@/components/atoms/Icon/Icon";
import Image from "next/image";
import Link from "next/link";
import styles from "./case-study-preview.module.scss";

interface CaseStudyPreviewProps {
  id: string;
  logo: string;
  summary: string;
  client: string;
  cta: string;
  aspect: "wide" | "sq";
}

export const CaseStudyPreview = ({
  logo,
  summary,
  client,
  cta,
  id,
  aspect,
}: CaseStudyPreviewProps) => {
  return (
    <div className={styles.container}>
      <Link href={"/casestudies/" + id} passHref>
        <figure>
          <Image
            className={styles.image}
            src={logo}
            alt={client}
            width={aspect === "wide" ? 128 : 64}
            height={72}
          />
        </figure>
      </Link>

      <div className={styles.summary}>
        {summary}
        <Link href={"/casestudies/" + id} passHref>
          <a>
            {cta} <Icon icon="button-arrow" className={styles.icon}></Icon>
          </a>
        </Link>
      </div>
    </div>
  );
};
