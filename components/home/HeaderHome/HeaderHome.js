import React, { useEffect } from 'react';

const HeaderHome = ({ data, secondBlock }) => {
	useEffect(() => {
		console.log(data);
	}, []);

	return (
		<header>
			<div className='header-text mfi-container'>
				<h1 className='center'>{data?.title}</h1>
				<h2 className='center'>{data?.subtitle}</h2>
			</div>
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
		</header>
	);
};

export default HeaderHome;
