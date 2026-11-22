import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { FaArrowRight, FaLinkedin } from 'react-icons/fa';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Mobile = ({ company, menuHeight }) => {
	const [showMenu, setShowMenu] = useState(false);
	const subMenu = useRef();

	const manageNav = () => {
		setShowMenu(!showMenu);
		const bodyContainer = document.querySelector('body');
		bodyContainer.classList.toggle('no-scroll');
		subMenu.current.setAttribute('style', `top: ${menuHeight}px`);
	};

	const closeMenu = () => {
		setShowMenu(false);
	};

	return (
		<div className='mobile-nav'>
			{/* <Link href='/#contacto' onClick={closeMenu} className='contact-btn'>
				{' '}
				Contacto{' '}
			</Link> */}
			<button type='button' className='menu-toggle' aria-label={showMenu ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={showMenu} onClick={manageNav}>
				{showMenu ? <HiX className='menu-btn' /> : <HiMenuAlt3 className='menu-btn' />}
			</button>
			<div ref={subMenu} className={showMenu ? `sub-menu show` : 'sub-menu'}>
				<ul>
					<a className='my-btn' href='https://www.nanosystems.it/public/download/Supremo.exe'>
						Soporte Técnico Remoto
						<FaArrowRight />
					</a>
					<li>
						<Link href='/#nosotros'>
							<span onClick={closeMenu}>Nosotros</span>
						</Link>
					</li>
					<li>
						<Link href='/#servicios'>
							<span onClick={closeMenu}>Servicios</span>
						</Link>
					</li>
					<li>
						<a href={company?.linkedin} className='rrss-icon' target='_blank' rel='noopener noreferrer'>
							<FaLinkedin />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Mobile;
