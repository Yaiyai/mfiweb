import Head from 'next/head';
import { getCompany } from '../api/company';
import { getSection } from '../api/sections';

import { useEffect } from 'react';

export default function Subvenciones({ subvenciones }) {
	useEffect(() => {
		console.log(subvenciones);
	}, []);

	return (
		<>
			<Head>
				<meta name='description' content='Subvenciones MFi' />

				<meta name='robots' content='noindex, nofollow' />
				<meta name='googlebot' content='noindex, nofollow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' />
				<meta name='bingbot' content='noindex, nofollow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' />

				<meta property='og:title' content='MFi || Subvenciones' />
				<meta property='og:type' content='website' />
				<meta property='og:image' content='https://res.cloudinary.com/mfi-app/image/upload/v1652716405/web/lpopzf8n1bkjxst5dc4e.png' />
				<meta property='og:url' content=' http://www.mfi.es/subvenciones' />
				<meta property='og:description' content='Subvenciones MFi' />
				<link rel='canonical' href='http://www.mfi.es/subvenciones'></link>

				<title>Mediavilla Fernández Informática</title>
			</Head>
			<main className='mfi-container subvenciones'>
				<h1>{subvenciones?.title}</h1>
				<div className='all-subvs container'>
					{subvenciones?.gallery.map((elm) => (
						<figure key={elm} className='each-subv'>
							<img src={elm} alt='' />
						</figure>
					))}
				</div>
			</main>
		</>
	);
}

export const getStaticProps = async () => {
	const [companyFetched, subvenciones] = await Promise.all([getCompany(), getSection('6493475a40485000141a4984')]);
	return { props: { companyFetched, subvenciones } };
};
