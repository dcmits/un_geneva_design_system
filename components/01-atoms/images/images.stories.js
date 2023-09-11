import image from './image/responsive-image.twig';
import figure from './image/figure.twig';
import iconTwig from './icons/icons.twig';


import imageData from './image/image.yml';
import figureData from './image/figure.yml';
import iconData from './icons/icons.yml';

const icons = [];
var symbols = [];

// let spriteData = readFileSync('../../../../dist/img/sprite/sprite.svg', { encoding:'utf8', flag:'r' });
// console.log(spriteData);
var ajax = new XMLHttpRequest();
ajax.open("GET", "/img/sprite/sprite.svg", false);
ajax.send();
  if(ajax.responseXML) {
    symbols = ajax.responseXML.getElementsByTagName('symbol');
    for(const symbol of symbols){
      if(symbol.id.indexOf('~hover') === -1) {
        icons.push({title: symbol.id.replace('-', ' '), value: symbol.id, hover: ajax.responseXML.getElementById(symbol.id + '~hover') ? true : false});
      }
    }
  }


/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Images' };

export const images = () => image(imageData);

export const figures = () => figure(figureData);

export const Icons = () => iconTwig({items: icons});
