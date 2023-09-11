import footerTwig from './site-footer/site-footer.twig';
import siteHeader from './site-header/site-header.twig';
import siteBrandbar from './site-brandbar/site-brandbar.twig';
import pageLastUpdateTwig from './page-last-update/page-last-update.twig';

import footerSocial from '../../02-molecules/menus/social/social-menu.yml';
import footerMenu from '../../02-molecules/menus/inline/inline-menu.yml';
// import breadcrumbData from '../../02-molecules/menus/breadcrumbs/breadcrumbs.yml';
import mainMenuData from '../../02-molecules/menus/main-menu/main-menu.yml';
import brandbarData from './site-brandbar/site-brandbar.yml';
import footerData from './site-footer/site-footer.yml';
import quicklinks from './site-header/quicklinks.yml';
import pageLastUpdateData from './page-last-update/page-last-update.yml';

import '../../02-molecules/menus/main-menu/main-menu';

/**
 * Storybook Definition.
 */
export default {
  title: 'Organisms/Site',
  parameters: {
    layout: 'fullscreen',
  },
};

export const footer = () => footerTwig({ ...footerSocial, ...footerMenu, ...footerData });

export const header = () =>
  siteHeader({
    ...mainMenuData,
    ...quicklinks,
  });

export const brandbar = () => siteBrandbar(brandbarData);
export const pageLastUpdate = () => pageLastUpdateTwig(pageLastUpdateData);
