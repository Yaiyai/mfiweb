import React from 'react';
import Head from 'next/head';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import { CompanyContext } from '../context/CompanyContext';
import { useContext } from 'react';
import CookieConsent from 'react-cookie-consent';

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
			<CookieConsent
				enableDeclineButton
				declineButtonText='Rechazar'
				location='bottom'
				buttonText='Aceptar'
				cookieName='mfi_cookie'
				style={{ background: '#f5f5f5', color: '#050652' }}
				buttonClasses='my-btn primary'
				declineButtonClasses='my-btn dark'
				expires={150}
			>
				<div className='mfi-container'>
					Esta página web utiliza cookies propias y de terceros para fines funcionales (permitir la navegación web), para optimizar la navegación y personalizarla según tus preferencias así como para
					mostrarte publicidad en base a tu perfil de navegación (p.e páginas visitadas). Si pulsas ACEPTAR, aceptas todas las cookies. Si pulsas RECHAZAR, rechazas todas las cookies. Si no pulsas
					ninguna opción no se utilizará ninguna cookie y volveremos a preguntarte cuando accedas de nuevo a la web.
				</div>
			</CookieConsent>
		</>
	);
};

export default MfiLayout;
