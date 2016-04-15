//
//
//              Created by
//            __ _____ __    _____ _____    _____ _____    __ _____
//         __|  |  |  |  |  |   __|   | |  | __  |     |__|  |     |
//        |  |  |  |  |  |__|   __| | | |  |    -|  |  |  |  |  |  |
//        |_____|_____|_____|_____|_|___|  |__|__|_____|_____|_____|
//
//                on 11/03/2016
//                   isusk246@gmail.com
//
//

export default class InvoiceService {
  /*@ngInject*/
  constructor($http, $location) {
    this.$http = $http;
    this.$location = $location;
  }

  getInvoice(id) {
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

  sendInvoice(invoiceModel) {
    // console.log(`${this.$location.protocol()}://${this.$location.host()}/api/invoicing`);
    const req = {
      method: 'POST',
      url: `${this.$location.protocol()}://${this.$location.host()}/api/invoicing`,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      data: invoiceModel
    };

    return this.$http(req)
      .then(function(data, status) {
        console.log('Status: ', status, ' DATA: ', data);
      })
      .catch(function (response) {
        if(__DEV__) {
          console.info('NO BACKEND IN LOCAL DEVELOPING MODE. Response: ', response);
        }
      });
  }

  sendLogInfo(logData) {

    // "details": {
    //   "application": "provider invoicing",
    //     "userAgent": "Chrome",
    //     "userId": "Julen"
    // }


    // http://kdcvkm5055:9083/api/invoicing/logClientSideError
    // const req = {
    //   method: 'POST',
    //   url: `${window.env.apiHost}/api/invoicing/invoices`,
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Accept: 'application/json'
    //   },
    //   data: invoiceModel
    // };
    //
    // return this.$http.post(req)
    //   .then(function(data, status) {
    //     console.log('Status: ', status, ' DATA: ', data);
    //   })
    //   .catch(function (response) {
    //     if(__DEV__) {
    //       console.info('NO BACKEND IN LOCAL DEVELOPING MODE. Response: ', response);
    //     }
    //   });
  }

}

