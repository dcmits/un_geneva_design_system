import fullWidthTwig from './full-width.twig';
import fixedContainerTwig from './fixed-container.twig';
import withSidebarTwig from './with-sidebar.twig';
import landingPageTwig from './landing-page.twig';
import homepageTwig from './homepage.twig';
import unSectionHero34Template from '../03-organisms/paragraphs/paragraph--un-section-hero-fs/paragraph--un-section-hero-fs.twig';

import mainMenu from '../02-molecules/menus/main-menu/main-menu.yml';
import socialMenu from '../02-molecules/menus/social/social-menu.yml';
import footerMenu from '../02-molecules/menus/inline/inline-menu.yml';
import brandbar from '../03-organisms/site/site-brandbar/site-brandbar.yml';
import footerData from '../03-organisms/site/site-footer/site-footer.yml';
import quicklinks from '../03-organisms/site/site-header/quicklinks.yml';
import linksContainerData from '../03-organisms/paragraphs/paragraph--links-container/paragraph--links-container.yml';
import sectionHeroFsData from '../03-organisms/paragraphs/paragraph--un-section-hero-fs/paragraph--un-section-hero-fs.yml';
import contentTitleData from '../01-atoms/text/headings/content-title.yml';
import landingPageData from './landing-page.yml';
import homepageData from './homepage.yml';
import focusOnData from '../03-organisms/focus-on/focus-on.yml';

import './layout';

/**
 * Storybook Definition.
 */
export default {
  title: 'Templates/Layouts',
  parameters: {
    layout: 'fullscreen',
  },
};

export const fullWidth = () =>
  fullWidthTwig({ ...mainMenu, ...socialMenu, ...footerMenu, ...brandbar, ...footerData, ...quicklinks });

export const fixedContainer = () =>
  fixedContainerTwig({ ...mainMenu, ...socialMenu, ...footerMenu, ...brandbar, ...footerData, ...quicklinks });

/*
export const withSidebar = () =>
  withSidebarTwig({ ...mainMenu, ...socialMenu, ...footerMenu, ...brandbar, ...footerData, ...quicklinks });
*/
export const landingPage = () =>
  landingPageTwig({ ...mainMenu, ...socialMenu, ...footerMenu, ...brandbar, ...footerData, ...quicklinks, ...landingPageData, ...linksContainerData, ...contentTitleData });

//export const UNSectionHeroFullScreen = () => unSectionHeroFSTemplate({content: unSectionHeroFSData.content, paragraph: unSectionHeroFSData.paragraph});

export const homepage = () =>
  homepageTwig({ ...mainMenu, ...socialMenu, ...footerMenu, ...brandbar, ...footerData, ...quicklinks, ...homepageData, ...linksContainerData, ...contentTitleData, ...homepageData, ...focusOnData });
