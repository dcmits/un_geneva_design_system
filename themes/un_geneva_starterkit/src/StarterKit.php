<?php

namespace Drupal\un_geneva_starterkit;

use Drupal\Component\Serialization\Yaml;
use Drupal\Core\Theme\StarterKitInterface;

final class StarterKit implements StarterKitInterface {

  /**
   * {@inheritdoc}
   */
  public static function postProcess(string $working_dir, string $machine_name, string $theme_name): void {
    
    // update info file

    $info_file = "$working_dir/$machine_name.info.yml";
    $info = Yaml::decode(file_get_contents($info_file));
    unset($info['hidden']);
    unset($info['components']);
    unset($info['starterkit']);
    file_put_contents($info_file, Yaml::encode($info));

    // update breakpoints file

    $breakpoints_file = "$working_dir/$machine_name.breakpoints.yml";
    $content = file_get_contents($breakpoints_file);
    $content = str_replace('un_geneva_starterkit', $machine_name, $content);
    file_put_contents($breakpoints_file, $content);

    // rename and update config files

    if(glob("$working_dir/config/install/*.yml")) {
      foreach(glob("$working_dir/config/install/*.yml") as $file) {
        $content = file_get_contents($file);
        $content = str_replace('un_geneva_starterkit', $machine_name, $content);
        file_put_contents($file, $content);
        $basename = basename($file);
        rename($working_dir . '/config/install/' . $basename, $working_dir . '/config/install/' . str_replace('un_geneva_starterkit', $machine_name, $basename));
      }
    }
    if(glob("$working_dir/config/optional/*.yml")) {
      foreach(glob("$working_dir/config/optional/*.yml") as $file) {
        $content = file_get_contents($file);
        $content = str_replace('un_geneva_starterkit', $machine_name, $content);
        file_put_contents($file, $content);
        $basename = basename($file);
        rename($working_dir . '/config/optional/' . $basename, $working_dir . '/config/optional/' . str_replace('un_geneva_starterkit', $machine_name, $basename));
      }
    }

    // remove starterkit postprocess class

    unlink("$working_dir/src/StarterKit.php");
    rmdir("$working_dir/src");
  }

}
