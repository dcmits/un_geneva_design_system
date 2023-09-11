import unSectionHeroTemplate from './paragraph--un-section-hero.twig';

import unSectionData from '../paragraph--un-section/paragraph--un-section.yml';

/**
 * Storybook Definition.
 */
export default { 
  title: 'Organisms/Paragraphs',
};

export const UNSectionHero = () => unSectionHeroTemplate(unSectionData);
