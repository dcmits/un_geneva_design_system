import unSectionHero34Template from './paragraph--un-section-hero-3-4.twig';

import unSectionHero34Data from './paragraph--un-section-hero-3-4.yml';

/**
 * Storybook Definition.
 */
export default { 
  title: 'Organisms/Paragraphs',
  argTypes: {
    // This defines a "Variation" argument that can be used in components.
    contentOrientation: {
      control: {
        type: 'select',
        options: ['', 'top left', 'top center', 'top right', 'middle left', 'middle center', 'middle right', 'bottom left', 'bottom center', 'bottom right'],
      },
    },
    vignette: {
      control: {
        type: 'select',
        options: ['', 'vignette-top', 'vignette-bottom', 'vignette-full', 'silk-screen'],
      },
    },
    contentStyle: {
      control: {
        type: 'select',
        options: ['', 'light', 'dark'],
      },
    },
  },
};

export const UNSectionHeroThreeQuarters = ({contentOrientation, vignette, contentStyle }) => unSectionHero34Template({content: unSectionHero34Data.content, paragraph: unSectionHero34Data.paragraph, modifiers: {contentOrientation: contentOrientation, vignette: vignette, contentStyle: contentStyle}});
