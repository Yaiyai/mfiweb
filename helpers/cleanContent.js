export const cutContent = (content) => {
	let ending = '...';
	let regex = /(<([^>]+)>)/gi;
	let sanitized = content ? content.replace(regex, '') : '-';
	return sanitized.substring(0, 100) + ending;
};
