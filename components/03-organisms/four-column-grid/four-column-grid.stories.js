import unSectionFourColumnTemplate from './four-column-grid.twig';

import unSectionFourColumnData from './four-column-grid.yml';

/**
 * Storybook Definition.
 */
export default { 
  title: 'Organisms/Paragraphs',
};

export const UNSectionFourColumnGrid = () => unSectionFourColumnTemplate(unSectionFourColumnData);
