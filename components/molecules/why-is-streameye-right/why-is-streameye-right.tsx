import Wrapper from "@/components/organisms/Wrapper/Wrapper";
import classNames from "classnames";
import { Children, ReactElement } from "react";
import ReactMarkdown from "react-markdown";
import styles from "./why-is-streameye-right.module.scss";

interface WhyIsStreameyeRightProps {
  className?: string;
  title: string;
  copy: string;
  cta: ReactElement;
}
export const WhyIsStreameyeRight = ({
  title,
  copy,
  className,
  cta: propsCta,
}: WhyIsStreameyeRightProps) => {
  const cta = Children.only<ReactElement>(propsCta);
  return (
    <Wrapper>
      <div className={classNames([styles.container, className])}>
        <h2>{title}</h2>
        <ReactMarkdown>{copy}</ReactMarkdown>
        <div className={styles.actionButton}>{cta}</div>
      </div>
    </Wrapper>
  );
};
