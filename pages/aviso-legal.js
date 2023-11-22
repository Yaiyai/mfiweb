import Head from 'next/head';
import { getCompany } from '../api/company';
import { getSection } from '../api/sections';

export default function AvisoLegal({ aviso }) {
	return (
		<>
			<Head>
				<meta name='robots' content='noindex, nofollow' />
				<meta name='googlebot' content='noindex, nofollow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' />
				<meta name='bingbot' content='noindex, nofollow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' />

				<title>MFi</title>
			</Head>
			<main className='mfi-container legal'>
				<h1>{aviso?.title}</h1>

				<div className='post-text' dangerouslySetInnerHTML={aviso?.parsedText}></div>
			</main>
		</>
	);
}

export const getStaticProps = async () => {
	const [companyFetched, aviso] = await Promise.all([getCompany(), getSection('655e4d9098ab6c0014b2a147')]);
	return { props: { companyFetched, aviso } };
};
