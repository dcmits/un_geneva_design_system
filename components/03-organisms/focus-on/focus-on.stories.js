import focusOnTemplate from './focus-on.twig';

import focusOnData from './focus-on.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Focus On' };


export const focusOn = () => focusOnTemplate(focusOnData);
