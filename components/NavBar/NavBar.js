import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import useWindowResize from '../../hook/useWindowResize';

import Desktop from './Desktop/Desktop';
import Mobile from './Mobile/Mobile';

const NavBar = ({ company }) => {
	const [theHeight, setHeight] = useState(0);
	const theNav = useRef(null);

	const size = useWindowResize();

	useEffect(() => {
		if (theNav.current) setHeight(theNav.current.clientHeight);
	}, [size]);

	// Both menus are rendered; CSS (see Desktop.scss / Mobile.scss) shows the right one,
	// so SSR output matches the client and there is no flash on load.
	return (
		<nav ref={theNav} className='main-nav'>
			<div className='mfi-container'>
				<Link href='/#inicio'>
					<figure className='logo'>
						<img src={company?.mainLogo} alt='MFi logo' />
					</figure>
				</Link>
				<Mobile company={company} menuHeight={theHeight} />
				<Desktop company={company} />
			</div>
		</nav>
	);
};

export default NavBar;
