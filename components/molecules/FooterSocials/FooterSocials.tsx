import React from 'react';
import cn from 'classnames';

import Icon from '@/components/atoms/Icon/Icon';

import styles from './FooterSocials.module.scss';

interface Props {
    items: {
        href: string;
        title: string;
        icon: string;
    }[];
    className?: string;
}

const FooterSocials = ({ items, className = '' }: Props) => {
    const containerClassNames = cn({
        [styles.container]: true,
        [className]: className,
    });
    return (
        <div className={containerClassNames}>
            {items.map((item, index) => {
                return (
                    <a href={item.href} className={styles.link} key={index} aria-label={item.title} target='_blank' rel='noreferrer'>
                        <Icon icon={item.icon} className={styles.icon} />
                    </a>
                );
            })}
        </div>
    );
};

export default FooterSocials;
