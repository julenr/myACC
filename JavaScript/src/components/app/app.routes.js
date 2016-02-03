export default function routes($stateProvider) {
    $stateProvider
        .state('app', {
            url: '/',
            template: require('./app.html'),
            controller: 'AppController',
            controllerAs: 'app'
        });
}