# UN Geneva Design System
<p><img src="screenshot.png" /></p>

This is a Drupal theme that implements a design system created using Emulsify (Storybook).
Default components provided by the design system:
- language bar
- brandbar
- menu
- footer
- page template

## Usage
1. Include the custom package in the repositories section of composer.json before the packages.drupal.org. Replace the dist:url with "https://github.com/dcmits/un_geneva_design_system/archive/main.zip" to automatically pull latest revision.
```
{
    "type": "package",
    "package": {
        "name": "dcmits/un_geneva_design_system",
        "version": "1.0.3",
        "type": "drupal-theme",
        "source": {
        "type" : "git",
        "url" : "https://github.com/dcmits/un_geneva_design_system.git",
        "reference" : "main"
        },
        "dist": {
            "url": "https://github.com/dcmits/un_geneva_design_system/archive/refs/tags/1.0.3.zip",
            "type": "zip"
        }
    }
}
```
2. Install dependencies (block_class, components:^3.0@beta, emulsify_twig, lang_dropdown, menu_block, twig_tweak, unified_twig_ext)
```
composer require drupal/block_class drupal/components:^3.0@beta drupal/emulsify_twig drupal/lang_dropdown drupal/menu_block drupal/twig_tweak drupal/unified_twig_ext
```
3. Install the theme
```
composer require dcmits/un_geneva_design_system
```
4. Add patches in compser.json under the extra section
```
    "patches": {
        "drupal/core": {
            "Add stream wrappers to access extension files": "https://www.drupal.org/files/issues/2021-12-15/1308152-395.patch"
        },
        "drupal/unified_twig_ext": {
            "ExtensionLoader not loading extensions from parent themes": "https://www.drupal.org/files/issues/2023-08-10/unified_twig_ext-load_parent_extensions-3380423-2.patch"
        },
        "drupal/emulsify_twig": {
            "removeAttribute method not found on array": "https://www.drupal.org/files/issues/2022-11-18/emulsify_twig-removeattribute_not_found_on_array-3260914-5.patch"
        },
        "drupal/lang_dropdown": {
            "Fix action attribute of form that triggers XSS alert.": "./web/themes/contrib/un_geneva_design_system/.patches/lang_dropdown-xss-action.patch"
        }
    }
```
if you do not have composer patches installed run:
```
composer require cweagans/composer-patches
```
run composer update to patch the modules
```
composer update
```
5. Generate new theme (using the Drupal core starter kit theme generation script)
First make sure the custom theme folder exists
```
mkdir web/themes/custom
```
generate theme
```
php web/core/scripts/drupal generate-theme [new_theme] --path themes/custom --starterkit un_geneva_starterkit --name="[New theme name]"
```
[new_theme] should be lowercase letters and digits and underscores (it shouldn't start with a digit)

6. Install and set as default the new theme from the Appeareance menu.

7. Do a cache rebuild after installing the new theme.

8. Update the theme settings (Site name, Secondary site name, social media share image, default banner image)

### Updating the local version of the design system
```
rm -rf web/themes/contrib/un_geneva_design_system
composer update dcmits/un_geneva_design_system --no-cache
```

## Extending the design system

[see development.README.md](development.README.md)

## Emulsify/Storybook

[see emulsify.README.md](emulsify.README.md)

## Customizations
### Search form
The search form block is hardcoded in the template because of constraints from the mobile menu and the header markup.
In order to replace the default search form add the following code in you custom theme's .theme file, replacing CUSTOM_THEME with your theme name (lowercase) and CUSTOM_THEME_HEADER_SEARCH_BLOCK with the block id of your custom block:
```
function CUSTOM_THEME_preprocess(&$variables, $hook) {
  if($hook == 'region' && $variables['region'] == 'header') {
    $block_search = \Drupal\block\Entity\Block::load('CUSTOM_THEME_HEADER_SEARCH_BLOCK'); // replace mytheme part with your theme name.
    if($block_search) {
      $variables['header__search'] = \Drupal::entityTypeManager()
      ->getViewBuilder('block')
      ->view($block_search);
    }
  }
}
```
