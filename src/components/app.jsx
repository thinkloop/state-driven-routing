import React from 'react';
import { render } from 'react-dom';

import { HOME, ABOUT, ACCOUNT } from './constants/pages';

import HomePage from './page-home';
import AboutPage from './page-about';
import AccountPage from './page-account';

export default function (data, domElement) {
	let page;

	if (data.routing.url !== window.location.pathname + window.location.search) {
		window.history.pushState(null, null, data.routing.url);
	}
	document.title = data.routing.title;

	switch(data.selectedPage) {
	case ABOUT:
		page = <AboutPage
			className="about-page"
			siteHeader={ data.siteHeader }
		/>;
		break;

	case ACCOUNT:
		page = <AccountPage
			className="account-page"
			siteHeader={ data.siteHeader }
		/>;
		break;

	default:
		page = <HomePage
			className="home-page"
			siteHeader={ data.siteHeader }
			items={ data.items }
		/>;
		break;
	}

	render(page, domElement);
}

