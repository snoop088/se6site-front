import Button from "@/components/molecules/Button/Button";
import { ContactForm } from "@/components/molecules/contact-form/contact-form";
import Wrapper from "@/components/organisms/Wrapper/Wrapper";
import { ADDRESS, INTERESTS, MESSAGE } from "api/mockdata/contact";
import { readTheFile } from "helpers/read-the-file";
import { PageWithMeta } from "interfaces/page-with-meta";
import type { NextPage } from "next";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

import styles from "./contact.module.scss";
interface PageProps extends PageWithMeta {
  title: string;
  copyMd: string;
  address: {
    title: string;
    line1: string;
    line2?: string;
    townWithZip: string;
    email: string;
  };
  interests: {
    title: string;
    values: string[];
  };
}

const Contact: NextPage<PageProps> = ({
  title,
  copyMd,
  address,
  interests,
}) => {
  return (
    <div className={styles.container}>
      <Wrapper className={styles.containerGrid}>
        <h1 className={styles.title}>
          <Image src="/contact.svg" width={96} height={96} alt="Contact Us" />
          <span>{title}</span>
        </h1>
        <div className={styles.address}>
          <h3>{address.title}</h3>
          <p>{address.line1}</p>
          {address.line2 && <p>{address.line2}</p>}
          <p>{address.townWithZip}</p>
          <p>
            <a href={`mailto:${address.email}`}>{address.email}</a>
          </p>
          <div className={styles.action}>
            <a
              href="https://goo.gl/maps/jtNb4k7pRy757cQ99"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="green" title="Find us on maps" small />
            </a>
          </div>
        </div>
        <div className={styles.copy}>
          <ReactMarkdown>{copyMd}</ReactMarkdown>
        </div>
        <div className={styles.form}>
          <ContactForm interests={interests} />
        </div>
      </Wrapper>
    </div>
  );
};
export async function getStaticProps() {
  let md = "";
  try {
    md = await readTheFile(MESSAGE.copyMd);
  } catch (err) {
    console.error(err);
  }
  return {
    props: {
      meta: {
        title: "Streameye - Contact Us",
        description: "Get in touch today to start a conversation",
        keywords: ["kw1", "kw2"],
      },
      title: MESSAGE.title,
      copyMd: md,
      address: ADDRESS,
      interests: INTERESTS,
    } as PageProps, // will be passed to the page component as props
  };
}
export default Contact;
