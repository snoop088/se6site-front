import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import HamburgerButton from "@/components/atoms/HamburgerButton/HamburgerButton";

import cn from "classnames";
import styles from "./HeaderMenu.module.scss";
import { MenuLink } from "interfaces/menu-link";
import { ActivatedLink } from "../activated-link/activated-link";
import { AppContext } from "app-context/app-context";

interface Props {
  links: MenuLink[];
}

const HeaderMenu = ({ links }: Props) => {
  const { data, setProp } = useContext(AppContext);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // useEffect(() => {
  //   return () => setProp({ isMenuOpen: false });
  // }, []);

  const clickHandler = () => {
    setProp({ isMenuOpen: !data.isMenuOpen });
  };

  const navClassNames = cn({
    [styles.nav]: true,
    [styles.active]: data.isMenuOpen,
  });

  return (
    <div className={styles.menu}>
      <HamburgerButton
        className={styles.hamburger}
        onClick={clickHandler}
        isActive={data.isMenuOpen}
      />
      <nav className={navClassNames}>
        {links.map((link, index) => {
          const linkClassNames = cn({
            [styles.link]: true,
            [styles.cta]: link.isCta,
          });
          return (
            <ActivatedLink
              href={link.href}
              key={index}
              activeStyle={styles.active}
            >
              <a className={linkClassNames}>{link.title}</a>
            </ActivatedLink>
          );
        })}
      </nav>
    </div>
  );
};

export default HeaderMenu;
