import linkItemTemplate from './link-item.twig';

import linkItemData from './link-item.yml';
import linkItemIconData from './link-item~icon.yml';
import linkItemImageData from './link-item~image.yml';
import linkItemOrganizationData from './link-item~organization.yml';
import linkItemSideIconData from './link-item~side-icon.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Link items' };

export const linkItem = () => linkItemTemplate(linkItemData);
export const linkItemIcon = () => linkItemTemplate(linkItemIconData);
export const linkItemImage = () => linkItemTemplate(linkItemImageData);
export const linkItemOrganization = () => linkItemTemplate(linkItemOrganizationData);
export const linkItemSideIcon = () => linkItemTemplate(linkItemSideIconData);
