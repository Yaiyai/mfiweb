import React from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight, FaChevronRight } from 'react-icons/fa';

const Button = ({ link = false, type, text }) => {
	return (
		<>
			{type === 'primary' &&
				(link ? (
					<Link href={link}>
						{' '}
						{text} <FaArrowRight />{' '}
					</Link>
				) : (
					<button className='my-btn'>
						{text} <FaArrowRight />
					</button>
				))}
			{type === 'secondary' &&
				(link ? (
					<Link href={link} lassName='my-btn secondary'>
						{text} <FaArrowRight />
					</Link>
				) : (
					<button className='my-btn secondary'>
						{text} <FaArrowRight />
					</button>
				))}
			{type === 'dark' &&
				(link ? (
					<Link href={link} lassName='my-btn dark'>
						{text} <FaArrowRight />
					</Link>
				) : (
					<button className='my-btn dark'>
						{text} <FaArrowRight />
					</button>
				))}
			{type === 'outlined' &&
				(link ? (
					<Link href={link} lassName='my-btn outlined'>
						{text} <FaArrowRight />
					</Link>
				) : (
					<button className='my-btn outlined'>
						{text} <FaArrowRight />
					</button>
				))}
			{type === 'more' &&
				(link ? (
					<Link href={link} className='my-btn-more'>
						{' '}
						Saber más <FaArrowRight />{' '}
					</Link>
				) : (
					<button className='my-btn-more'>
						Saber más <FaArrowRight />
					</button>
				))}
		</>
	);
};

export default Button;
