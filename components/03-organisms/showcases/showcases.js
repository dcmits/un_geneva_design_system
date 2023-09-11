Drupal.behaviors.showcases = {
  attach(context) {
    const showcases = typeof context.getElementsByClassName === 'function' ? context.getElementsByClassName('showcase') : document.getElementById('showcase');
    Array.from(showcases).forEach((item,index) => {
    });
  }
};
