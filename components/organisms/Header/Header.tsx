import React, { useContext } from "react";

import Wrapper from "@/components/organisms/Wrapper/Wrapper";
import HeaderMenu from "@/components/molecules/HeaderMenu/HeaderMenu";
import Logo from "@/components/atoms/Logo/Logo";

import styles from "./Header.module.scss";
import { MenuLink } from "interfaces/menu-link";
import { AppContext } from "app-context/app-context";
interface Props {
  menuLinks: MenuLink[];
}

const Header = ({ menuLinks }: Props) => {
  const context = useContext(AppContext);
  return (
    <header className={styles.header}>
      <Wrapper className={styles.wrapper} isWide>
        <Logo className={styles.logo} />
        <HeaderMenu links={menuLinks} />
        {/* <button
          type="button"
          onClick={() => {
            console.log("wtf");
            context.setProp({ someStuff: "Pencho" });
          }}
        >
          change context
        </button> */}
      </Wrapper>
    </header>
  );
};

export default Header;
