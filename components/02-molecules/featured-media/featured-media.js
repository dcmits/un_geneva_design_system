Drupal.behaviors.featuredMedia = {
  attach(context) {
    jQuery('.colorbox-iframe').colorbox({
      iframe: true,
      width: '90%',
      height: '90%',
      maxHeight: '100%',
      title: false,
      onComplete: function() {
        jQuery(this).colorbox.resize({
          height: Math.min(jQuery(window).height()*0.9,jQuery("#colorbox").width()/1.46)
        });
      }
    });
  }
};
