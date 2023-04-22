import React from 'react';
import Head from 'next/head';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import { CompanyContext } from '../context/CompanyContext';
import { useContext } from 'react';

const MfiLayout = (props) => {
	const { children } = props;
	const companyFetched = useContext(CompanyContext);
	return (
		<>
			<Head>
				<link rel='icon' href='/favicon.ico' />

				<meta name='copyright' content='mfi.es' />
				<meta name='author' content='yaidev.tech' />
				<meta property='og:locale' content='es'></meta>

				<meta name='keywords' content='' />
			</Head>
			<NavBar company={companyFetched} />
			<div className='false-nav'></div>
			<main>{children}</main>
			<Footer company={companyFetched} />
		</>
	);
};

export default MfiLayout;
