import unSectionThreeColumnTemplate from './three-column-grid.twig';

import unSectionThreeColumnData from './three-column-grid.yml';

/**
 * Storybook Definition.
 */
export default { 
  title: 'Organisms/Paragraphs',
  argTypes: {
    // This defines a "Variation" argument that can be used in components.
    columnsRatio: {
      control: {
        type: 'select',
        options: ['', 'even'],
        labels: {
          '': '16.67% / 66.66% / 16.67%',
          'even': '33% / 33% / 33%',
        },
      },
    },
  },
};

export const UNSectionThreeColumnGrid = ({columnsRatio}) => unSectionThreeColumnTemplate({ column_one: unSectionThreeColumnData.column_one, column_two: unSectionThreeColumnData.column_two, column_three: unSectionThreeColumnData.column_three, columns_ratio: columnsRatio });
