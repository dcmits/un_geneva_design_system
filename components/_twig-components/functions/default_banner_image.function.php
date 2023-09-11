<?php
use Twig\TwigFunction;
use Drupal\file\Entity\File;
/**
 * @file
 * Add "default_banner_image" function for Twig.
 */

$function = new TwigFunction('default_banner_image', function () {
  if (!class_exists('Drupal')) {
    return "";
  }

  $bannerUri = un_geneva_design_system_get_default_banner();

  if($bannerUri) {
    return [
      '#theme' => 'image_style',
      '#style_name' => 'un_section_hero',
      '#uri' => $bannerUri
    ];
  }
  else {
    return [];
  }

}, array('is_safe' => array('html')));
