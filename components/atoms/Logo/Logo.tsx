import React from 'react';

import Link from 'next/link';
import cn from 'classnames';

import Icon from '../Icon/Icon';

import styles from './Logo.module.scss';

interface Props {
    className?: string;
}

const Logo = ({ className = '' }: Props) => {
    const logoClassNames = cn({
        [styles.logo]: true,
        [className]: className,
    });
    return (
        <Link href='/'>
            <a className={logoClassNames}>
                <Icon icon='logo' className={styles.logoImage} />
            </a>
        </Link>
    );
};

export default Logo;
