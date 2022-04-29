import styles from "./layout.module.scss";
import cn from "classnames";
import { ReactElement, useContext, useEffect } from "react";
import Head from "next/head";
import Header from "@/components/organisms/Header/Header";
import { HEADER_MENUS } from "api/mockdata/header";
import Footer from "@/components/organisms/Footer/Footer";
import { FOOTER_DATA, FOOTER_MENUS, SOCIAL_ICONS } from "api/mockdata/footer";
import { PageMeta } from "interfaces/page-meta";
import { AppContext } from "app-context/app-context";
import Script from "next/script";
import { Consent } from "@/components/molecules/consent/consent";

interface LayoutProps {
  children: ReactElement;
  meta?: PageMeta;
}
// use Router or other means to decide multiple layouts later.
// below is just the General Layout with header/ main/ footer.
export const Layout = ({ children, meta }: LayoutProps) => {
  const { setProp } = useContext(AppContext);
  useEffect(() => {
    setProp({ isMenuOpen: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children]);
  return (
    <div className={cn([styles.container, styles.general])}>
      <Head>
        <title>{meta?.title}</title>
        <meta name="description" content={meta?.description} />
      </Head>
      <div className={styles.headerDummy}>
        <header>
          <Header menuLinks={HEADER_MENUS} />
        </header>
      </div>

      <main>{children}</main>
      <footer>
        <Footer
          address={FOOTER_DATA.address}
          mail={FOOTER_DATA.mail}
          menuLinks={FOOTER_MENUS}
          socialsItems={SOCIAL_ICONS}
        />
      </footer>
    </div>
  );
};
