Drupal.behaviors.boxes = {
  attach(context) {
    //jQuery(window).on('resize', function(){
  //});
    let selectors = [
      '.un-box',
      '.link-item--type-text',
    ];
    selectors.forEach((selector) => {
      jQuery('.row.with-cols>div>.field_un_column_one--wrapper>.field_un_column_one:first-child>' + selector + ':first-child').each(function(){
        let col1 = jQuery(this);
        if(jQuery(this).parent().parent().parent().parent().children().length == 2) {
          let sibling = jQuery(this).parent().parent().parent().next();
          if(sibling.find('.field_un_column_two--wrapper').children().length == 1 && sibling.find('.field_un_column_two--wrapper>.field_un_column_two:first-child>' + selector).length == 1) {
            sibling.find('.field_un_column_two--wrapper>.field_un_column_two:first-child>' + selector + ':first-child').each(function(){
              let col2 = jQuery(this);
              let min_height = Math.max(col1.height(),col2.height());
              col1.height(min_height);
              col2.height(min_height);
            });
          }
        }
        if(jQuery(this).parent().parent().parent().parent().children().length == 3) {
          let sibling = jQuery(this).parent().parent().parent().next();
          if(sibling && sibling.find('.field_un_column_two--wrapper').children().length == 1 && sibling.find('.field_un_column_two--wrapper>.field_un_column_two:first-child>' + selector).length == 1) {
            sibling.find('.field_un_column_two--wrapper>.field_un_column_two:first-child>' + selector + ':first-child').each(function(){
              let col2 = jQuery(this);
              let sibling2 = sibling.next();
              if(col1 && col2 && sibling2.find('.field_un_column_three--wrapper').children().length == 1 && sibling2.find('.field_un_column_three--wrapper>.field_un_column_three:first-child>' + selector).length == 1) {
                sibling2.find('.field_un_column_three--wrapper>.field_un_column_three:first-child>' + selector + ':first-child').each(function(){
                  let col3 = jQuery(this);
                  let min_height = Math.max(col1.height(),col2.height(), col3.height());
                  col1.height(min_height);
                  col2.height(min_height);
                  col3.height(min_height);
                });
              }
            });
          }
        }
      });
    });
  }
};

