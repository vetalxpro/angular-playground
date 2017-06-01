export function PhoneService( $resource ) {
  return $resource('https://raw.githubusercontent.com/angular/angular-phonecat/master/app/phones/:phoneId.json', {}, {
    getAll: {
      method: 'GET',
      params: { phoneId: 'phones' },
      isArray: true
    }
  });
}
PhoneService.$inject = [ '$resource' ];
