import linksIconsContainerTemplate from './paragraph--links-icons-container.twig';

//import linkItemImageData from './link-item~image.yml';
import linksIconsContainerData from './paragraph--links-icons-container.yml';

/**
 * Storybook Definition.
 */
export default { 
  title: 'Organisms/Paragraphs',
};

export const LinksIconsContainer = () => linksIconsContainerTemplate(linksIconsContainerData);
