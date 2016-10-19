import { UPDATE_URL } from '../../site/actions/update-url';

import { HOME } from '../../site/constants/sections';
import { PATHS_SECTIONS } from '../../site/constants/paths';

const defaultItems = {
	'id1': {
		name: 'Item #1'
	},
	'id2': {
		name: 'Item #2'
	},
	'id3': {
		name: 'Item #3'
	}
};

export default function (items = defaultItems, action) {
	switch (action.type) {

	default:
		return items;
	}
}
