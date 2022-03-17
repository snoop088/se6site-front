import React, { useContext } from "react";

import Wrapper from "@/components/organisms/Wrapper/Wrapper";
import FooterMenu from "@/components/molecules/FooterMenu/FooterMenu";
import Logo from "@/components/atoms/Logo/Logo";
import FooterSocials from "@/components/molecules/FooterSocials/FooterSocials";

import styles from "./Footer.module.scss";
import { AppContext } from "app-context/app-context";
interface Props {
  menuLinks: {
    href: string;
    title: string;
    isCta?: boolean;
  }[];
  address: string;
  mail: string;
  socialsItems: {
    title: string;
    icon: string;
    href: string;
  }[];
}

const Footer = ({ menuLinks, socialsItems, address, mail }: Props) => {
  const c = useContext(AppContext);
  return (
    <footer className={styles.footer}>
      <Wrapper className={styles.wrapper} isWide>
        <div className={styles.logoWrapper}>
          <Logo className={styles.logo} />
          <p className={styles.description}>
            Supercharge your digital assets production
          </p>
        </div>
        <FooterMenu links={menuLinks} className={styles.menu} />
        <FooterSocials items={socialsItems} className={styles.socials} />
        <p className={styles.address}>
          <span>{address}</span>
        </p>
        <div className={styles.mailWrapper}>
          <a href={`mailto:${mail}`} className={styles.mail}>
            {mail}
          </a>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
