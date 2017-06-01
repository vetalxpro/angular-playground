/*
import { mock } from 'angular';
import { appModule } from '../../app.module';
import { PhoneDetailComponent } from './phone-details.component';

describe('PhonelistComponent', () => {

  beforeEach(mock.module(appModule.name));

  let $ctrl;
  let $httpBackend;
  let $state;
  let currrentState;
  let phoneId;

  beforeEach(mock.inject(( $componentController, $rootScope ) => {
    const scope = $rootScope.$new();
    phoneId = 'xyz';
    $ctrl = $componentController(PhoneDetailComponent.selector, { $scope: scope });
  }));

  beforeEach(mock.inject(( _$httpBackend_ ) => {
    $httpBackend = _$httpBackend_;

    $httpBackend.expectGET(`https://raw.githubusercontent.com/angular/angular-phonecat/master/app/phones/${phoneId}.json`)
      .respond();
  }));

  it('should defined', () => {
    expect($ctrl).toBeDefined();
  });

  it('should set a default value for the `orderProp` model', () => {
    expect($ctrl.orderProp).toBe('age');
  });

  it('should create a `phones` property with 2 phones fetched with `$http`', () => {
    expect($ctrl.phones).toEqual();
    $ctrl.$onInit();
    $httpBackend.flush();
    expect($ctrl.phones).toEqual();
  });
});

*/
