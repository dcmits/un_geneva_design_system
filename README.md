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
1. Include the custom package in the repositories section of composer.json before the packages.drupal.org
```
{
    "type": "package",
    "package": {
        "name": "dcmits/un_geneva_design_system",
        "version": "1.0.0",
        "type": "drupal-theme",
        "source": {
        "type" : "git",
        "url" : "https://github.com/dcmits/un_geneva_design_system.git",
        "reference" : "main"
        },
        "dist": {
        "url": "https://github.com/dcmits/un_geneva_design_system/archive/main.zip",
        "type": "zip"
        }
    }
}
```
2. Install dependencies (block_class, components, emulsify_twig, lang_dropdown, language, menu_block, twig_tweak, unified_twig_ext)
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
            "Fix action attribute of form that triggers XSS alert.": "./patches/lang_dropdown-xss-action.patch"
        }
    }
```
5. Generate new theme (using the Drupal core starter kit theme generation script)
```
php web/core/scripts/drupal generate-theme [new_theme] --path themes/custom --starterkit un_geneva_starterkit --name="[New theme name]"
```
6. Install and set as default the new theme from the Appeareance menu
7. Update the theme settings (Site name, Secondary site name, social media share image, default banner image)

### Updating the local version of the design system
```
rm -rf web/themes/contrib/un_geneva_design_system
composer update dcmits/un_geneva_design_system --no-cache
```

## Extending the design system

[see development.README.md](development.README.md)

## Emulsify/Storybook

[see emulsify.README.md](emulsify.README.md)