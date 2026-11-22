import Head from 'next/head';
import { getCompany } from '../api/company';
import { getSection } from '../api/sections';
import HeaderHome from '../components/home/HeaderHome/HeaderHome';
import SecondBlock from '../components/home/SecondBlock/SecondBlock';
import ThirdBlock from '@/components/home/ThirdBlock/ThirdBlock';
import Contact from '@/components/Contact/Contact';

export default function Home({ headerHome, secondBlock, thirdBlock, servicesBlock, contacta, companyFetched }) {
	return (
		<>
			<Head>
				<title>MFi | Servicios informáticos</title>
				<meta name='description' content='Mediavilla Fernández Informática' />

				<meta name='robots' content='index, follow' />
				<meta name='googlebot' content='index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' />
				<meta name='bingbot' content='index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' />

				<meta property='og:title' content='MFi || Servicios Informáticos' />
				<meta property='og:type' content='website' />
				<meta property='og:image' content='https://res.cloudinary.com/mfi-app/image/upload/v1652716405/web/lpopzf8n1bkjxst5dc4e.png' />
				<meta property='og:url' content='https://www.mfi.es/' />
				<link rel='canonical' href='https://www.mfi.es/'></link>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div>
				<HeaderHome data={headerHome} secondBlock={secondBlock} />

				<SecondBlock data={thirdBlock} />

				<a id='servicios'></a>
				<ThirdBlock data={servicesBlock} />
				<a id='contacto'></a>
				<Contact data={contacta} company={companyFetched} />
			</div>
		</>
	);
}
export const getStaticProps = async () => {
	const [companyFetched, headerHome, secondBlock, thirdBlock, servicesBlock, contacta] = await Promise.all([
		getCompany(),
		getSection('63fb3c9740485000141a4850'),
		getSection('63fb3cf140485000141a4855'),
		getSection('63fb3e7640485000141a485d'),
		getSection('63fb403e40485000141a4861'),
		getSection('655e420598ab6c0014b2a0cf'),
	]);
	return { props: { companyFetched, headerHome, secondBlock, thirdBlock, servicesBlock, contacta }, revalidate: 3600 };
};
