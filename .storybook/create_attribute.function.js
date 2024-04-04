'use strict';

module.exports = createAttributeExtension;

function createAttributeExtension(Twig) {
  Twig.extendFunction("create_attribute", function(attributes) {
    let content = '';
    for (let k in attributes) {
      content += ' ' + k + '="' + attributes[k] + '"';
    }
    return content;
  });
}