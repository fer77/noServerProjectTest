angular.module('myApp').directive('textRed', function () {
    return {
        restrict: 'A',
        scope: {},
        link: function postLink(scope, elem, attrs) {
            elem.hover(function () {
                elem.css('color', 'red')
            }, function () {
                elem.css('color', 'white')
            });
        }
    }
})
