
// The hamburger menu.
// See https://purecss.io/layouts/side-menu/
(function(window, document) {
    var layout = document.getElementById('layout');
    var menu = document.getElementById('menu');
    var menuLink = document.getElementById('menuLink');
    var content = document.getElementById('main');

    function toggleClass(element: any, className: any) {
        var classes = element.className.split(/\s+/),
            length = classes.length,
            i = 0;

        for (; i < length; i++) {
          if (classes[i] === className) {
            classes.splice(i, 1);
            break;
          }
        }
        // The className is not found
        if (length === classes.length) {
            classes.push(className);
        }

        element.className = classes.join(' ');
    }

    function toggleAll(e: any) {
        var active = 'active';

        e.preventDefault();
        toggleClass(layout, active);
        toggleClass(menu, active);
        toggleClass(menuLink, active);
    }

    menuLink.onclick = function(e: any) {
        toggleAll(e);
    };

    content.onclick = function(e: any) {
        if (menu.className.indexOf('active') !== -1) {
            toggleAll(e);
        }
    };

}(this, this.document));
