Drupal.behaviors.mainMenu = {
  toggleButton: null,
  menu: null,
  nav: null,
  context: null,
  search_height: 0,
  user_menu_height: 0,
openMenu() {
    this.nav.classList.add('main-nav--open');
    this.toggleButton.classList.add('toggle-expand--open');
    this.context.body.classList.add('menu--open');
    this.toggleButton.setAttribute('aria-expanded', 'true');
  },
  closeMenu() {
    this.nav.classList.remove('main-nav--open');
    this.toggleButton.classList.remove('toggle-expand--open');
    this.context.body.classList.remove('menu--open');
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
  closeSubMenus(element) {
    const subs = element.getElementsByClassName('main-menu--sub');
    const subs2 = element.getElementsByClassName('main-menu__item--with-sub');
    const subs3 = element.getElementsByClassName('main-menu__link--with-sub');
    const subToggles = element.getElementsByClassName('expand-sub');
    element.classList.remove('main-menu__item--open');

    Array.from(subs).forEach((subItem) => {
      subItem.classList.remove('main-menu--sub-open');
    });
    Array.from(subs2).forEach((subItem) => {
      subItem.classList.remove('main-menu__item--open');
    });
    Array.from(subs3).forEach((subItem) => {
      subItem.setAttribute('aria-expanded', 'false');
    });
    Array.from(subToggles).forEach((subToggle) => {
      subToggle.classList.remove('expand-sub--open');
      subToggle.setAttribute('aria-expanded', 'false');
    });
  },
  openSubMenu(element) {
    const subMenu = document.getElementById(element.getAttribute('aria-controls'));
    const menuLink = element.previousElementSibling;
    
    this.closeSubMenus(subMenu.parentNode.parentNode.parentNode);

    subMenu.classList.add('main-menu--sub-open');
    element.classList.add('expand-sub--open');
    element.parentNode.classList.add('main-menu__item--open');
    element.setAttribute('aria-expanded', 'true');
    menuLink.setAttribute('aria-expanded', 'true');
  },
  closeSubMenu(element) {
    const subMenu = document.getElementById(element.getAttribute('aria-controls'));
    const menuLink = element.previousElementSibling;
    const subs = subMenu.getElementsByClassName('main-menu--sub');
    const subs2 = subMenu.getElementsByClassName('main-menu__item--with-sub');
    const subToggles = subMenu.getElementsByClassName('expand-sub');

    subMenu.classList.remove('main-menu--sub-open');
    Array.from(subs).forEach((subItem) => {
      subItem.classList.remove('main-menu--sub-open');
    });
    Array.from(subs2).forEach((subItem) => {
      subItem.classList.remove('main-menu__item--open');
    });
    Array.from(subToggles).forEach((subToggle) => {
      subToggle.classList.remove('expand-sub--open');
      subToggle.setAttribute('aria-expanded', 'false');
    });
    element.classList.remove('expand-sub--open');
    element.parentNode.classList.remove('main-menu__item--open');
    element.setAttribute('aria-expanded', 'false');
    menuLink.setAttribute('aria-expanded', 'false');
  },
  toggleSubMenu(element) {
    if (element.getAttribute('aria-expanded') === 'true') {
      this.closeSubMenu(element);
    } else {
      this.openSubMenu(element);
    }
  },
  menuKeyboardControl(e) {
    const search = document.querySelector('.header__search input[type="text"]');
    //const user_menu = document.querySelector('.header__useraccountmenu button');
    const key = e.key || e.keyCode;
    const dir = document.dir;
    if (e.defaultPrevented) {
      return;
    }

    if (Drupal.behaviors.mainMenu.toggleButton === document.activeElement) {
      if (key === 'Escape' || key === 'Esc' || key === 27) {
        Drupal.behaviors.mainMenu.closeMenu();
      }
      if (Drupal.behaviors.mainMenu.toggleButton.getAttribute('aria-expanded') === 'true' && (key === 'ArrowDown' || key === 40)) {
        search.focus();
      }
    } else if (search === document.activeElement) {
      if (key === 'Escape' || key === 'Esc' || key === 27) {
        Drupal.behaviors.mainMenu.closeMenu();
      }
    } else if (Drupal.behaviors.mainMenu.nav.contains(document.activeElement)) {
      if (document.activeElement.classList.contains('expand-sub')) {
        if (Drupal.behaviors.mainMenu.toggleButton.getAttribute('aria-expanded') === 'true') {
          // mobile
          if (key === 'Enter' || key === 'Return' || key === 13 || key === ' ' || key === 'Space' || key === 32) {
            Drupal.behaviors.mainMenu.toggleSubMenu(document.activeElement);
          } else if (dir === 'ltr' && (key === 'ArrowLeft' || key === 37)) {
            document.activeElement.previousElementSibling.focus();
          } else if (dir === 'rtl' && (key === 'ArrowLeft' || key === 37)) {
            Drupal.behaviors.mainMenu.openSubMenu(document.activeElement);
          } else if (dir === 'ltr' && (key === 'ArrowRight' || key === 39)) {
            Drupal.behaviors.mainMenu.openSubMenu(document.activeElement);
          } else if (dir === 'rtl' && (key === 'ArrowRight' || key === 39)) {
            document.activeElement.previousElementSibling.focus();
          } else if (key === 'ArrowDown' || key === 40) {
            Drupal.behaviors.mainMenu.openSubMenu(document.activeElement);
            document.getElementById(document.activeElement.getAttribute('aria-controls')).getElementsByTagName('a').item(0).focus();
          } else if (key === 'Escape' || key === 'Esc' || key === 27) {
            if(document.activeElement.classList.contains('main-menu__link--sub')) {
              Drupal.behaviors.mainMenu.closeSubMenu(document.activeElement.parentNode.parentNode.parentNode.previousElementSibling);
              document.activeElement.parentNode.parentNode.parentNode.previousElementSibling.focus();
            }
          }
    
        } else {
          // desktop
        }
      } else if (document.activeElement.classList.contains('main-menu__link')) {
        if (Drupal.behaviors.mainMenu.toggleButton.getAttribute('aria-expanded') === 'true') {
          // mobile
          if (Array.from(document.activeElement.parentNode.parentNode.children).indexOf(document.activeElement.parentNode) === 0) {
            // first link in sub menu
            if (key === 'ArrowUp' || key === 38) {
              if (document.activeElement.parentNode.parentNode.parentNode.previousElementSibling && document.activeElement.parentNode.parentNode.parentNode.previousElementSibling.previousElementSibling) {
                document.activeElement.parentNode.parentNode.parentNode.previousElementSibling.previousElementSibling.focus();
              }
            } else if (key === 'ArrowDown' || key === 40) {
              if (document.activeElement.getAttribute('aria-expanded') === 'true') {
                document.getElementById(document.activeElement.getAttribute('aria-controls')).getElementsByTagName('a').item(0).focus();
              }
              else {
                if (document.activeElement.parentNode.nextElementSibling) {
                  document.activeElement.parentNode.nextElementSibling.children[0].focus();
                }
              }
            } else if (dir === 'ltr' && (key === 'ArrowRight' || key === 39)) {
              if(document.activeElement.classList.contains('main-menu__link--with-sub')) {
                Drupal.behaviors.mainMenu.openSubMenu(document.getElementById(document.activeElement.getAttribute('aria-controls')).parentNode.previousElementSibling);
                document.getElementById(document.activeElement.getAttribute('aria-controls')).getElementsByTagName('a').item(0).focus();
              }
            } else if (dir === 'rtl' && (key === 'ArrowLeft' || key === 37)) {
              if(document.activeElement.classList.contains('main-menu__link--with-sub')) {
                Drupal.behaviors.mainMenu.openSubMenu(document.getElementById(document.activeElement.getAttribute('aria-controls')).parentNode.previousElementSibling);
                document.getElementById(document.activeElement.getAttribute('aria-controls')).getElementsByTagName('a').item(0).focus();
              }
            } else if (dir === 'ltr' && (key === 'Escape' || key === 'Esc' || key === 27 || key === 'ArrowLeft' || key === 37)) {
              if (document.activeElement.classList.contains('main-menu__link--with-sub') && document.activeElement.nextElementSibling.getAttribute('aria-expanded') === 'true') {
                Drupal.behaviors.mainMenu.closeSubMenu(document.activeElement.nextElementSibling);
              } else if (document.activeElement.classList.contains('main-menu__link--sub')) {
                Drupal.behaviors.mainMenu.closeSubMenu(document.activeElement.parentNode.parentNode.parentNode.previousElementSibling);
                document.activeElement.parentNode.parentNode.parentNode.parentNode.children[0].focus();
              } else {
                Drupal.behaviors.mainMenu.closeMenu();
              }
            } else if (dir === 'rtl' && (key === 'Escape' || key === 'Esc' || key === 27 || key === 'ArrowRight' || key === 39)) {
              if (document.activeElement.classList.contains('main-menu__link--with-sub') && document.activeElement.nextElementSibling.getAttribute('aria-expanded') === 'true') {
                Drupal.behaviors.mainMenu.closeSubMenu(document.activeElement.nextElementSibling);
              } else if (document.activeElement.classList.contains('main-menu__link--sub')) {
                Drupal.behaviors.mainMenu.closeSubMenu(document.activeElement.parentNode.parentNode.parentNode.previousElementSibling);
                document.activeElement.parentNode.parentNode.parentNode.parentNode.children[0].focus();
              } else {
                Drupal.behaviors.mainMenu.closeMenu();
              }
            }
          } else if (document.activeElement.parentNode.nextElementSibling === null) {
            // last link in submenu
            if (key === 'ArrowUp' || key === 38) {
              document.activeElement.parentNode.previousElementSibling.children[0].focus();
            } else if (key === 'ArrowDown' || key === 40) {
              if (document.activeElement.getAttribute('aria-expanded') === 'true') {
                document.getElementById(document.activeElement.getAttribute('aria-controls')).getElementsByTagName('a').item(0).focus();
              }
              else {
                if (document.activeElement.parentNode.nextElementSibling) {
                  document.activeElement.parentNode.nextElementSibling.children[0].focus();
                }
              }
            } else if (dir === 'ltr' && (key === 'ArrowRight' || key === 39)) {
              if(document.activeElement.classList.contains('main-menu__link--with-sub')) {
                Drupal.behaviors.mainMenu.openSubMenu(document.activeElement.nextElementSibling);
                document.getElementById(document.activeElement.getAttribute('aria-controls')).getElementsByTagName('a').item(0).focus();
              }
            } else if (dir === 'rtl' && (key === 'ArrowLeft' || key === 37)) {
              if(document.activeElement.classList.contains('main-menu__link--with-sub')) {
                Drupal.behaviors.mainMenu.openSubMenu(document.activeElement.nextElementSibling);
                document.getElementById(document.activeElement.getAttribute('aria-controls')).getElementsByTagName('a').item(0).focus();
              }
            } else if (dir === 'ltr' && (key === 'Escape' || key === 'Esc' || key === 27 || key === 'ArrowLeft' || key === 37)) {
              if (document.activeElement.classList.contains('main-menu__link--with-sub') && document.activeElement.nextElementSibling.getAttribute('aria-expanded') === 'true') {
                Drupal.behaviors.mainMenu.closeSubMenu(document.activeElement.nextElementSibling);
              } else if (document.activeElement.classList.contains('main-menu__link--sub')) {
                Drupal.behaviors.mainMenu.closeSubMenu(document.activeElement.parentNode.parentNode.parentNode.previousElementSibling);
                document.activeElement.parentNode.parentNode.parentNode.previousElementSibling.previousElementSibling.focus();
              } else {
                Drupal.behaviors.mainMenu.closeMenu();
              }
            } else if (dir === 'rtl' && (key === 'Escape' || key === 'Esc' || key === 27 || key === 'ArrowRight' || key === 39)) {
              if (document.activeElement.classList.contains('main-menu__link--with-sub') && document.activeElement.nextElementSibling.getAttribute('aria-expanded') === 'true') {
                Drupal.behaviors.mainMenu.closeSubMenu(document.activeElement.nextElementSibling);
              } else if (document.activeElement.classList.contains('main-menu__link--sub')) {
                Drupal.behaviors.mainMenu.closeSubMenu(document.activeElement.parentNode.parentNode.parentNode.previousElementSibling);
                document.activeElement.parentNode.parentNode.parentNode.previousElementSibling.previousElementSibling.focus();
              } else {
                Drupal.behaviors.mainMenu.closeMenu();
              }
            }
          } else {
            if (key === 'ArrowUp' || key === 38) {
              document.activeElement.parentNode.previousElementSibling.children[0].focus();
            } else if (key === 'ArrowDown' || key === 40) {
              if (document.activeElement.getAttribute('aria-expanded') === 'true') {
                document.getElementById(document.activeElement.getAttribute('aria-controls')).getElementsByTagName('a').item(0).focus();
              }
              else {
                if (document.activeElement.parentNode.nextElementSibling) {
                  document.activeElement.parentNode.nextElementSibling.children[0].focus();
                }
              }
            } else if (dir === 'ltr' && (key === 'ArrowRight' || key === 39)) {
              if(document.activeElement.classList.contains('main-menu__link--with-sub')) {
                Drupal.behaviors.mainMenu.openSubMenu(document.activeElement.nextElementSibling);
                const subMenu = document.getElementById(document.activeElement.getAttribute('aria-controls'));
                subMenu.getElementsByTagName('a').item(0).focus();
              }
            } else if (dir === 'rtl' && (key === 'ArrowLeft' || key === 37)) {
              if(document.activeElement.classList.contains('main-menu__link--with-sub')) {
                Drupal.behaviors.mainMenu.openSubMenu(document.activeElement.nextElementSibling);
                const subMenu = document.getElementById(document.activeElement.getAttribute('aria-controls'));
                subMenu.getElementsByTagName('a').item(0).focus();
              }
            } else if (dir === 'ltr' && (key === 'Escape' || key === 'Esc' || key === 27 || key === 'ArrowLeft' || key === 37)) {
              if (document.activeElement.classList.contains('main-menu__link--with-sub') && document.activeElement.nextElementSibling.getAttribute('aria-expanded') === 'true') {
                Drupal.behaviors.mainMenu.closeSubMenu(document.activeElement.nextElementSibling);
              } else if (document.activeElement.classList.contains('main-menu__link--sub')) {
                Drupal.behaviors.mainMenu.closeSubMenu(document.activeElement.parentNode.parentNode.parentNode.previousElementSibling);
                document.activeElement.parentNode.parentNode.parentNode.previousElementSibling.previousElementSibling.focus();
              } else {
                Drupal.behaviors.mainMenu.closeMenu();
              }
            } else if (dir === 'rtl' && (key === 'Escape' || key === 'Esc' || key === 27 || key === 'ArrowRight' || key === 39)) {
              if (document.activeElement.classList.contains('main-menu__link--with-sub') && document.activeElement.nextElementSibling.getAttribute('aria-expanded') === 'true') {
                Drupal.behaviors.mainMenu.closeSubMenu(document.activeElement.nextElementSibling);
              } else if (document.activeElement.classList.contains('main-menu__link--sub')) {
                Drupal.behaviors.mainMenu.closeSubMenu(document.activeElement.parentNode.parentNode.parentNode.previousElementSibling);
                document.activeElement.parentNode.parentNode.parentNode.previousElementSibling.previousElementSibling.focus();
              } else {
                Drupal.behaviors.mainMenu.closeMenu();
              }
            }
          }
        } else {
          // desktop
          if (key === ' ' || key === 'Space' || key === 32) {
            if(document.activeElement.classList.contains('main-menu__link--with-sub')) {
              Drupal.behaviors.mainMenu.openSubMenu(document.activeElement.nextElementSibling);
              document.getElementById(document.activeElement.getAttribute('aria-controls')).getElementsByTagName('a').item(0).focus();
              e.preventDefault();
            } else if (document.activeElement.classList.contains('main-menu__link--sub')) {
              if (document.activeElement.parentNode.nextElementSibling) {
                document.activeElement.parentNode.nextElementSibling.children[0].focus();
              }
              e.preventDefault();
            }
          } else if (key === 'ArrowDown' || key === 40) {
            if(document.activeElement.classList.contains('main-menu__link--with-sub') && !document.activeElement.classList.contains('main-menu__link--sub')) {
              Drupal.behaviors.mainMenu.openSubMenu(document.activeElement.nextElementSibling);
              document.getElementById(document.activeElement.getAttribute('aria-controls')).getElementsByTagName('a').item(0).focus();
              e.preventDefault();
            } else if (document.activeElement.classList.contains('main-menu__link--sub')) {
              if (document.activeElement.parentNode.nextElementSibling) {
                document.activeElement.parentNode.nextElementSibling.children[0].focus();
              }
              e.preventDefault();
            }
          } else if (key === 'ArrowUp' || key === 38) {
            if (document.activeElement.classList.contains('main-menu__link--with-sub') && document.activeElement.nextElementSibling.getAttribute('aria-expanded') === 'true') {
              Drupal.behaviors.mainMenu.closeSubMenu(document.activeElement.nextElementSibling);
              e.preventDefault();
            } else if (document.activeElement.classList.contains('main-menu__link--sub')) {
              if (document.activeElement.parentNode.previousElementSibling) {
                document.activeElement.parentNode.previousElementSibling.children[0].focus();
              } else {
                Drupal.behaviors.mainMenu.closeSubMenu(document.activeElement.parentNode.parentNode.parentNode.previousElementSibling);
                document.activeElement.parentNode.parentNode.parentNode.previousElementSibling.previousElementSibling.focus();
              }
              e.preventDefault();
            }
          } else if (key === 'Escape' || key === 'Esc' || key === 27) {
            if (document.activeElement.classList.contains('main-menu__link--with-sub') && document.activeElement.nextElementSibling.getAttribute('aria-expanded') === 'true') {
              Drupal.behaviors.mainMenu.closeSubMenu(document.activeElement.nextElementSibling);
              e.preventDefault();
            } else if (document.activeElement.classList.contains('main-menu__link--sub')) {
              Drupal.behaviors.mainMenu.closeSubMenu(document.activeElement.parentNode.parentNode.parentNode.previousElementSibling);
              document.activeElement.parentNode.parentNode.parentNode.previousElementSibling.previousElementSibling.focus();
              e.preventDefault();
            }
          } else if (dir === 'ltr' && (key === 'ArrowRight' || key === 39)) {
            if (document.activeElement.classList.contains('main-menu__link--with-sub') && document.activeElement.getAttribute('aria-expanded') === 'true') {
              Drupal.behaviors.mainMenu.closeSubMenu(document.activeElement.nextElementSibling);
              document.activeElement.parentNode.nextElementSibling.children[0].focus();
            }
            else if (document.activeElement.parentNode.nextElementSibling && !document.activeElement.classList.contains('main-menu__link--sub')) {
              document.activeElement.parentNode.nextElementSibling.children[0].focus();
            } else if (document.activeElement.classList.contains('main-menu__link--sub') && document.activeElement.classList.contains('main-menu__link--with-sub')) {
              Drupal.behaviors.mainMenu.openSubMenu(document.activeElement.nextElementSibling);
              document.getElementById(document.activeElement.getAttribute('aria-controls')).getElementsByTagName('a').item(0).focus();
            }
          } else if (dir === 'rtl' && (key === 'ArrowLeft' || key === 37)) {
            if (document.activeElement.classList.contains('main-menu__link--with-sub') && document.activeElement.getAttribute('aria-expanded') === 'true') {
              Drupal.behaviors.mainMenu.closeSubMenu(document.activeElement.nextElementSibling);
              document.activeElement.parentNode.nextElementSibling.children[0].focus();
            }
            else if (document.activeElement.parentNode.nextElementSibling && !document.activeElement.classList.contains('main-menu__link--sub')) {
              document.activeElement.parentNode.nextElementSibling.children[0].focus();
            } else if (document.activeElement.classList.contains('main-menu__link--sub') && document.activeElement.classList.contains('main-menu__link--with-sub')) {
              Drupal.behaviors.mainMenu.openSubMenu(document.activeElement.nextElementSibling);
              document.getElementById(document.activeElement.getAttribute('aria-controls')).getElementsByTagName('a').item(0).focus();
            }
          } else if (dir === 'ltr' && (key === 'ArrowLeft' || key === 37)) {
            if (document.activeElement.classList.contains('main-menu__link--with-sub') && document.activeElement.getAttribute('aria-expanded') === 'true') {
              Drupal.behaviors.mainMenu.closeSubMenu(document.activeElement.nextElementSibling);
              document.activeElement.parentNode.previousElementSibling.children[0].focus();
            }
            else if (document.activeElement.parentNode.previousElementSibling && !document.activeElement.classList.contains('main-menu__link--sub')) {
              document.activeElement.parentNode.previousElementSibling.children[0].focus();
            }
            else if (document.activeElement.classList.contains('main-menu__link--sub-2')) {
              Drupal.behaviors.mainMenu.closeSubMenu(document.activeElement.parentNode.parentNode.parentNode.previousElementSibling);
              document.activeElement.parentNode.parentNode.parentNode.previousElementSibling.previousElementSibling.focus();
            }
          } else if (dir === 'rtl' && (key === 'ArrowRight' || key === 39)) {
            if (document.activeElement.classList.contains('main-menu__link--with-sub') && document.activeElement.getAttribute('aria-expanded') === 'true') {
              Drupal.behaviors.mainMenu.closeSubMenu(document.activeElement.nextElementSibling);
              document.activeElement.parentNode.previousElementSibling.children[0].focus();
            }
            else if (document.activeElement.parentNode.previousElementSibling && !document.activeElement.classList.contains('main-menu__link--sub')) {
              document.activeElement.parentNode.previousElementSibling.children[0].focus();
            }
            else if (document.activeElement.classList.contains('main-menu__link--sub-2')) {
              Drupal.behaviors.mainMenu.closeSubMenu(document.activeElement.parentNode.parentNode.parentNode.previousElementSibling);
              document.activeElement.parentNode.parentNode.parentNode.previousElementSibling.previousElementSibling.focus();
            }
          }
        }
      } else if (Drupal.behaviors.mainMenu.toggleButton.getAttribute('aria-expanded') === 'true' && (key === 'Escape' || key === 'Esc' || key === 27)) {
        Drupal.behaviors.mainMenu.closeMenu();
      }

    }
  },
  attach(context) {
    this.toggleButton = typeof context.getElementById === 'function' ? context.getElementById('toggle-expand') : document.getElementById('toggle-expand');
    this.nav = typeof context.getElementById === 'function' ? context.getElementById('main-nav') : document.getElementById('main-nav');
    this.context = typeof context.getElementById === 'function' ? context : document;
    if (this.toggleButton && this.nav) {
      const expandMenu = this.nav.getElementsByClassName('expand-sub');
      const mobileButton = context.getElementsByClassName('header__mobile-menu-button');
      const menuLinksWithSubs = context.getElementsByClassName('main-menu__link--with-sub');
      const menu = this.nav.getElementsByClassName('main-menu')[0];

      // Mobile Menu Show/Hide.
      this.toggleButton.addEventListener('click', (e) => {
        this.toggleMenu();
        this.alignMobileMenu();
        e.preventDefault();
      });

      context.addEventListener('keydown', this.menuKeyboardControl);

      // add menu hover events on dektop
      if (mobileButton[0] && mobileButton[0].offsetParent === null) {

        const menuButtons = context.getElementsByClassName('main-menu__item--with-sub');
        let mouseoutTimers = {};

        Array.from(menuLinksWithSubs).forEach((item,index) => {
          item.addEventListener('click', (e) => {
            e.preventDefault();
          });
        });

        Array.from(menuButtons).forEach((item,index) => {
          // position the sub menu wrapper so that it doesn't go outside the container
          if(!item.classList.contains('main-menu__item--sub')) {
            let wrapper = item.getElementsByClassName('menu-list--wrapper')[0];
            if(wrapper) {
              if(wrapper.offsetWidth + item.offsetLeft > menu.offsetWidth) {
                wrapper.style.left = (menu.offsetWidth - (item.offsetLeft + wrapper.offsetWidth)) + 'px';
              }
            }
          }
          
          mouseoutTimers[index] = null;

          item.addEventListener('mouseover', (e) => {
            clearTimeout(mouseoutTimers[index]);
            const parent1 = e.target.closest('.main-menu__item--with-sub');
            if(parent1) {
              this.openSubMenu(parent1.getElementsByClassName('expand-sub')[0]);
            }
          });
          item.addEventListener('mouseout', (e) => {
            mouseoutTimers[index] = setTimeout(function() {
              Drupal.behaviors.mainMenu.closeSubMenus(menuButtons[index]);
            }, 200);
          });
        });
      }
      else {
        // Expose mobile sub menu on click.
        Array.from(expandMenu).forEach((item) => {
          item.addEventListener('click', () => {
            this.toggleSubMenu(item);
          });
        });

        Array.from(menuLinksWithSubs).forEach((item,index) => {
          item.addEventListener('click', (e) => {
            e.preventDefault();
            this.toggleSubMenu(item.nextElementSibling);
          });
        });

        this.alignMobileMenu();
        
        window.onresize = function() {
          Drupal.behaviors.mainMenu.alignMobileMenu();
        }
      }
    }
  },
  getTopOffset(el) {
    let rect = el.getBoundingClientRect(),
    scrollTop = window.scrollY || document.documentElement.scrollTop;
    return rect.top + scrollTop;
  },
  alignMobileMenu() {
    let branding = document.getElementsByClassName('header__branding')[0];
    if(branding) {
      let branding_height = branding.offsetHeight + this.getTopOffset(branding) + 20;
      let search = document.getElementsByClassName('header__search')[0];
      let user_menu = document.getElementsByClassName('header__useraccountmenu')[0];
      
      if(search) {
        search.style.top = branding_height + 'px';
        if(search.offsetHeight > 0) {
          this.search_height = search.offsetHeight;
        }
      }
      if(user_menu) {
        user_menu.style.top = (branding_height + this.search_height) + 'px';
        if(user_menu.offsetHeight > 0) {
          let computedStyle = window.getComputedStyle(user_menu); 
          this.user_menu_height = user_menu.offsetHeight + parseInt(computedStyle.marginTop, 10) - 18;
        }
      }
      this.nav.style.top = (branding_height + this.user_menu_height) + 'px';
    }
  }
};
