import React from 'react';
import classnames from 'classnames';

import { HOME, ABOUT } from './constants/pages';

import Link from 'link-react';

const SiteHeader = (p) => (
	<header className={ classnames('site-header', p.className) }>
		<nav>
			{ !!p.links && p.links.map(link => (
				<Link
					key={ link.label }
					className={ classnames('link', { selected: link.isSelected }) }
					href={ link.href }
					onClick={ link.onClick }>
						{ link.label }
				</Link>
			))}
		</nav>
	</header>
);

SiteHeader.propTypes = {
	className: React.PropTypes.string,
	links: React.PropTypes.arrayOf(React.PropTypes.shape({
		label: React.PropTypes.string,
		href: React.PropTypes.string,
		isSelected: React.PropTypes.bool,
		onClick: React.PropTypes.func
	}))
};

export default SiteHeader;
