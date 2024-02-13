Drupal.behaviors.featuredMedia = {
  attach(context) {
    jQuery('.colorbox-iframe').colorbox({iframe: true, width: '90%', height: '90%', title: false});
  }
};
