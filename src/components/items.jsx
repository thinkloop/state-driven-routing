import React from 'react';
import classnames from 'classnames';

import Link from 'link-react';

const Items = (p) => (
	<ul className={ classnames('items', p.className) }>
		{ !!p.items && p.items.map(item => (
			<li key={ item.id }>
				<Link
					className={ classnames({ selected: item.isSelected }) }
					href={ item.href }
					onClick={ item.onClick }>
						{ item.label }
				</Link>
			</li>
		))}
	</ul>
);

Items.propTypes = {
	className: React.PropTypes.string,
	items: React.PropTypes.arrayOf(React.PropTypes.shape({
		id: React.PropTypes.string,
		label: React.PropTypes.string,
		href: React.PropTypes.string,
		isSelected: React.PropTypes.bool,
		onClick: React.PropTypes.func
	}))
};

export default Items;
