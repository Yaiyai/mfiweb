import nextVitals from 'eslint-config-next/core-web-vitals';

const config = [
	...nextVitals,
	{
		rules: {
			// Image sizes come from the CMS and the layout relies on CSS sizing; migrating needs visual QA.
			'@next/next/no-img-element': 'off',
		},
	},
	{ ignores: ['build/**', '.next/**'] },
];

export default config;
