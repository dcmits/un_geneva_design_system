Drupal.behaviors.boxes = {
  attach(context) {
    //jQuery(window).on('resize', function(){
  //});
    jQuery('.row.with-cols>div>.field_un_column_one--wrapper>.field_un_column_one:first-child>.un-box:first-child').each(function(){
      let col1 = jQuery(this);
      if(jQuery(this).parent().parent().parent().parent().children().length == 2) {
        let sibling = jQuery(this).parent().parent().parent().next();
        if(sibling.find('.field_un_column_two--wrapper').children().length == 1 && sibling.find('.field_un_column_two--wrapper>.field_un_column_two:first-child>.un-box').length == 1) {
          sibling.find('.field_un_column_two--wrapper>.field_un_column_two:first-child>.un-box:first-child').each(function(){
            let col2 = jQuery(this);
            let min_height = Math.max(col1.height(),col2.height());
            col1.height(min_height);
            col2.height(min_height);
          });
        }
      }
    });
  }
};
