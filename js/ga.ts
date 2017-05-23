
// German law privacy protection.
var gaProperty = 'UA-98260474-1';
var disableStr = 'ga-disable-' + gaProperty;
if (document.cookie.indexOf(disableStr + '=true') > -1) {
    window[disableStr] = true;
}
function gaOptout() {
    document.cookie = disableStr + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
    window[disableStr] = true;
}

// Official google script

var ga: any;

(function(i,s,o,g,r){
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = new Date().getMilliseconds();
    var a: any =s.createElement(o);
    var m: any =s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a,m);
}) (window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-98260474-1', 'auto');
ga('set', 'anonymizeIp', true);
ga('send', 'pageview');
