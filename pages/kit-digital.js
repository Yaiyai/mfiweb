import Head from 'next/head';
import { getCompany } from '../api/company';
import { getSection } from '../api/sections';

export default function KitDigital({ kitDigital }) {
	return (
		<>
			<Head>
				<meta name='description' content='Kit Digital MFi' />

				<meta name='robots' content='index, follow' />
				<meta name='googlebot' content='index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' />
				<meta name='bingbot' content='index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' />

				<meta property='og:title' content='MFi || Kit Digital' />
				<meta property='og:type' content='website' />
				<meta property='og:image' content={kitDigital?.uniqueImage} />
				<meta property='og:url' content=' http://www.mfi.es/kit-digital' />
				<meta property='og:description' content='Kit Digital MFi' />
				<link rel='canonical' href='http://www.mfi.es/kit-digital'></link>

				<title>MFi</title>
			</Head>
			<main className='mfi-container legal'>
				<h1>{kitDigital?.title}</h1>
				<figure>
					<img src={kitDigital?.uniqueImage} alt='MFi Kit Digital' />
				</figure>
				<div className='post-text' dangerouslySetInnerHTML={kitDigital?.parsedText}></div>
			</main>
		</>
	);
}

export const getStaticProps = async () => {
	const [companyFetched, kitDigital] = await Promise.all([getCompany(), getSection('64933c2440485000141a493d')]);
	return { props: { companyFetched, kitDigital } };
};
