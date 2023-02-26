const apiURL = process.env.NEXT_PUBLIC_BASEURL;

export const getSection = async (id) => {
	try {
		let resp = await fetch(`${apiURL}/sections/${id}`);
		let body = await resp.json();
		return body.section;
	} catch (error) {
		console.error(`Error getting section w/ id ${id}:`, error);
	}
};
