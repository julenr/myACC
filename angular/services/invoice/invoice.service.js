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
            .then(function (data) {
                return data.data;
            })
            .catch(function () {
                if (__DEV__) {
                    return {
                        firstName: 'Fake Name',
                        address: {
                            addressLine1: 'Fake address'
                        }
                    };
                }
            });
    }

    validateVendor(vendorId = ' ') {
        const req = {
            method: 'POST',
            url: `${this.$location.protocol()}://${this.$location.host()}/api/invoicing/validateVendorId`,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            data: {
              vendorId,
              organisationId: window.globalOrganisationId || '',
              correlationId: this.generateCorrelationId(),
              type: this.getFormType()
            }
        };

        if (__DEV__) {
          console.info(`Developing mode. Fake backend call to check VendorId: ${vendorId}`);
          /*** Uncomment or comment the line below if invalid VendorId is the behaviour expected ***/
          // return Promise.reject();
          /*** Uncomment or comment this line if invalid VendorId is the behaviour expected ***/
          return Promise.resolve();
        }

        return this.$http(req)
          .then(function (data, status) {
            if (!data.data.payload.authorised) {
              return Promise.reject();
            }
          });


    }

    sendInvoice(invoiceModel) {
        invoiceModel.correlationId = this.generateCorrelationId();
        invoiceModel.type = this.getFormType();

        // Temporary: splitting hours and minutes until UI is fixed
        invoiceModel.treatmentDetails = invoiceModel.treatmentDetails.map(function(treatmentDetail) {
            treatmentDetail.hours = treatmentDetail.time.split(':')[0];
            treatmentDetail.minutes = treatmentDetail.time.split(':')[1];
            return treatmentDetail;
        });

        console.log('MODEL ', invoiceModel);

        const req = {
            method: 'POST',
            url: `${this.$location.protocol()}://${this.$location.host()}/api/invoicing/invoices`,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            data: invoiceModel
        };

        var localUrl = `${this.$location.protocol()}://${this.$location.host()}:8090/api/invoicing/invoices`;
        var $http = this.$http;

        if (__DEV__) {
            console.log('You are running DEV mode. make sure a local back end server is running on ' + localUrl);
            req.url = localUrl;
            return $http(req)
                .then(function (data, status) {
                    console.log('Status: ', status, ' DATA: ', data);
                })
        } else {
            return $http(req)
                .then(function (data, status) {
                    console.log('Status: ', status, ' DATA: ', data);
                })
                .catch(function (response) {

                });
        }
    }

    generateCorrelationId() {
        return Math.floor(Math.random() * 1000000000000000);
    }

    getFormType() {
        return "ACC47e";
    }

}