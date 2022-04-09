import Wrapper from "@/components/organisms/Wrapper/Wrapper";
import ReactMarkdown from "react-markdown";
import styles from "./testimonial-item.module.scss";

interface TestimonialItemProps {
  copyMd: string;
  personName: string;
  personPosition: string;
  personCompany: string;
}
export const TestimonialItem = ({
  copyMd,
  personName,
  personPosition,
  personCompany,
}: TestimonialItemProps) => {
  return (
    <Wrapper className={styles.testimonialContent}>
      <blockquote>
        <div className={styles.copy}>
          <ReactMarkdown>{copyMd}</ReactMarkdown>
        </div>
        <div className={styles.testimonialPerson}>
          <div className={styles.personName}>{personName}</div>
          <div className={styles.personPosition}>{personPosition}</div>
        </div>
        <div className={styles.testimonialClient}>{personCompany}</div>
      </blockquote>
    </Wrapper>
  );
};
