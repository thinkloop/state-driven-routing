export const UPDATE_URL = 'UPDATE_URL';

export default function (newURL) {
	return (dispatch, getState) => {
		const { url } = getState();
		if (newURL === url) {
			return;
		}

		dispatch({
			type: UPDATE_URL,
			parsedURL: parseURL(newURL)
		});
	};
}

function parseURL(url) {
	const splitURL = url.split('?');
	let path = splitURL[0].replace(/[/]+/g, '/');
	let searchParams = {};

	// make sure there isn't a trailing slash, except for home being a single slash: '/'
	if (path.length >= 2) {
		path = path.replace(/\/$/, '');
	}
	else {
		path = '/';
	}

	if (splitURL.length >= 2) {
		searchParams = parseSearchParams(splitURL[1]);
	}

	const finalURL = path + joinSearchParams(searchParams);

	return {
		path,
		searchParams,
		url: finalURL
	};
}

function parseSearchParams(searchString) {
	let pairSplit;
	return (searchString || '').replace(/^\?/, '').split('&').reduce((p, pair) => {
		pairSplit = pair.split('=');
		if (pairSplit.length >= 1 && pairSplit[0].length >= 1) {
			p[decodeURIComponent(pairSplit[0])] = decodeURIComponent(pairSplit[1]) || '';
		}
		return p;
	}, {});
}

function joinSearchParams(searchParams) {
	let searchString = Object.keys(searchParams).reduce((p, paramKey) => p += `&${paramKey}=${searchParams[paramKey]}`, '?');

	if (searchString.length <= 1) {
		return '';
	}

	return searchString.replace('?&', '?');
}
