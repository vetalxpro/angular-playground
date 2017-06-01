import { mock } from 'angular';
import { appModule } from '../../app.module';
import { PhoneListComponent } from './phone-list.component';

describe('PhonelistComponent', () => {

  beforeEach(mock.module(appModule.name));

  let $ctrl;
  let $httpBackend;
  const imageUrl = 'https://github.com/angular/angular-phonecat/raw/master/app/';

  beforeEach(mock.inject(( $componentController, $rootScope ) => {
    const scope = $rootScope.$new();
    $ctrl = $componentController(PhoneListComponent.selector, { $scope: scope });
  }));

  beforeEach(mock.inject(( _$httpBackend_ ) => {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('https://raw.githubusercontent.com/angular/angular-phonecat/master/app/phones/phones.json')
      .respond([ { name: 'Nexus S', imageUrl: '' }, { name: 'Motorola DROID', imageUrl: '' } ]);
  }));


  it('should defined', () => {
    expect($ctrl).toBeDefined();
  });

  it('should set a default value for the `orderProp` model', () => {
    expect($ctrl.orderProp).toBe('name');
  });
  it('should create a `phones` property with 2 phones fetched with `$http`', () => {
    expect($ctrl.phones).toEqual([]);
    $ctrl.$onInit();
    $httpBackend.flush();
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
    expect($ctrl.phones).toEqual(jasmine.arrayContaining([ { name: 'Nexus S', imageUrl }, {
      name: 'Motorola DROID',
      imageUrl
    } ]));
  });
});
