import cardTwig from './card.twig';

import cardData from './card.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Cards' };

export const card = () => cardTwig(cardData);
