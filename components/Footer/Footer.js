import React from 'react';
import Link from 'next/link';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Footer = ({ company }) => {
	return (
		<footer>
			<article className='top'>
				<div className='mfi-container'>
					<nav className='down'>
						<div className='left'>
							<Link href='/'>
								<figure className='logo'>
									<img src={company?.mainLogo} alt='mfi Logo' />
								</figure>
							</Link>
							<ul className='footer-links'>
								<li>
									<Link href='/#nosotros'>Nosotros</Link>
								</li>
								<li>
									<Link href='/#servicios'>Servicios&Partners</Link>
								</li>
								<li>
									<Link href='/kit-digital'>Kit Digital</Link>
								</li>
								<li>
									<Link href='/subvenciones'>Subvenciones</Link>
								</li>
							</ul>
						</div>
						<div className='right'>
							<ul className='footer-links'>
								<li>
									<Link href='/politica'>Política de privacidad</Link>
								</li>
							</ul>
							<a href={company?.linkedin} className='rrss-icon' target='_blank' rel='noopener noreferrer'>
								<FaLinkedin />
							</a>
							<a href={`mailto:${company?.mainEmail}`} className='rrss-icon' target='_blank' rel='noopener noreferrer'>
								<FaEnvelope />
							</a>
						</div>
					</nav>
				</div>
			</article>
			<article className='bottom'>
				<div className='mfi-container'>
					<ul>
						<li>
							<Link href='/politica'>Política de Privacidad</Link>
						</li>
						<span>·</span>
						<li>
							<Link href='/aviso-legal'>Aviso Legal</Link>
						</li>
					</ul>
					<small>&copy; {company?.name}</small>
				</div>
			</article>
		</footer>
	);
};

export default Footer;
