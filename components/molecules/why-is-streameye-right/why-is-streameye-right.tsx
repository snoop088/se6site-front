import ReactMarkdown from "react-markdown";
import Button from "../Button/Button";
import styles from "./why-is-streameye-right.module.scss";

interface WhyIsStreameyeRightProps {
  title: string;
  copy: string;
  cta: string;
}
export const WhyIsStreameyeRight = ({
  title,
  copy,
  cta,
}: WhyIsStreameyeRightProps) => {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <ReactMarkdown>{copy}</ReactMarkdown>
      <div className={styles.actionButton}>
        <Button title={cta} type="button" elevated icon={"button-arrow"} />
      </div>
    </div>
  );
};
