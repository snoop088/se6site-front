import React from 'react';
import Head from 'next/head';

import Header from '@/components/organisms/Header/Header';
import Footer from '@/components/organisms/Footer/Footer';

import styles from './MainContainer.module.scss';

interface Props {
    children: React.ReactNode;
    metaDescription: string;
}

const MainContainer = ({ children, metaDescription }: Props) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name='description' content={metaDescription} />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Header
                menuLinks={[
                    {
                        title: 'FEATURES',
                        href: '/features',
                    },
                    {
                        title: 'CASE STUDIES',
                        href: '/case-studies',
                    },
                    {
                        title: 'SHOWCASE',
                        href: '/showcase',
                    },
                    {
                        title: 'PRICING',
                        href: '/pricing',
                    },
                    {
                        title: 'ABOUT',
                        href: '/about',
                    },
                    {
                        title: 'BLOG',
                        href: '/blog',
                    },
                    {
                        title: 'GET IN TOUCH',
                        href: '/get-in-touch',
                        isCta: true,
                    },
                ]}
            />
            <main className={styles.main}>{children}</main>
            <Footer
                menuLinks={[
                    {
                        title: 'FEATURES',
                        href: '/features',
                    },
                    {
                        title: 'CASE STUDIES',
                        href: '/case-studies',
                    },
                    {
                        title: 'SHOWCASE',
                        href: '/showcase',
                    },
                    {
                        title: 'PRICING',
                        href: '/pricing',
                    },
                    {
                        title: 'ABOUT',
                        href: '/about',
                    },
                    {
                        title: 'BLOG',
                        href: '/blog',
                    },
                ]}
                socialsItems={[
                    {
                        title: 'instagram',
                        icon: 'button-arrow',
                        href: 'https://www.instagram.com/',
                    },
                    {
                        title: 'youtube',
                        icon: 'button-arrow',
                        href: 'https://www.youtube.com/',
                    },
                    {
                        title: 'linkedin',
                        icon: 'button-arrow',
                        href: 'https://www.linkedin.com/',
                    },
                    {
                        title: 'facebook',
                        icon: 'button-arrow',
                        href: 'https://www.facebook.com/',
                    },
                ]}
                address='19, Alexander Dondukov Street, Sofia 1000, Bulgaria'
                mail='hello@streameye.com'
            />
        </div>
    );
};

export default MainContainer;
