import { ui } from 'angular';

import { PhoneListComponent, PhoneDetailComponent } from './components';
import { selectors } from './app.constants';

export const appRoutes = ( $stateProvider: ui.IStateProvider, $urlRouterProvider: ui.IUrlRouterProvider ) => {
  $urlRouterProvider.otherwise('/test');

  $stateProvider
    .state('phones', {
      url: '/phones',
      component: PhoneListComponent.selector
    })
    .state('phoneDetails', {
      url: '/phones/:phoneId',
      component: PhoneDetailComponent.selector,
      resolve: {
        phoneId: phoneIdResolver
      }
    })
    .state('test', {
      url: '/test',
      component: selectors.test
    });
};
function phoneIdResolver( $transition$ ) {
  return $transition$.params().phoneId;
}
phoneIdResolver.$inject = [ '$transition$' ];
appRoutes.$inject = [ '$stateProvider', '$urlRouterProvider' ];
