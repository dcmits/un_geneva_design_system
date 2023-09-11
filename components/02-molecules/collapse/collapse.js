(function ($) {

  'use strict';

  // Run on DOM "ready" event.
  $(function() {

    //scrollToElement($('.panel-body.collapse:target'));
  });

  // Run whenever a link to a hash is activated, in case the link is on
  // the same page. Will reopen the accordion every time one clicks on the link,
  // contrary to the "hashChange" event, which would have worked
  // only on first activation of the hash.
  $('a:not([data-toggle~="collapse"])[href^="#"]').on('click', function(e) {
    const hash = e.currentTarget.hash;
    if (hash !== '') {
      let $target = $(hash);
      if($target.hasClass('collapse')) {
        $target.collapse('show');
      }
      else {
        showHashElement($target);
      }
    }
  });

  function scrollToElement($target, offset = 0) {
    $('html, body').animate({
      scrollTop: $target.offset().top - offset
    }, 500);
  }

  function showHashElement($target) {
    if(!$target.hasClass('collapse') && $target.closest('.collapse').length > 0) {
      $target.closest('.collapse').on('shown.bs.collapse', function () {
        scrollToElement($target, 85);
      }).collapse('show');
    }
    else {
      scrollToElement($target);
    }
  }

  jQuery(document).ready(function() {

    if(window.location.hash && jQuery(window.location.hash).length > 0) {
      let $target = jQuery(window.location.hash);
      showHashElement($target);
    }
  });

  window.addEventListener('load', function(){
    $('.panel-body.collapse').on('shown.bs.collapse', function () {
      scrollToElement($(this), 85);
    });
    $('.panel-body.collapse:target').collapse('show');
  });

})(jQuery);
