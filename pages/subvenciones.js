import Head from 'next/head';
import { getCompany } from '../api/company';
import { getSection } from '../api/sections';

export default function Subvenciones({ subvenciones }) {
	return (
		<>
			<Head>
				<meta name='description' content='Subvenciones MFi' />

				<meta name='robots' content='index, follow' />
				<meta name='googlebot' content='index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' />
				<meta name='bingbot' content='index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' />

				<meta property='og:title' content='MFi || Subvenciones' />
				<meta property='og:type' content='website' />
				<meta property='og:image' content='https://res.cloudinary.com/mfi-app/image/upload/v1652716405/web/lpopzf8n1bkjxst5dc4e.png' />
				<meta property='og:url' content='https://www.mfi.es/subvenciones' />
				<meta property='og:description' content='Subvenciones MFi' />
				<link rel='canonical' href='https://www.mfi.es/subvenciones'></link>

				<title>Subvenciones | MFi</title>
			</Head>
			<div className='mfi-container subvenciones'>
				<h1>{subvenciones?.title}</h1>
				<div className='all-subvs container'>
					{subvenciones?.gallery?.map((elm, i) => (
						<figure key={elm} className='each-subv'>
							<img src={elm} alt={`Subvención ${i + 1}`} loading='lazy' />
						</figure>
					))}
				</div>
			</div>
		</>
	);
}

export const getStaticProps = async () => {
	const [companyFetched, subvenciones] = await Promise.all([getCompany(), getSection('6493475a40485000141a4984')]);
	return { props: { companyFetched, subvenciones }, revalidate: 3600 };
};
