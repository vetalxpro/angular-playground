export function sceDelegateConfig( $sceDelegateProvider: ng.ISCEDelegateProvider ) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://github.com/angular/angular-phonecat/**'
  ]);
}
sceDelegateConfig.$inject = [ '$sceDelegateProvider' ];
