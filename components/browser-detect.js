export default (function () {
    var Browser = {};

    /*
     * is used for testing purpose
     */
    Browser.test = function () {
        return 'test Browser';
    };

    /*
     * will return true if browser is Opera
     */
    Browser.isOpera = function () {
        var detectOpera = false;

        if((!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0) {
            detectOpera = true;
        }

        return detectOpera;
    };

    /*
     * will return true if browser is Mozila Firefox
     */
    Browser.isFirefox = function () {
        var detectFirefox = false;

        if(typeof InstallTrigger !== 'undefined') {
            detectFirefox = true;
        }

        return detectFirefox;
    };

    /*
     * will return true if browser is Internet Explorer
     */
    Browser.isIE = function () {
        var detectIE = false;

        if(/*@cc_on!@*/false || !!document.documentMode) {
            detectIE = true;
        }

        return detectIE;
    };

    /*
     * will return true if browser is Edge
     */
    Browser.isEdge = function () {
        var detectEdge = false;

        if((!/*@cc_on!@*/false || !!document.documentMode) && !!window.StyleMedia) {
            detectEdge = true;
        }

        return detectEdge;
    };

    /*
     * will return true if browser is Google Chrome
     */
    Browser.isChrome = function () {
        var detectChrome = false;

        if(!!window.chrome && !!window.chrome.webstore) {
            detectChrome = true;
        }

        return detectChrome;
    };

    return Browser;
})();
