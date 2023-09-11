import unSectionTwoColumnTemplate from './two-column-grid.twig';

import unSectionTwoColumnData from './two-column-grid.yml';

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
        options: ['', 'uneven_66_33', 'uneven_33_66', 'uneven_75_25', 'uneven_25_75'],
        labels: {
          '': '50% / 50%',
          'uneven_66_33': '66% / 33%',
          'uneven_33_66': '33% / 66%',
          'uneven_75_25': '75% / 25%',
          'uneven_25_75': '25% / 75%',
        },
      },
    },
  },
};

export const UNSectionTwoColumnGrid = ({columnsRatio}) => unSectionTwoColumnTemplate({ column_one: unSectionTwoColumnData.column_one, column_two: unSectionTwoColumnData.column_two, columns_ratio: columnsRatio });
