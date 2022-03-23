import React, { useState } from "react";
import Link from "next/link";
import HamburgerButton from "@/components/atoms/HamburgerButton/HamburgerButton";

import cn from "classnames";
import styles from "./HeaderMenu.module.scss";
import { MenuLink } from "interfaces/menu-link";
import { ActivatedLink } from "../activated-link/activated-link";

interface Props {
  links: MenuLink[];
}

const HeaderMenu = ({ links }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const clickHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navClassNames = cn({
    [styles.nav]: true,
    [styles.active]: isMenuOpen,
  });

  return (
    <div className={styles.menu}>
      <HamburgerButton
        className={styles.hamburger}
        onClick={clickHandler}
        isActive={isMenuOpen}
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
