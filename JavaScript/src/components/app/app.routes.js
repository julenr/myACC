export default function routes($stateProvider) {
    $stateProvider
        .state('app', {
            url: '/',
            menu: 'Home',
            template: require('./app.html'),
            controller: 'AppController',
            controllerAs: 'app'
        });
}