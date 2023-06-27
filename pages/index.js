import Head from 'next/head';
import { getCompany } from '../api/company';
import { getSection } from '../api/sections';
import HeaderHome from '../components/home/HeaderHome/HeaderHome';
import SecondBlock from '../components/home/SecondBlock/SecondBlock';
import ThirdBlock from '@/components/home/ThirdBlock/ThirdBlock';

// import Image from 'next/image'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export default function Home({ headerHome, secondBlock, thirdBlock, servicesBlock }) {
	return (
		<>
			<Head>
				<title>MFi</title>
				<meta name='description' content='Mediavilla Fernández Informática' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta name='description' content='MFi Servicios informáticos' />

				<meta name='robots' content='index, follow' />
				<meta name='googlebot' content='index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' />
				<meta name='bingbot' content='index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' />

				<meta property='og:title' content='MFi || Servicios Informáticos' />
				<meta property='og:type' content='website' />
				<meta property='og:image' content='https://res.cloudinary.com/mfi-app/image/upload/v1652716405/web/lpopzf8n1bkjxst5dc4e.png' />
				<meta property='og:url' content=' http://www.mfi.es/' />
				<link rel='canonical' href='http://www.mfi.es/'></link>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<HeaderHome data={headerHome} secondBlock={secondBlock} />

				<a id='nosotros'></a>
				<SecondBlock data={thirdBlock} />

				<a id='servicios'></a>
				<ThirdBlock data={servicesBlock} />
			</main>
		</>
	);
}
export const getStaticProps = async () => {
	const [companyFetched, headerHome, secondBlock, thirdBlock, servicesBlock] = await Promise.all([
		getCompany(),
		getSection('63fb3c9740485000141a4850'),
		getSection('63fb3cf140485000141a4855'),
		getSection('63fb3e7640485000141a485d'),
		getSection('63fb403e40485000141a4861'),
	]);
	return { props: { companyFetched, headerHome, secondBlock, thirdBlock, servicesBlock } };
};
