import styles from "./who-uses-streameye.module.scss";
import Image from "next/image";
import Wrapper from "@/components/organisms/Wrapper/Wrapper";

interface WhoUsesStreameyeProps {
  title: string;
  copy: string;
  partners: { icon: string; name: string; aspect: "wide" | "sq" }[];
}

export const WhoUsesStreameye = ({
  title,
  copy,
  partners,
}: WhoUsesStreameyeProps) => {
  return (
    <div className={styles.container}>
      <Wrapper>
        <h1>{title}</h1>
        <p>{copy}</p>
        <div className={styles.partners}>
          {partners.map((partner, index) => (
            <span key={index}>
              <Image
                alt={partner.name}
                key={partner.icon}
                src={partner.icon}
                width={partner.aspect === "wide" ? 144 : 72}
                height={72}
              />
            </span>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};
