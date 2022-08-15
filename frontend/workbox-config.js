module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{png,html,json,txt}'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};