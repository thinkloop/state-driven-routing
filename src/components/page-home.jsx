import React from 'react';
import classnames from 'classnames';

import SiteHeader from './site-header';

const HomePage = (p) => (
	<div className={ classnames('page', p.className) }>
		<SiteHeader { ...p.siteHeader } />

		<main className="page-content">
			<p>
				Home
			</p>
		</main>
	</div>
);

HomePage.propTypes = {
	className: React.PropTypes.string,
	siteHeader: React.PropTypes.object
};

export default HomePage;
