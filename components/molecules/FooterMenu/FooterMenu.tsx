import React from 'react';
import Link from 'next/link';
import cn from 'classnames';

import styles from './FooterMenu.module.scss';

interface Props {
    links: {
        href: string;
        title: string;
    }[];
    className?: string;
}

const FooterMenu = ({ links, className = '' }: Props) => {
    const navClassNames = cn({
        [styles.nav]: true,
        [className]: className,
    });
    return (
        <nav className={navClassNames}>
            {links.map((link, index) => {
                return (
                    <Link href={link.href} key={index}>
                        <a className={styles.link}>{link.title}</a>
                    </Link>
                );
            })}
        </nav>
    );
};

export default FooterMenu;
