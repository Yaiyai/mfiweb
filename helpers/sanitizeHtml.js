import sanitizeHtml from 'sanitize-html';

const options = {
	allowedTags: [...sanitizeHtml.defaults.allowedTags, 'img', 'h1', 'h2', 'span', 'u', 's'],
	allowedAttributes: {
		a: ['href', 'name', 'target', 'rel'],
		img: ['src', 'alt', 'width', 'height'],
		'*': ['class', 'style'],
	},
	allowedStyles: {
		'*': {
			'text-align': [/^(left|right|center|justify)$/],
			color: [/^#[0-9a-f]{3,8}$/i, /^rgb\(/i],
		},
	},
	allowedSchemes: ['http', 'https', 'mailto', 'tel'],
	transformTags: {
		a: (tagName, attribs) =>
			attribs.target === '_blank' ? { tagName, attribs: { ...attribs, rel: 'noopener noreferrer' } } : { tagName, attribs },
	},
};

export const cleanHtml = (html) => (typeof html === 'string' ? sanitizeHtml(html, options) : html);
