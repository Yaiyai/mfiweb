import React, { useState } from 'react';
import { FaFacebook, FaLaptop, FaLinkedin } from 'react-icons/fa';

const HeaderHome = ({ data, secondBlock }) => {
	const [features, setFeatures] = useState([secondBlock?.features]);
	const style = { '--feats': secondBlock?.features?.length };
	const list = secondBlock?.features.map((feat) => (
		<article className='each-feat' key={'feature-' + feat} style={style}>
			<FaLaptop />
			<p className='feat-title'>{feat}</p>
		</article>
	));

	return (
		<header>
			<div className='header-text mfi-container'>
				<h1 className='center'>{data?.title}</h1>
				<h2 className='center'>{data?.subtitle}</h2>
			</div>
			<a id='nosotros'></a>
			<div className='first-block'>
				<figure>
					<img src={data?.uniqueImage} alt='MFi' />
				</figure>
				<div className='text-block'>
					<div className='first-text'>
						<div className='white' dangerouslySetInnerHTML={{ __html: data?.text }}></div>
					</div>
					<div className='second-text'>
						<p className='subtitle'>{secondBlock?.subtitle}</p>
						<h2>{secondBlock?.title}</h2>
						<div dangerouslySetInnerHTML={{ __html: secondBlock?.text }}></div>
					</div>
				</div>
			</div>
			<div className='features'>
				<div className='mfi-container'>{list}</div>
			</div>
		</header>
	);
};

export default HeaderHome;
