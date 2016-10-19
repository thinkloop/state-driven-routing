import { UPDATE_URL } from '../../site/actions/update-url';

import { HOME } from '../../site/constants/sections';
import { PATHS_SECTIONS } from '../../site/constants/paths';

export default function (selectedSection = HOME, action) {
	switch (action.type) {

	case UPDATE_URL:
		return PATHS_SECTIONS[action.parsedURL.path] || HOME;

	default:
		return selectedSection;
	}
}
