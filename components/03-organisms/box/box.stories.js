import boxTemplate from './box.twig';

import boxData from './box.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Box' };


export const box = () => boxTemplate(boxData);
