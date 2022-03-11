import React from 'react';
import IcomoonReact from 'icomoon-react';
import iconSet from './selection.json';
import cn from 'classnames';

interface Props {
    icon: string;
    className?: string;
}

const Icon = ({ icon, className = '' }: Props) => {
    const iconClassNames = cn({
        icon: true,
        [className]: className,
    });
    return <IcomoonReact className={iconClassNames} iconSet={iconSet} icon={icon} />;
};

export default Icon;
