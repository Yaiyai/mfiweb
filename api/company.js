const apiURL = process.env.NEXT_PUBLIC_BASEURL;

export const getCompany = async () => {
	try {
		const resp = await fetch(`${apiURL}/companies`);
		if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
		const body = await resp.json();
		return body.company?.[0] ?? null;
	} catch (error) {
		console.error('Error getting company:', error);
		return null;
	}
};
