(function ($) {
  'use strict';

  Drupal.behaviors.langDropdown = {
    attach: function (context) {

      $('#language-switcher-area .lang-dropdown select').change(function(e) {
        var $dropdown = $(this);
        window.location.href = $dropdown.val();
      });
    }
  };
})(jQuery);
