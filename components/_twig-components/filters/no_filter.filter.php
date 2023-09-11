<?php
use Twig\TwigFilter;
/**
 * @file
 * Add "without" filter for Pattern Lab.
 *
 * Bring Drupal filters in just so Pattern Lab doesn't bork.
 */

$filter = new TwigFilter('no_filter', function ($string) {
  return $string;
});
