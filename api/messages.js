export const sendMessage = async (message) => {
	const resp = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/messages`, {
		method: 'POST',
		headers: { 'Content-type': 'application/json' },
		body: JSON.stringify(message),
	});
	if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
};
