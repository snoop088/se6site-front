import React from 'react';
import cn from 'classnames';

import styles from './Wrapper.module.scss';

interface Props {
    children: React.ReactNode;
    className?: string;
    isWide?: boolean;
}

const Wrapper = ({ children, className = '', isWide }: Props) => {
    const wrapperClassNames = cn({
        [styles.wrapper]: true,
        [styles.wide]: isWide,
        [className]: className,
    });
    return <div className={wrapperClassNames}>{children}</div>;
};

export default Wrapper;
