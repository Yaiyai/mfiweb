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
				<title>Mediavilla Fernández Informática</title>
				<meta name='description' content='Mediavilla Fernández Informática' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<HeaderHome data={headerHome} secondBlock={secondBlock} />

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
