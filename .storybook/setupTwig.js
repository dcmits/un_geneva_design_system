const { resolve } = require('path');
const twigDrupal = require('twig-drupal-filters');
const twigBEM = require('bem-twig-extension');
const twigCreateAttribute = require('./create_attribute.function.js');
const twigAddAttributes = require('add-attributes-twig-extension');
const twigDefaultBannerImage = require('./default_banner_image.function.js');
/**
 * Fetches project-based variant configuration. If no such configuration
 * exists, returns default values.
 *
 * @returns project-based variant configuration, or default config.
 */
const fetchVariantConfig = () => {
  try {
    return require('../project.emulsify.json').variant.structureImplementations;
  } catch (e) {
    return [
      {
        name: 'base',
        directory: './components/00-base',
      },
      {
        name: 'atoms',
        directory: './components/01-atoms',
      },
      {
        name: 'molecules',
        directory: './components/02-molecules',
      },
      {
        name: 'organisms',
        directory: './components/03-organisms',
      },
      {
        name: 'pages',
        directory: './components/04-pages',
      },
    ];
  }
};

module.exports.namespaces = {};
for (const { name, directory } of fetchVariantConfig()) {
  module.exports.namespaces[name] = resolve(__dirname, '../', directory);
}

/**
 * Configures and extends a standard twig object.
 *
 * @param {Twig} twig - twig object that should be configured and extended.
 *
 * @returns {Twig} configured twig object.
 */
module.exports.setupTwig = function setupTwig(twig) {
  twig.cache();
  twigDefaultBannerImage(twig);
  twigDrupal(twig);
  twigBEM(twig);
  twigAddAttributes(twig);
  twigCreateAttribute(twig);
  return twig;
};
