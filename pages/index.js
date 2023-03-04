import Head from 'next/head';
import { getCompany } from '../api/company';
import { getSection } from '../api/sections';

// import Image from 'next/image'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<>
			<Head>
				<title>Mediavilla Fernández Informática</title>
				<meta name='description' content='Mediavilla Fernández Informática' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main></main>
		</>
	);
}
export const getStaticProps = async () => {
	const [companyFetched] = await Promise.all([
		getCompany(),
		// getSection('6069bd8c7844ac00158eedbf'),
	]);
	return { props: { companyFetched } };
};
