import Wrapper from "@/components/organisms/Wrapper/Wrapper";
import ReactMarkdown from "react-markdown";
import Button from "../Button/Button";
import styles from "./what-is-streameye.module.scss";

interface WhatIsStreameyeProps {
  copyMd: string; // Md means it takes MarkDown string
  boldCopy: string;
  cta: string;
}

export const WhatIsStreameye = ({
  copyMd,
  boldCopy,
  cta,
}: WhatIsStreameyeProps) => {
  return (
    <Wrapper className={styles.container}>
      <div className={styles.robotVideo}>
        <video autoPlay loop muted playsInline className={styles.robotEyeVid}>
          <source src="/roboteye_1.mp4" />
        </video>
      </div>
      <div className={styles.whatIsSe}>
        <ReactMarkdown>{copyMd}</ReactMarkdown>
        <h2>{boldCopy}</h2>
        <p>
          <Button title={cta} variant="green" />
        </p>
      </div>
    </Wrapper>
  );
};
