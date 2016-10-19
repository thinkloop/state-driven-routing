import React from 'react';
import classnames from 'classnames';

import SiteHeader from './site-header';

const AccountPage = (p) => (
	<div className={ classnames('page', p.className) }>
		<SiteHeader { ...p.siteHeader } />

		<main className="page-content">
			<p>
				Account
			</p>
		</main>
	</div>
);

AccountPage.propTypes = {
	className: React.PropTypes.string,
	siteHeader: React.PropTypes.object
};

export default AccountPage;
