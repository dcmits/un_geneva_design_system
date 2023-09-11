import link from './link.twig';

import linkData from './link.yml';
import linkDarkData from './link--dark.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Links' };

export const links = () => link(linkData);
export const links2 = () => link(linkDarkData);
