import { CompanyContext } from '@/context/CompanyContext';
import { useRouter } from 'next/router';

import '@/scss/global.scss';

import { useEffect, useState } from 'react';
import Loader from '@/components/ui/Loader/Loader';

import MfiLayout from '@/layout/MfiLayout';

export default function App({ Component, pageProps }) {
	const companyFetched = pageProps.companyFetched;
	const router = useRouter();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const handleStart = () => setLoading(true);
		const handleComplete = () => setLoading(false);
		router.events.on('routeChangeStart', handleStart);
		router.events.on('routeChangeComplete', handleComplete);
		router.events.on('routeChangeError', handleComplete);
		return () => {
			router.events.off('routeChangeStart', handleStart);
			router.events.off('routeChangeComplete', handleComplete);
			router.events.off('routeChangeError', handleComplete);
		};
	}, [router]);

	useEffect(() => {
		document.body.classList.toggle('no-scroll', loading);
	}, [loading]);

	return (
		<CompanyContext.Provider value={companyFetched ?? null}>
			<MfiLayout>
				<Loader loading={loading} />
				<Component {...pageProps} />
			</MfiLayout>
		</CompanyContext.Provider>
	);
}
