import palettes from './palettes.twig';

import palettesData from './palettes.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Base/Colors',
};

export const Palettes = () => palettes(palettesData);
