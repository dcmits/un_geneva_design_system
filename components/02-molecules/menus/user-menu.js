Drupal.behaviors.userAccountMenu = {
  toggleButton: null,
  menu: null,
  context: null,
  openMenu() {
    this.nav.classList.add('user-account-nav--open');
    this.toggleButton.classList.add('toggle-expand--open');
    this.toggleButton.setAttribute('aria-expanded', 'true');
    this.alignMenu();
  },
  closeMenu() {
    this.nav.classList.remove('user-account-nav--open');
    this.toggleButton.classList.remove('toggle-expand--open');
    this.toggleButton.setAttribute('aria-expanded', 'false');
    this.toggleButton.focus();
  },
  toggleMenu() {
    if (this.toggleButton.getAttribute('aria-expanded') === 'true') {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  },
  menuKeyboardControl(e) {
    const key = e.key || e.keyCode;
    const dir = document.dir;
    if (e.defaultPrevented) {
      return;
    }
    if (Drupal.behaviors.userAccountMenu.toggleButton === document.activeElement) {
      if (key === 'Escape' || key === 'Esc' || key === 27) {
        Drupal.behaviors.userAccountMenu.closeMenu();
      }
      else if (key === 'ArrowDown' || key === 40) {
        if (Drupal.behaviors.userAccountMenu.toggleButton.getAttribute('aria-expanded') === 'true') {
          document.getElementById(document.activeElement.getAttribute('aria-controls')).getElementsByTagName('a').item(0).focus();
        }
        else {
          Drupal.behaviors.userAccountMenu.openMenu();
        }
      }
      else if ((key === 'ArrowUp' || key === 38) && Drupal.behaviors.userAccountMenu.toggleButton.getAttribute('aria-expanded') === 'true') {
        Drupal.behaviors.userAccountMenu.closeMenu();
      }

    } else if (Drupal.behaviors.userAccountMenu.nav.contains(document.activeElement)) {
      if (document.activeElement.classList.contains('user-account-menu__link')) {
        if (key === 'Escape' || key === 'Esc' || key === 27) {
          Drupal.behaviors.userAccountMenu.closeMenu();
        }
        if (key === 'ArrowUp' || key === 38) {
          // check if first element
          if (Array.from(document.activeElement.parentNode.parentNode.children).indexOf(document.activeElement.parentNode) === 0) {
            Drupal.behaviors.userAccountMenu.toggleButton.focus();
          }
          else {
            document.activeElement.parentNode.previousElementSibling.children[0].focus();
          }
        }
        else if (key === 'ArrowDown' || key === 40) {
          // check if last element
          if (document.activeElement.parentNode.nextElementSibling) {
            document.activeElement.parentNode.nextElementSibling.children[0].focus();
          }
        }
      }
      else if (Drupal.behaviors.userAccountMenu.toggleButton.getAttribute('aria-expanded') === 'true' && (key === 'Escape' || key === 'Esc' || key === 27)) {
        Drupal.behaviors.userAccountMenu.closeMenu();
      }

    }
  },
  attach(context) {
    this.toggleButton = typeof context.getElementById === 'function' ? context.getElementById('user-account-menu-toggle') : document.getElementById('user-account-menu-toggle');
    this.nav = typeof context.getElementById === 'function' ? context.getElementById('user-account-nav') : document.getElementById('user-account-nav');
    this.context = typeof context.getElementById === 'function' ? context : document;

    if (this.toggleButton && this.nav) {
      this.alignMenu();

      // Mobile Menu Show/Hide.
      this.toggleButton.addEventListener('click', (e) => {
        this.toggleMenu();
        e.preventDefault();
      });


      document.body.addEventListener('click', (e) => {
        if(!e.target.closest('.header__useraccountmenu')) {
          this.closeMenu();
        }
        e.preventDefault();
      });

      context.addEventListener('keydown', this.menuKeyboardControl);
    }
  },
  alignMenu() {
    this.nav.style.width = this.toggleButton.offsetWidth + 'px';
  },

  getTopOffset(el) {
    let rect = el.getBoundingClientRect(),
    scrollTop = window.scrollY || document.documentElement.scrollTop;
    return rect.top + scrollTop;
  }
};
