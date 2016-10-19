import { HOME, ABOUT, ACCOUNT } from '../../site/constants/sections';

export const PATHS_SECTIONS = {
	'/': HOME,
	'/about': ABOUT,
	'/account': ACCOUNT
};
export const SECTIONS_PATHS = Object.keys(PATHS_SECTIONS).reduce((p, key) => { p[PATHS_SECTIONS[key]] = key; return p; }, {});

export const DEFAULT_PATH = '/';