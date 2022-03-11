import React from 'react';

import Icon from '../Icon/Icon';

import cn from 'classnames';

import styles from './HamburgerButton.module.scss';

interface Props {
    className?: string;
    onClick: () => void;
    isActive: boolean;
}

const HamburgerButton = ({ className = '', onClick, isActive }: Props) => {
    const buttonClassNames = cn({
        [styles.button]: true,
        [className]: className,
        [styles.active]: isActive,
    });
    return (
        <button type='button' onClick={onClick} className={buttonClassNames}>
            <Icon icon='menu' className={styles.icon} />
            <Icon icon='cross' className={styles.icon} />
        </button>
    );
};

export default HamburgerButton;
