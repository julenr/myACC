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
      types: ['input', 'datePicker', 'textarea', 'timepicker'],
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
        jQuery('.input-group.date').datepicker({
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
        jQuery('.input-group.date').datepicker().on('show', (target) => {
          const elementID = target.currentTarget.firstElementChild.id;
          scope.form[elementID].$setTouched();
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
      name: 'timepicker',
      link: function(scope) {
        jQuery('.form-control.time-picker').timepicker({
          minuteStep: 5,
          template: 'dropdown',
          showMeridian: false,
          defaultTime: '00:00'
        });
      },
      template: `<div class="input-group bootstrap-timepicker timepicker" component-id="{{options.key}}">
                    <input type="text" 
                           class="form-control time-picker"
                           ng-model="model[options.key]"
                    >
                  </div>`,
      wrapper: ['bootstrapLabel', 'bootstrapHasError']
    });

    formlyConfig.setType({
      name: 'treatmentDetail',
      template: `<!--loop through each element in model array-->
                  <div class="repeatsection" ng-repeat="element in model[options.key]" ng-init="fields=copyFields(to.fields, $index)">
                       <!--<h3>Concept&nbsp;{{$index + 1}}</h3>-->
                      <formly-form fields="fields" model="element" form="form"></formly-form>
                      <div class="repeatsection-buttons">
                          <!--<button type="button" class="btn btn-sm btn-danger" ng-click="model[options.key].splice($index, 1)">-->
                              <!--Remove-->
                          <!--</button>-->
                          <!--<button type="button" class="btn btn-sm btn-primary" ng-click="addNew(true)" >Duplicate</button>-->
                      </div>
                      <div class="clearfix"></div>
                  </div>
                  <!--<p class="AddNewButton">-->
                      <!--<button type="button" class="btn btn-primary" ng-click="addNew(false)" >{{to.btnText}}</button>-->
                  <!--</p>-->
                 `,
      controller: function ($scope){
        'ngInject';
        $scope.formOptions = {formState: $scope.formState};
        $scope.addNew = addNew;
        $scope.copyFields = copyFields;

        function copyFields(fields, index) {
          fields = angular.copy(fields);
          fields = fields[0].fieldGroup.map((field, idx)=> {
            field.id = `${field.key}_${index}`;
            return field;
          });
          return fields;
        }

        function addNew(duplicate = false) {
          $scope.model[$scope.options.key] = $scope.model[$scope.options.key] || [];
          var repeatsection = $scope.model[$scope.options.key];
          var lastSection = repeatsection[repeatsection.length - 1];
          var newsection = {};
          if(duplicate) {
            newsection = angular.copy(lastSection);
          }
          repeatsection.push(newsection);
        }
      }
    });
  })
  .controller('RootController', RootController)
  .name;