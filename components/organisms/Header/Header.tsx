import React from 'react';
import Link from 'next/link';

import Wrapper from '@/components/organisms/Wrapper/Wrapper';
import Icon from '@/components//atoms/Icon/Icon';
import HeaderMenu from '@/components/molecules/HeaderMenu/HeaderMenu';
import Logo from '@/components/atoms/Logo/Logo';

import styles from './Header.module.scss';
interface Props {
    menuLinks: {
        href: string;
        title: string;
        isCta?: boolean;
    }[];
}

const Header = ({ menuLinks }: Props) => {
    return (
        <header className={styles.header}>
            <Wrapper className={styles.wrapper} isWide>
                <Logo className={styles.logo} />
                <HeaderMenu links={menuLinks} />
            </Wrapper>
        </header>
    );
};

export default Header;
