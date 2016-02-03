export default function routes($stateProvider) {
    $stateProvider
        .state('businessCustomer', {
            url: '/businessCustomer',
            menu: 'Business Customer',
            template: require('./businessCustomer.jade'),
            controller: 'BusinessCustomerController',
            controllerAs: 'businessCustomer'
        });
}
