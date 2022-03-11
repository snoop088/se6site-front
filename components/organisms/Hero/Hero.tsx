import React from 'react';

import Wrapper from '@/components/organisms/Wrapper/Wrapper';
import ButtonAndIcon from '@/components/molecules/ButtonAndIcon/ButtonAndIcon';

import styles from './Hero.module.scss';

interface Props {
    title: string;
    buttonTitle: string;
    buttonOnClick: () => void;
}

const Hero = ({ title, buttonTitle, buttonOnClick }: Props) => {
    return (
        <div className={styles.container}>
            <Wrapper className={styles.wrapper}>
                <h1 className={styles.title}>{title}</h1>
                <ButtonAndIcon title={buttonTitle} onClick={buttonOnClick} />
            </Wrapper>
        </div>
    );
};

export default Hero;
