import Wrapper from "@/components/organisms/Wrapper/Wrapper";
import styles from "./why-streameye.module.scss";

import Image from "next/image";

interface WhyStreameyeProps {
  title: string;
  copy: string;
  usps: { icon: string; copy: string }[];
}

export const WhyStreameye = ({ title, copy, usps }: WhyStreameyeProps) => {
  return (
    <div className={styles.container}>
      <Wrapper>
        <h1>{title}</h1>
        <p>{copy}</p>
        <div className={styles.usps}>
          {usps.map((usp) => (
            <div key={usp.icon}>
              <Image src={usp.icon} width={96} height={96} alt={usp.copy} />
              <span>{usp.copy}</span>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};
