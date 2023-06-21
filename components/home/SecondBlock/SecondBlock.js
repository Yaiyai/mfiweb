import Button from '@/components/ui/Button/Button';
import React from 'react';

const SecondBlock = ({ data }) => {
	return (
		<section className='tienda'>
			<div className='left'>
				<figure>
					<img src={data?.uniqueImage} alt='MFi Tienda' />
				</figure>
				<div className='quote'>
					<p>«Si su negocio no está en internet, su negocio no existe»</p>
					<p>Bill Gates</p>
					<Button type={'outlined'} text='Diseño Web' />
				</div>
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
							{/* <Button type={'dark'} text='Ir' /> */}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SecondBlock;
