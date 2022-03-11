import type { NextPage } from 'next';

import HomeTemplate from '@/components/templates/HomeTemplate/HomeTemplate';

const Home: NextPage = () => {
    return (
        <HomeTemplate
            metaDescription='Homepage'
            heroTitle='CREATE EYE - CATCHING ADS FOR ANY MARKETING CAMPAIGN IN NO TIME'
            heroButtonTitle='More info'
            heroButtonOnClick={() => {
                console.log('button clicked');
            }}
        />
    );
};

export default Home;
