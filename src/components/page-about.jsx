import React from 'react';
import classnames from 'classnames';

import SiteHeader from './site-header';

const AboutPage = (p) => (
	<div className={ classnames('page', p.className) }>
		<SiteHeader { ...p.siteHeader } />

		<main className="page-content">
			<p>
				About
			</p>
		</main>
	</div>
);

AboutPage.propTypes = {
	className: React.PropTypes.string,
	siteHeader: React.PropTypes.object
};

export default AboutPage;
