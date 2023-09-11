Drupal.behaviors.rooms = {
  toggleButton: null,
  menu: null,
  context: null,
  openMenu() {
    this.nav.classList.add('nav--open');
    this.toggleButton.classList.add('toggle-expand--open');
    this.toggleButton.setAttribute('aria-expanded', 'true');
  },
  closeMenu() {
    this.nav.classList.remove('nav--open');
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
    if (Drupal.behaviors.rooms.toggleButton === document.activeElement) {
      if (key === 'Escape' || key === 'Esc' || key === 27) {
        Drupal.behaviors.rooms.closeMenu();
      }
    }
  },
  attach(context) {
    this.toggleButton = typeof context.getElementById === 'function' ? context.getElementById('change-room') : document.getElementById('change-room');
    this.nav = typeof context.getElementById === 'function' ? context.getElementById('views-view-rooms-block_1') : document.getElementById('views-view-rooms-block_1');
    this.context = typeof context.getElementById === 'function' ? context : document;
    if (this.toggleButton && this.nav) {

      // Mobile Menu Show/Hide.
      this.toggleButton.addEventListener('click', (e) => {
        this.toggleMenu();
        e.preventDefault();
      });

      context.addEventListener('keydown', this.menuKeyboardControl);
    }
  },
};
