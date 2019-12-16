angular.module('fish-pond')
.component('fishTable', {
  bindings: {
    fishes: '<'
  },
  template: `
    <div>
      <fish-table-row ng-repeat="fish in $ctrl.fishes" track by index fish="fish"></fish-table-row>
      </div>`
});