import Button from '@/components/ui/Button/Button';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaArrowRight, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Desktop = ({ company }) => {
	const [active, setActive] = useState('home');
	return (
		<article className='desktop-nav'>
			<ul className='normal'>
				<li>
					<Link href='/' className='name-logo' onClick={() => setActive('home')}>
						MFi Informáticos
					</Link>
				</li>
				<div className='line'></div>
				<li>
					<Link href='/#nosotros' className={active === 'home' ? 'active' : null} onClick={() => setActive('home')}>
						Nosotros
					</Link>
				</li>
				<li>
					<a href='/#servicios' className={active === 'servicios' ? 'active' : null} onClick={() => setActive('servicios')}>
						{' '}
						Servicios&Partners
					</a>
				</li>
			</ul>
			<ul className='important'>
				<li>
					<Link className='contact' href='/#contacto'>
						{' '}
						Contacto{' '}
					</Link>
				</li>
				<a href={company?.companyFetched?.linkedin} className='rrss-icon' target='new'>
					<FaLinkedin />
				</a>
				{/* <a href={company?.companyFetched?.facebook} className='rrss-icon' target='new'>
					<FaFacebook />
				</a> */}
				<div className='line'></div>
				<a className='my-btn' href='https://www.nanosystems.it/public/download/Supremo.exe'>
					Soporte Técnico Remoto
					<FaArrowRight />
				</a>
			</ul>
		</article>
	);
};

export default Desktop;
