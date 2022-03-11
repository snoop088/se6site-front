import React from 'react';

import Icon from '@/components/atoms/Icon/Icon';

import styles from './ButtonAndIcon.module.scss';

interface Props {
    title: string;
    type?: 'button' | 'submit' | 'reset';
    icon?: string;
    onClick: () => void;
}

const ButtonAndIcon = ({ title, icon = 'button-arrow', onClick, type = 'button' }: Props) => {
    return (
        <button type={type} className={styles.button} onClick={onClick}>
            {title}
            <Icon icon={icon} className={styles.icon} />
        </button>
    );
};

export default ButtonAndIcon;
