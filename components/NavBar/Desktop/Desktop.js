import Link from 'next/link';
import React, { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';

const Desktop = ({ company }) => {
	const [active, setActive] = useState('home');
	return (
		<article className='desktop-nav'>
			<ul className='normal'>
				<li>
					<Link href='/#quienes-somos' className={active === 'home' ? 'active' : null} onClick={() => setActive('home')}>
						{' '}
						Quiénes Somos{' '}
					</Link>
				</li>
				<li>
					<Link href='/servicios' className={active === 'servicios' ? 'active' : null} onClick={() => setActive('servicios')}>
						{' '}
						Servicios{' '}
					</Link>
				</li>
			</ul>
			<ul className='important'>
				<li>
					<Link href='/#contacto'> Contacto </Link>
				</li>
				<a href={company?.companyFetched?.linkedin} className='rrss-icon' target='new'>
					<FaLinkedin />
				</a>
			</ul>
		</article>
	);
};

export default Desktop;
