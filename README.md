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

[![Emulsify Design System](https://user-images.githubusercontent.com/409903/170579210-327abcdd-2c98-4922-87bb-36446a4cc013.svg)](https://www.emulsify.info/)

Emulsify is an open-source tool for creating design systems with reusable components and clear guidelines for teams. Emulsify helps organizations scale their design while reducing cost, streamlining workflows, and improving accessibility.

### Emulsify Drupal

#### Storybook development, Webpack build, and Drupal 8 theme

**Emulsify Drupal** provides a [Storybook](https://storybook.js.org/) component library, a [Webpack](https://webpack.js.org/) development environment, and a Drupal 8 starterkit theme. It can be used as a standalone prototyping tool or inside a Drupal installation.

#### Documentation

[docs.emulsify.info](https://docs.emulsify.info/)

#### Quick Links

1. [Installation](https://docs.emulsify.info/installation/design-system)
2. [Usage](https://docs.emulsify.info/usage/commands)

### Demo

1. [Storybook](http://storybook.emulsify.info/)

### Contributing

#### [Code of Conduct](https://github.com/emulsify-ds/emulsify-drupal/blob/master/CODE_OF_CONDUCT.md)

The project maintainers have adopted a Code of Conduct that we expect project participants to adhere to. Please read the full text so that you can understand what actions will and will not be tolerated.

#### Contribution Guide

Please also follow the issue template and pull request templates provided. See below for the correct places to post issues:

1. [Emulsify Drupal](https://github.com/emulsify-ds/emulsify-drupal/issues)
2. [Emulsify Twig Extensions](https://github.com/emulsify-ds/emulsify-twig-extensions/issues)
3. [Emulsify Twig Drupal Module](https://www.drupal.org/project/issues/emulsify_twig)

#### Committing Changes

To facilitate automatic semantic release versioning, we utilize the [Conventional Changelog](https://github.com/conventional-changelog/conventional-changelog) standard through Commitizen. Follow these steps when commiting your work to ensure semantic release can version correctly.

1. Stage your changes, ensuring they encompass exactly what you wish to change, no more.
2. Run the `commit` script via `yarn commit` or `npm run commit` and follow the prompts to craft the perfect commit message.
3. Your commit message will be used to create the changelog for the next version that includes that commit.

### Author

Emulsify&reg; is a product of [Four Kitchens &mdash; We make BIG websites](https://fourkitchens.com).
