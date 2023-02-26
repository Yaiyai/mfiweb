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
	const handleComplete = () => {
		setLoading(false);
	};
	const handleStart = () => {
		setLoading(true);
	};

	useEffect(() => {
		const bodyContainer = document.querySelector('body');
		router.events.on('routeChangeStart', handleStart);
		router.events.on('routeChangeComplete', handleComplete);
		router.events.on('routeChangeError', handleComplete);
		if (loading) {
			bodyContainer?.classList.add('no-scroll');
		} else {
			bodyContainer?.classList.remove('no-scroll');
		}
	}, [router, loading]);

	return (
		<CompanyContext.Provider value={{ companyFetched }}>
			<MfiLayout>
				<Loader loading={loading} />
				<Component {...pageProps} />
			</MfiLayout>
		</CompanyContext.Provider>
	);
}
