Drupal.behaviors.focusOn = {
  attach(context) {
    const cards = typeof context.getElementsByClassName === 'function' ? context.getElementsByClassName('focus-card') : document.getElementById('focus-card');
    Array.from(cards).forEach((item,index) => {
      if(item.getElementsByClassName('focus-card__title-link').length > 0) {
        item.style.cursor = 'pointer';
        item.addEventListener('click', (e) => {
          if(!(e.target instanceof HTMLAnchorElement || jQuery(e.target).parents('a').length > 0)) {
            item.getElementsByClassName('focus-card__title-link')[0].click();
          }
        });
      }
    });
  }
};
