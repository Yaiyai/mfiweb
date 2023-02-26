import React, { useEffect, useRef, useState } from 'react';

const PageHeader = ({ title, bkg }) => {
	const animatedPageHeader = useRef();
	const [headerIsInView, setHeaderIsInView] = useState(false);

	useEffect(() => {
	}, []);

	let headerStyle = {
		backgroundImage: `url(${bkg})`,
	};

	return (
		<>
			<header>header</header>
		</>
	);
};

export default PageHeader;
