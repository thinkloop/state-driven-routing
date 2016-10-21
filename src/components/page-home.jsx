import React from 'react';
import classnames from 'classnames';

import SiteHeader from './site-header';
import Items from './items';

const HomePage = (p) => (
	<div className={ classnames('page', p.className) }>
		<SiteHeader { ...p.siteHeader } />

		<main className="page-content">
			<Items items={ p.items } />
		</main>

		<footer>
			<em>open the console while clicking</em>
		</footer>
	</div>
);

HomePage.propTypes = {
	className: React.PropTypes.string,
	siteHeader: React.PropTypes.object,
	items: React.PropTypes.array,
};

export default HomePage;
