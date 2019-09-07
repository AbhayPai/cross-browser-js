export default (function () {
    var Structure = {};

    /**
     * For each with callback
     *
     * @param array
     * @param closure fn A custom callback for the loop
     */
    Structure.forEach = function (array, fn) {
        for (var i = 0; i < array.length; i++) {
            fn(array[i], i);
        }
    };

    /**
     * Check if an variable is array
     *
     * @param mixed element
     *
     * @return boolean
     */
    Structure.isArray = function (element) {
        return Object.prototype.toString.call(element) === '[object Array]';
    };

    /**
     * For each with callback
     *
     * @param string selector A valid query selector
     * @param closure fn A custom callback for the loop
     */
    Structure.forEachElement = function (selector, fn) {
        var elements = document.querySelectorAll(selector);
        for (var i = 0, len = elements.length; i < len; i++) {
            fn(elements[i], i);
        }
    };

    /**
     * Filters array with a callback
     *
     * @param array elements
     * @param closure fn A custom callback for the loop
     */
    Structure.arrayFilter = function (elements, fn) {
        var out = [];

        for (var i = elements.length; i--;) {
            if (fn(elements[i])) {
                out.unshift(elements[i]);
            }
        }

        return out;
    };

    /**
     * Filters element with a callback
     *
     * @param string selector
     * @param closure fn A custom callback for the loop
     */
    Structure.filter = function (selector, fn) {
        var elements;

        if (typeof selector === 'object') {
            elements = selector;
        } else {
            elements = document.querySelectorAll(selector);
        }

        var out = [];

        for (var i = elements.length; i--;) {
            if (fn(elements[i])) {
                out.unshift(elements[i]);
            }
        }

        return out;
    };

    /**
     * Clone objects recursively
     *
     * @paramm mixed obj
     */
    Structure.clone = function (obj) {
        if (obj === null || typeof obj !== 'object') {
            return obj;
        }

        var temp = new obj.constructor();

        for (var key in obj) {
            temp[key] = Structure.clone(obj[key]);
        }

        return temp;
    };

    /**
     * Function to check if object is empty
     *
     * @param mixed obj
     *
     * @return boolean
     */
    Structure.isEmptyObject = function (obj) {
        return Object.keys(obj).length === 0;
    };

    /**
     * Empty all the contents of an element
     *
     * @param node el
     *
     * @return boolean
     */
    Structure.empty = function (el) {
        if (typeof el.hasChildNodes !== 'undefined') {
            while (el.hasChildNodes()) {
                el.removeChild(el.lastChild);
            }
        }
    };

    /**
     * Append an element inside an element
     *
     * @param string context
     * @param node content
     */
    Structure.append = function (context, content) {
        if (typeof context.appendChild !== 'undefined') {
            context.appendChild(content);
        }
    };

    /**
     * Serializes an object to a query parameter format
     *
     * @param object
     *
     * @return string
     */
    Structure.serialize = function (object) {
        var str = [],
            key;

        for (key in object) {
            if (object.hasOwnProperty(key)) {
                var prefix = key,
                    value = object[key],
                    push;

                if (value !== null && typeof value === "object") {
                    push = Structure.serialize(value, prefix);
                } else {
                    push = encodeURIComponent(prefix) + "=" + encodeURIComponent(value);
                }

                str.push(push);
            }
        }

        return str.join("&");
    };

    /**
     * Check if an variable is in array
     *
     * @param mixed element
     *
     * @return boolean
     */
    Structure.inArray = function (key, array) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] === key) {
                return  true;
            }
        }
        return false;
    };

    return Structure;
})();
