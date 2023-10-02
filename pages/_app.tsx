import React from 'react';
import NProgress from 'nprogress';
import Router from 'next/router';
import Head from 'next/head';
import { AppProps } from 'next/app';
import HomePage from './home';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import '../styles.css';

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    Router.events.on('routeChangeStart', () => {
      NProgress.start();
    });

    Router.events.on('routeChangeComplete', () => {
      NProgress.done();
    });

    Router.events.on('routeChangeError', () => {
      NProgress.done();
    });
  }, []);

  return (
    <>
      <Head>
        <title>Plantilla Next.js | Avila Tek</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <HomePage />
      <Footer />
    </>
  );
}

export default MyApp;
