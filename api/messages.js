import Swal from 'sweetalert2';

export const sendMessage = (message) => {
	const apiURL = process.env.NEXT_PUBLIC_BASEURL;
	return fetch(`${apiURL}/messages`, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify(message),
	})
		.then((result) =>
			Swal.fire({
				title: '¡Gracias!',
				html: 'Tu consulta ha sido enviada',
				confirmButtonText: 'Cerrar',
			})
		)
		.catch((error) => {
			Swal.fire({
				title: '¡Oh-Oh',
				html: 'Ha habido un error en el envío de la consulta, inténtalo de nuevo :)',
				confirmButtonText: 'Cerrar',
			});
		});
};
