import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useForm from '../../hook/useForm';
import { sendMessage } from '../../api/messages';
import emailjs from 'emailjs-com';

import Swal from 'sweetalert2';

const Contact = ({ data, company }) => {
	const { values, handleInputChange, resetForm } = useForm({ name: '', lastName: '', phone: '', email: '', subject: '', message: '' });
	const form = useRef();

	useEffect(() => {
		console.log(data);
	}, []);
	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm('bratic_contact', 'template_messages', form.current, 'user_ktgYq5LuGt8HgLfoJW8MI')
			.then((result) => {
				sendMessage(values);
				resetForm();
				Object.keys(values).forEach((v) => (values[v] = ''));
			})
			.catch((error) => {
				Swal.fire({
					title: '¡Oh-Oh',
					html: 'Ha habido un error en el envío de la consulta, inténtalo de nuevo :)',
					confirmButtonText: 'Cerrar',
				});
			});
	};

	return (
		<section id='contacta'>
			<div className='mfi-container'>
				<h2>{data?.title}</h2>
				<div className='fix'>
					<div className='left'>
						<form ref={form}>
							<input type='hidden' name='receptor' value='correo@mfi.es' />
							{/* <input type='hidden' name='receptor' value='ydelrio@bratic.es' /> */}
							<input type='hidden' name='link' value='https://cms.mfi.es/mfi/mensajes' />
							<input type='hidden' name='web' value='MFi' />
							<input type='hidden' name='subject' value='Hay un mensaje nuevo en el gestor de contenido de Mfi.' />
						</form>
						<form onSubmit={sendEmail}>
							<div className='input-group double'>
								<input type='text' name='name' placeholder='Nombre*' onChange={handleInputChange} value={values?.name} required />
								<input type='text' name='lastName' placeholder='Apellidos' onChange={handleInputChange} value={values?.lastName} />
							</div>
							<div className='input-group double'>
								<input type='phone' name='phone' placeholder='Teléfono de contacto*' onChange={handleInputChange} required value={values?.phone} />
								<input type='email' name='email' placeholder='Correo electrónico*' onChange={handleInputChange} required value={values?.email} />
							</div>
							<div className='input-group'>
								<input type='text' name='subject' placeholder='Asunto del mensaje*' onChange={handleInputChange} required value={values?.subject} />
							</div>
							<div className='input-group text-area'>
								<textarea name='message' placeholder='Mensaje' onChange={handleInputChange} value={values?.message} />
							</div>

							<div className='small' dangerouslySetInnerHTML={{ __html: data?.text }}></div>
							<div className='submit-group'>
								<div className='checkbox'>
									<input type='checkbox' name='checkbox' id='check' required />
									<label htmlFor='check'>
										He leído y acepto la{' '}
										<Link legacyBehavior href={'/politica'}>
											<a>política de privacidad</a>
										</Link>
									</label>
								</div>
								<button className='my-btn primary' type='submit'>
									Enviar{' '}
								</button>
							</div>
						</form>
					</div>
					<div className='right'>
						<div className='image-fix'>
							<Image src={data?.uniqueImage} className='image' fill alt='Localizacion de MFi' />
						</div>
						<div className='companies'>
							<div className='company-info'>
								<p>
									<strong>Tienda & Atención al cliente</strong>
								</p>
								<p>Email: {company.mainEmail}</p>
								<p>Teléfono: {company.phone}</p>
								<p>Dirección: {company.address}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
