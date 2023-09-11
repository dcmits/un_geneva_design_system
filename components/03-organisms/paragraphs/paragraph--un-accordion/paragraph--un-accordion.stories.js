import unAccordionTemplate from './paragraph--un-accordion.twig';

//import linkItemImageData from './link-item~image.yml';
import unAccordionData from './paragraph--un-accordion.yml';

//import '../../../02-molecules/collapse/bootstrap-collapse';
import './paragraph--un-accordion';

/**
 * Storybook Definition.
 */
export default { 
  title: 'Organisms/Paragraphs',
};

export const UNAccordion = () => unAccordionTemplate(unAccordionData);
