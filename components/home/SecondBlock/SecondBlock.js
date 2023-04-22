import Button from '@/components/ui/Button/Button';
import React, { useEffect } from 'react';

const SecondBlock = ({ data }) => {
	useEffect(() => {
		console.log(data);
	}, []);

	return (
		<section className='tienda'>
			<div className='left'>
				<figure>
					<img src={data?.uniqueImage} alt='MFi Tienda' />
				</figure>
			</div>
			<div className='right'>
				<h2 className='white'> {data?.title} </h2>
				<div className='white' dangerouslySetInnerHTML={{ __html: data?.text }}></div>
				<div className='store-feat'>
					<div className='each-store-feat'>
						<figure>
							<img src='https://res.cloudinary.com/mfi-app/image/upload/v1682157007/web/store.png' alt='MFi Tienda' />
						</figure>
						<p>{data?.features[0]}</p>
					</div>
					<div className='each-store-feat'>
						<figure>
							<img src='https://res.cloudinary.com/mfi-app/image/upload/v1682157007/web/online.png' alt='MFi Tienda Online' />
						</figure>
						<div className='fix'>
							<p>{data?.features[1]}</p>
							<Button type={'dark'} text='Ir' />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SecondBlock;
