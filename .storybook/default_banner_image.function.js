'use strict';

module.exports = simpleTwigExtension;

function simpleTwigExtension(Twig) {
  Twig.extendFunction("default_banner_image", function(content) {
    return '';
    const bannerUri = 'theme://un_geneva_design_system/images/un_flag.jpg';
    return {
      '#theme': 'image_style',
      '#style_name': 'un_section_hero',
      '#uri': bannerUri
    }
  });
}