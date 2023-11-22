import Head from 'next/head';
import { getCompany } from '../api/company';
import { getSection } from '../api/sections';

export default function Politica({ politica }) {
	return (
		<>
			<Head>
				<meta name='robots' content='noindex, nofollow' />
				<meta name='googlebot' content='noindex, nofollow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' />
				<meta name='bingbot' content='noindex, nofollow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' />

				<title>MFi</title>
			</Head>
			<main className='mfi-container legal'>
				<h1>{politica?.title}</h1>

				<div className='post-text' dangerouslySetInnerHTML={politica?.parsedText}></div>
			</main>
		</>
	);
}

export const getStaticProps = async () => {
	const [companyFetched, politica] = await Promise.all([getCompany(), getSection('655e4afc98ab6c0014b2a131')]);
	return { props: { companyFetched, politica } };
};
