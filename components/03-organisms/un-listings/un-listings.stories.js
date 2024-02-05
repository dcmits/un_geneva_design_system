import listingTemplate from './un-listings.twig';

import listingData from './un-listings.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Listing' };


export const listing = () => listingTemplate(listingData);
