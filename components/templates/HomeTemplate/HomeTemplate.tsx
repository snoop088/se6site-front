import React from 'react';

import MainContainer from '@/components/organisms/MainContainer/MainContainer';
import Hero from '@/components/organisms/Hero/Hero';

interface Props {
    metaDescription: string;
    heroTitle: string;
    heroButtonTitle: string;
    heroButtonOnClick: () => void;
}

const HomeTemplate = ({ metaDescription, heroTitle, heroButtonTitle, heroButtonOnClick }: Props) => {
    return (
        <MainContainer metaDescription={metaDescription}>
            <Hero title={heroTitle} buttonTitle={heroButtonTitle} buttonOnClick={heroButtonOnClick} />
        </MainContainer>
    );
};

export default HomeTemplate;
