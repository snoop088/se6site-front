import { BulletListMd } from "@/components/atoms/bullet-list-md/bullet-list-md";
import { CaseStudyItemSlim } from "interfaces/case-study-item-slim";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

import styles from "./case-study-slim.module.scss";
import classNames from "classnames";
import Link from "next/link";
import Button from "../Button/Button";
interface CaseStudySlimProps {
  caseStudyItemSlim: CaseStudyItemSlim;
  order?: "normal" | "reverse";
}

export const CaseStudySlim = ({
  caseStudyItemSlim: { titleMd, client, bullets, cta, mediaUrl, copyMd, id },
  order = "normal",
}: CaseStudySlimProps) => {
  return (
    <div
      className={classNames([
        styles.container,
        { [styles.reversed]: order === "reverse" },
      ])}
    >
      <figure>
        <Link href={"/case-studies/" + id} passHref>
          <a>
            <Image src={mediaUrl} alt={client} width={725} height={625} />
          </a>
        </Link>
      </figure>

      <div className={styles.content}>
        <h2>
          CASE STUDY: <span>{client}</span>
        </h2>
        <h1>
          <ReactMarkdown>{titleMd}</ReactMarkdown>
        </h1>
        <BulletListMd className={styles.bullets} listMd={bullets} />
        <ReactMarkdown className={styles.copy}>{copyMd}</ReactMarkdown>
        <div className={styles.cta}>
          <Link href={"/case-studies/" + id} passHref>
            <a>
              <Button title={cta} variant="green" small />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
