import unSectionTemplate from './paragraph--un-section.twig';

import unSectionData from './paragraph--un-section.yml';

/**
 * Storybook Definition.
 */
export default { 
  title: 'Organisms/Paragraphs',
};

export const UNSection = () => unSectionTemplate(unSectionData);
