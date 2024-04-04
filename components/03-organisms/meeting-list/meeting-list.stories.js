import meetingListTemplate from './meeting-list.twig';

import meetingListData from './meeting-list.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Listing' };


export const meetingList = () => meetingListTemplate(meetingListData);
