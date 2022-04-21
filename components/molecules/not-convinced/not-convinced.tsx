import Wrapper from "@/components/organisms/Wrapper/Wrapper";
import { CaseStudyPreview } from "@/components/molecules/case-study-preview/case-study-preview";
import styles from "./not-convinced.module.scss";
import Button from "../Button/Button";
import Link from "next/link";
interface NotConvincedProps {
  title: string;
  caseStudyPreviews: {
    id: string;
    client: string;
    summary: string;
    cta: string;
    logo: string;
    aspect: "wide" | "sq";
  }[];
}
export const NotConvinced = ({
  title,
  caseStudyPreviews,
}: NotConvincedProps) => {
  return (
    <Wrapper className={styles.container}>
      <h2>{title}</h2>
      <div className={styles.caseStudyPreviews}>
        {caseStudyPreviews.map((preview) => (
          <div className={styles.preview} key={preview.id}>
            <CaseStudyPreview
              id={preview.id}
              client={preview.client}
              summary={preview.summary}
              cta={preview.cta}
              logo={preview.logo}
              aspect={preview.aspect}
            ></CaseStudyPreview>
          </div>
        ))}
      </div>
      <div className={styles.actionButton}>
        <Link href="/contact" passHref>
          <a>
            <Button variant="green" title="Book a live demo" />
          </a>
        </Link>
      </div>
    </Wrapper>
  );
};
