export default class CustomerService {
  /*@ngInject*/
  constructor($http) {
    this.$http = $http;
  }

  getCustomer(id) {
    return this.$http.get(`${window.env.apiHost}/json/customer/${id}`)
      .then(function(data) {
        return data.data;
      })
      .catch(function (response) {
        if(__DEV__) {
          return {
            firstName:'Fake Name',
            address: {
              addressLine1: 'Fake address'
            }
          };
        }
      });
  }
}

