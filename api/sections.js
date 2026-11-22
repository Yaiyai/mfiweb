import { cleanHtml } from '../helpers/sanitizeHtml';

const apiURL = process.env.NEXT_PUBLIC_BASEURL;

// The CMS returns rich text as HTML; sanitize it once on the server before it reaches dangerouslySetInnerHTML.
const sanitizeSection = (section) => {
	if (!section) return null;
	return {
		...section,
		text: cleanHtml(section.text),
		...(section.parsedText ? { parsedText: { __html: cleanHtml(section.parsedText.__html) } } : {}),
	};
};

export const getSection = async (id) => {
	try {
		const resp = await fetch(`${apiURL}/sections/${id}`);
		if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
		const body = await resp.json();
		return sanitizeSection(body.section);
	} catch (error) {
		console.error(`Error getting section w/ id ${id}:`, error);
		return null;
	}
};
