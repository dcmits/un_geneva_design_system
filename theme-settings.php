<?php

use Drupal\Core\File\Exception\FileException;
use Drupal\Core\Form\FormStateInterface;
use Drupal\file\Entity\File;

/**
 * Implements hook_form_FORM_ID_alter().
 */
function un_geneva_design_system_form_system_theme_settings_alter(&$form, \Drupal\Core\Form\FormStateInterface &$form_state, $form_id = NULL) {
  // Work-around for a core bug affecting admin themes. See issue #943212.
  if (isset($form_id)) {
    return;
  }

  $form['global'] = [
    '#type' => 'details',
    '#title' => t('Global settings'),
    '#open' => TRUE,
    //'#description' => t("Additional settings for UN Geneva theme"),
  ];

  $form['global']['site_name'] = array(
    '#type'          => 'textfield',
    '#title'         => t('Site name'),
    '#default_value' => theme_get_setting('site_name'),
    '#description'   => t("Overwrite the default site name"),
  );

  $form['global']['site_name_secondary'] = array(
      '#type'          => 'textfield',
      '#title'         => t('Secondary site name'),
      '#default_value' => theme_get_setting('site_name_secondary'),
  );
  $form['global']['social_media_share_default_image'] = array(
      '#type'          => 'textfield',
      '#title'         => t('URL for default Image for Social Media Share'),
      '#default_value' => theme_get_setting('social_media_share_default_image'),
  );

  $form['banner'] = [
    '#type' => 'details',
    '#title' => t('Default page banner image'),
    '#open' => TRUE,
    '#description' => t("The fallback banner image used on many content pages. WILL BE RESIZED TO 1920x356!")
  ];

  $form['banner']['banner_use_default'] = [
    '#type' => 'checkbox',
    '#title' => t('Use the banner image supplied by the theme'),
    '#description' => 'theme://' . \Drupal::service('theme.manager')->getActiveTheme()->getName() . '/images/banner.png',
    '#default_value' => theme_get_setting('banner_use_default'),
  ];
  $form['banner']['settings'] = [
    '#type' => 'container',
    '#states' => [
      // Hide the favicon settings when using the default favicon.
      'invisible' => [
        'input[name="banner_use_default"]' => ['checked' => TRUE],
      ],
    ],
  ];
  $form['banner']['settings']['banner_image_fid'] = [
    '#type' => 'managed_file',
    '#title' => t('Default banner image'),
    '#description' => t("BEFORE UPLOADING AN IMAGE, MAKE SURE IT LOOKS GOOD AT 1920x356!"),
    '#upload_location' => 'public://theme/' . \Drupal::service('theme.manager')->getActiveTheme()->getName(),
    '#default_value' => theme_get_setting('banner_image_fid'),
    '#upload_validators' => [
      'file_validate_extensions' => [
        'png jpg jpeg',
      ]
    ],
  ];

  $form['#submit'][] = '_un_geneva_design_system_system_theme_settings_submit';
  $form_state->disableCache();
}

/**
 * Custom submit handler for system_theme_settings_form.
 */
function _un_geneva_design_system_system_theme_settings_submit(array &$form, FormStateInterface $form_state) {
  $values = $form_state->getValues();

  $useDefault = $values['banner_use_default'];

  $images = [
    'banner_image_fid' => 'theme.' . \Drupal::service('theme.manager')->getActiveTheme()->getName() . '.image_fid',
  ];

  foreach ($images as $formKey => $configKey) {
    $value = $values[$formKey];

    $oldFid = \Drupal::state()->get($configKey);
    $fid = !empty($value[0]) ? $value[0] : null;

    // Clean up the previous file, no longer used.
    // Also clean if the user just blanked out the values in the form.
    if ((!$fid || $fid !== $oldFid) && $oldFid && $oldFile = File::load($oldFid)) {
      \Drupal::service('file.usage')->delete($oldFile, \Drupal::service('theme.manager')->getActiveTheme()->getName(), 'theme', 'custom');
      $usage = \Drupal::service('file.usage')->listUsage($oldFile);

      if (empty($usage)) {
        // Not used anywhere else, we can safely delete it.
        $oldFile->delete();
      }
    }
    
    if (!$fid) {
      // No file to process.
      \Drupal::state()->delete($configKey);
      continue;
    }

    if ($oldFid === $fid) {
      // Same file than what's already stored, nothing to do.
      continue;
    }

    // Set the file as permanent, so it won't be deleted by a cron job.
    $file = File::load($fid);
    $file->setPermanent();
    $file->save();

    // Save the File ID in the state store.
    \Drupal::state()->set($configKey, $fid);

    // Indicate were using this file.
    \Drupal::service('file.usage')->add($file, \Drupal::service('theme.manager')->getActiveTheme()->getName(), 'theme', 'custom');
  }
}
