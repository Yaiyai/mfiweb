import React, { useEffect, useState } from 'react';

const ThirdBlock = ({ data }) => {
	const [services, setServices] = useState([]);
	useEffect(() => {
		console.log(data);
		let aux = data.text.split('<p>((SERVICE))</p>');

		aux = aux.filter((elm) => elm);
		setServices(aux);
	}, []);

	return (
		<div className='services'>
			<div className='title'>
				<h2>{data?.title}</h2>
			</div>
			{services.length > 0 && (
				<div className='services-grid mfi-container'>
					{services.map((elm) => (
						<div className='each-service' key={elm}>
							<figure>
								<img src='https://res.cloudinary.com/mfi-app/image/upload/v1682157007/web/services.png' alt='MFi Tienda' />
							</figure>
							<div className='service-content' dangerouslySetInnerHTML={{ __html: elm }}></div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default ThirdBlock;
