export default (function () {
    var Str = {};

    /**
     * Removes trailing whitespaces from a string
     *
     * @param string
     *
     * @return string
     */
    Str.trim = function (string) {
        if (typeof string === 'string') {
            if (typeof String.prototype.trim !== 'function') {
                // Check if the "trim" functionality exist, if not, use regex. For IE 7-8
                return string.replace(/^\s+|\s+$/g, '');
            } else {
                return string.trim();
            }
        }

        return string;
    };

    /**
     * Replace special tokens in a string
     *
     * @param obj map
     * @param string
     *
     * @return string
     */
    Str.replaceStringTokens = function (map, string) {
        if (typeof map === 'object') {
            for (var i in map) {
                string = string.replace(i + '', map[i]);
            }
        }

        return string;
    };

    /**
     * Helper function to get ASCII sum of string
     */
    Str.getAsciiSum = function (string) {
        var sum = 0,
            str_arr = string.split('');

        for (var i in str_arr) {
            sum += string.charCodeAt(parseInt(i));
        }

        return sum;
    };

    return Str;
})();
