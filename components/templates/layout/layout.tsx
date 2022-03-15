import styles from "./layout.module.scss";
import cn from "classnames";
import { ReactElement } from "react";
import Head from "next/head";
import Header from "@/components/organisms/Header/Header";
import { HEADER_MENUS } from "api/mockdata/header";
import Footer from "@/components/organisms/Footer/Footer";
import { FOOTER_DATA, FOOTER_MENUS, SOCIAL_ICONS } from "api/mockdata/footer";

interface LayoutProps {
  children: ReactElement;
  meta?: { description: string; title: string; keywords: string[] };
}
// use Router or other means to decide multiple layouts later.
// below is just the General Layout with header/ main/ footer.
export const Layout = ({ children, meta }: LayoutProps) => {
  return (
    <div className={cn([styles.container, styles.general])}>
      <Head>
        <title>{meta?.title}</title>
        <meta name="description" content={meta?.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Header menuLinks={HEADER_MENUS} />
      </header>
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
