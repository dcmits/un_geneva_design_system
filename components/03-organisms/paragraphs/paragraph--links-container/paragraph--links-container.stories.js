import linksContainerTemplate from './paragraph--links-container.twig';

//import linkItemImageData from './link-item~image.yml';
import linksContainerData from './paragraph--links-container.yml';

/**
 * Storybook Definition.
 */
export default { 
  title: 'Organisms/Paragraphs',
};

export const LinksContainer = () => linksContainerTemplate(linksContainerData);
