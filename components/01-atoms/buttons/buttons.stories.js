// Buttons Stories
import button from './button.twig';

import buttonData from './button.yml';
import buttonAltData from './button-alt.yml';
import buttonAltData2 from './button-alt-2.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Buttons' };

export const standard = () => button(buttonData);

export const alternative = () => button(buttonAltData);
export const alternative2 = () => button(buttonAltData2);
