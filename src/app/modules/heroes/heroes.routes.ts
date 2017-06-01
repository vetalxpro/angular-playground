import { IStateProvider } from 'angular-ui-router';
import { selectors } from './heroes.constants';

export function heroRoutes( $stateProvider: IStateProvider ) {
  $stateProvider
    .state('hero', {
      url: '/heroes',
      component: selectors.heroes
    });

}
