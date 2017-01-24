'format es6';
'use strict';

import $ from 'jquery';

const SNIPPET_SELECTOR = '[data-share-snippet]';
const SNIPPET_DATA_SELECTOR = '[data-share]';
const SNIPPET_ID_DATA = 'snippet-id';
const EVENT_NAMESPACE = 'lagrange';

function createSnippet(snippet) {
	const _snippet = $(snippet);
	const data = JSON.parse($(SNIPPET_DATA_SELECTOR).filter(`[data-${SNIPPET_ID_DATA}="_snippet.data(${SNIPPET_ID_DATA})"]`).html());

	const facebookBtn = $('[data-facebook]', _snippet);
	const twitterBtn = $('[data-twitter]', _snippet);
	const linkedinBtn = $('[data-linkedin]', _snippet);

	facebookBtn.on(`click.${EVENT_NAMESPACE}.share_snippet`, (e) => {
		e.preventDefault();

		window.FB.ui({
			method: 'feed',
			link: data.url,
			caption: data.caption,
			name: data.name,
			picture: data.picture,
			description: data.description,
		});
	});

	twitterBtn.on(`click.${EVENT_NAMESPACE}.share_snippet`, (e) => {
		e.preventDefault();

		const twitterText = data.twitter || data.description;
		const url = `https://twitter.com/intent/tweet/?url=${encodeURI(data.url)}&text=${encodeURIComponent(twitterText)}`;
		window.open(url, 'Partager', 'width=560,height=250');
	});

	linkedinBtn.on(`click.${EVENT_NAMESPACE}.share_snippet`, (e) => {
		e.preventDefault();

		const url = `https://www.linkedin.com/cws/share?url=${data.url}`;
		window.open(url, 'Partager', 'width=520,height=570');
	});
}

export default {
	init() {
		$(SNIPPET_SELECTOR).each((i, snippet) => {
			createSnippet(snippet);
		});
	},
};
