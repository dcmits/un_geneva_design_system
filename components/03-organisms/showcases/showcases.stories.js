import showcasesTemplate from './showcases.twig';

import showcasesData from './showcases.yml';

import 'jquery-colorbox'
import '../../02-molecules/featured-media/featured-media';

/**
 * Storybook Definition.
 */
export default { 
  title: 'Organisms/Showcases',
  argTypes: {
    // This defines a "Size" argument that can be used in components.
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  },
};

export const showcases = ({size }) => showcasesTemplate({...showcasesData, modifiers: {size: size } });
