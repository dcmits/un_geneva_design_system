Drupal.behaviors.collapse = {
  attach(context) {
    console.log('attached accordion js');
    const links = context.querySelectorAll('[data-toggle="collapse"]');
    Array.from(links).forEach((item,index) => {
      item.addEventListener('click', (e) => {
        console.log(e.target.getAttribute('aria-expanded'));
        console.log(context.getElementById(e.target.getAttribute('aria-controls')));
        if(e.target.getAttribute('aria-expanded') === 'true') {
          context.getElementById(e.target.getAttribute('aria-controls')).classList.remove('in');
          context.getElementById(e.target.getAttribute('aria-controls')).setAttribute('aria-expanded','false');
          e.target.setAttribute('aria-expanded','false');
          e.target.classList.add('collapsed');
        } else {
          context.getElementById(e.target.getAttribute('aria-controls')).classList.add('in');
          context.getElementById(e.target.getAttribute('aria-controls')).setAttribute('aria-expanded','true');
          e.target.setAttribute('aria-expanded','true');
          e.target.classList.remove('collapsed');
        }
        e.preventDefault();
      });
    });
},
};