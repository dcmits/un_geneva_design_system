import unSectionHeroFSTemplate from './paragraph--un-section-hero-fs.twig';

import unSectionHeroFSData from './paragraph--un-section-hero-fs.yml';

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

export const UNSectionHeroFullScreen = ({contentOrientation, vignette, contentStyle }) => unSectionHeroFSTemplate({content: unSectionHeroFSData.content, paragraph: unSectionHeroFSData.paragraph, modifiers: {contentOrientation: contentOrientation, vignette: vignette, contentStyle: contentStyle}});
