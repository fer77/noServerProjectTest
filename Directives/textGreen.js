angular.module('myApp').directive('textGreen', function () {
    return {
        restrict: 'A',
        scope: {
        },
        link: function postLink (scope, elem, attrs) {
            elem.hover(function() {
                elem.css('color', 'green')
            }, function() {
                elem.css('color', 'white')
            });
        }
    }
})
