import angular from 'angular';
import formly from 'angular-formly';
import uirouter from 'angular-ui-router';
import ngMessages from 'angular-messages';
import formlyTemplateBootstrap from 'angular-formly-templates-bootstrap';
import moment from 'moment';

import routing from './root.routes';
import RootController from './root.controller';

const validDateFormats = ['DD/MM/YYYY', 'DD-MM-YYYY', 'DD.MM.YYYY', 'DD.MM.YY', 'DD/MM/YY', 'DD-MM-YY'];

export default angular.module('root',
  [
    uirouter, formly, formlyTemplateBootstrap, ngMessages
  ])
  .config(routing)
  .run(function(formlyConfig, formlyValidationMessages) {
    'ngInject';
    formlyConfig.extras.errorExistsAndShouldBeVisibleExpression = 'fc.$touched || form.$submitted';
    formlyValidationMessages.addStringMessage('required', 'This field is required');

    formlyConfig.setWrapper({
      name: 'validation',
      types: ['input', 'datePicker', 'textarea'],
      template: `<formly-transclude></formly-transclude>
        <div class="my-messages" ng-messages="fc.$error" ng-if="form.$submitted || options.formControl.$touched">
          <div id="{{options.id + 'error'}}" class="some-message" ng-message="{{ ::name }}" ng-repeat="(name, message) in ::options.validation.messages">
            {{message(fc.$viewValue, fc.$modelValue, this)}}
          </div>
        </div>
        <div id="{{options.id + 'info'}}" class="info" ng-show="options.data.showInfo"><div class="some-message info">{{to.info}}</div></div>
        `
    });

    formlyConfig.setType({
      name: 'datePicker',
      defaultOptions: {
        templateOptions: {
          onBlur: function (viewValue = '', modelValue, scope) {
            if(moment(viewValue, validDateFormats, true).isValid()) {
              scope.model[modelValue.key] = moment(viewValue, validDateFormats, true).format('DD/MM/YYYY');
            }
          }
        },
        validators: {
          checkValidDate: {
            expression: function(viewValue = '', modelValue, scope) {
              if(viewValue === '') return true;
              return (moment(viewValue, validDateFormats, true).isValid()) ? true : false;
            },
            message: '"The date must be a valid \'dd/mm/yyyy\' format"'
          }
        }
      },
      link: function(scope) {
        $('.input-group.date').datepicker({
          format: 'dd/mm/yyyy',
          daysOfWeekHighlighted: '0',
          autoclose: true,
          weekStart: 1,
          todayBtn: true,
          todayHighlight: true,
          forceParse: true,
          endDate: moment().format('DD/MM/YYYY'),
          showOnFocus: false,
          assumeNearbyYear: true
        });
        //Force to set Touched flag when the date cames from datepicker otherwise it remains untouched
        $('.input-group.date').datepicker().on('show', (target) => {
          scope.form[target.currentTarget.attributes['component-id'].value].$setTouched();
        });
      },
      controller: function ($scope, $timeout){
        'ngInject';
        $scope.onPaste = function () {
          $timeout(function(){
            $scope.model[$scope.id] = document.getElementById($scope.id).value;
          },0);
        };
      },
      template: `<div class="input-group date" data-provide="datepicker" component-id="{{options.key}}">
                  <input type="text"
                    ng-model="model[options.key]"
                    value="{{to.value}}"
                    class="form-control"
                    maxlength="10"
                    ng-Paste="onPaste()"
                  >
                  <div class="input-group-addon">
                    <span class="glyphicon glyphicon-calendar"></span>
                  </div>
                </div>`,
      wrapper: ['bootstrapLabel', 'bootstrapHasError']
    });

    formlyConfig.setType({
      name: 'treatmentDetail',
      template: `<div>
                  <!--loop through each element in model array-->
                  <div class="{{hideRepeat}}">
                    <div class="repeatsection" ng-repeat="element in model[options.key]" ng-init="fields = copyFields(to.fields)">
                    <formly-form fields="to.fields" model="element" form="form">
                    </formly-form>
                    <div style="margin-bottom:20px;">
                    <button type="button" class="btn btn-sm btn-danger" ng-click="model[options.key].splice($index, 1)">
                    Remove
                    </button>
                    </div>
                    <hr>
                    </div>
                    <p class="AddNewButton">
                    <button type="button" class="btn btn-primary" ng-click="addNew()" >{{to.btnText}}</button>
                  </p>
                </div>`,
      controller: function ($scope){
        'ngInject';
        function addNew() {
          $scope.model[$scope.options.key] = $scope.model[$scope.options.key] || [];
          var repeatsection = $scope.model[$scope.options.key][0];
          repeatsection.push(repeatsection);
        }
      }
    });
  })
  .controller('RootController', RootController)
  .name;