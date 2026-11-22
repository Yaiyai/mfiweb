const ThirdBlock = ({ data }) => {
	const services = (data?.text ?? '').split('<p>((SERVICE))</p>').filter(Boolean);
	const sponsors = (data?.gallery ?? []).filter(Boolean);

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
								<img src='https://res.cloudinary.com/mfi-app/image/upload/v1682157007/web/services.png' alt='' loading='lazy' />
							</figure>
							<div className='service-content' dangerouslySetInnerHTML={{ __html: elm }}></div>
						</div>
					))}
				</div>
			)}
			{sponsors.length > 0 && (
				<div className='sponsors'>
					<div className='mfi-container'>
						<h2>Partners</h2>
						<div className='sponsor-grid'>
							{sponsors.map((elm) => (
								<figure key={elm}>
									<img src={elm} alt='Logotipo de partner de MFi' loading='lazy' />
								</figure>
							))}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ThirdBlock;
