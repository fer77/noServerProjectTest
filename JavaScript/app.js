angular.module('myApp', ['ngAnimate', 'ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('about', {
        url: '/about',
        templateUrl: 'Menu/aboutTmpl.html',
        controller: 'aboutCtrl'
    })
    
//    .state('about', {
//        url: '/about',
//        template: '<about-page></about-page>,
//    })
    
    .state('blog', {
        url: '/blog',
        templateUrl: 'Menu/blogTmpl.html',
        controller: 'blogCtrl'
    })
    
    .state('help', {
        url: '/help',
        templateUrl: 'Menu/helpTmpl.html',
        controller: 'helpCtrl'
    })
    
    .state('contact', {
        url: '/contact',
        templateUrl: 'Menu/contactTmpl.html',
        controller: 'contactCtrl'
    })
    
    .state('home', {
        url: '/home',
        template: ''
    })
    
    $urlRouterProvider.otherwise('/home');
})

