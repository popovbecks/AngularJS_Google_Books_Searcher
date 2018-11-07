angular.module('libraryApp').filter('dotsFilter', [
    '$filter',
    function ($filter) {
        /**
         * Shorten the input and add dots if it's needed filter
         * @param {string} input 
         * @param {number} limit
         */
        function dotsFilter(input, limit) {
            var newContent = $filter('limitTo')(input, limit);
            if (newContent.length < input.length) {
                newContent += '...';
            }
            return newContent;
        }

        return dotsFilter;
    }
]);