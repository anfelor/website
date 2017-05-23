var gaProperty = 'UA-98260474-1';
var disableStr = 'ga-disable-' + gaProperty;
if (document.cookie.indexOf(disableStr + '=true') > -1) {
    window[disableStr] = true;
}
function gaOptout() {
    document.cookie = disableStr + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
    window[disableStr] = true;
}
var ga;
(function (i, s, o, g, r) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments);
    }, i[r].l = new Date().getMilliseconds();
    var a = s.createElement(o);
    var m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-98260474-1', 'auto');
ga('set', 'anonymizeIp', true);
ga('send', 'pageview');
(function (window, document) {
    var layout = document.getElementById('layout');
    var menu = document.getElementById('menu');
    var menuLink = document.getElementById('menuLink');
    var content = document.getElementById('main');
    function toggleClass(element, className) {
        var classes = element.className.split(/\s+/), length = classes.length, i = 0;
        for (; i < length; i++) {
            if (classes[i] === className) {
                classes.splice(i, 1);
                break;
            }
        }
        if (length === classes.length) {
            classes.push(className);
        }
        element.className = classes.join(' ');
    }
    function toggleAll(e) {
        var active = 'active';
        e.preventDefault();
        toggleClass(layout, active);
        toggleClass(menu, active);
        toggleClass(menuLink, active);
    }
    menuLink.onclick = function (e) {
        toggleAll(e);
    };
    content.onclick = function (e) {
        if (menu.className.indexOf('active') !== -1) {
            toggleAll(e);
        }
    };
}(this, this.document));
//# sourceMappingURL=main.js.map