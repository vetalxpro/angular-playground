import { ui } from 'angular';
import { ChildoneComponent, ChildtwoComponent } from './components';
import { DeveloperComponent } from './developer.component';

export function developerRoutes( $stateProvider: ui.IStateProvider ) {
  $stateProvider
    .state('developer', {
      abstract: true,
      component: DeveloperComponent.selector
    })
    .state('developer.childone', {
      url: '/developer/child-one',
      component: ChildoneComponent.selector
    })
    .state('developer.childtwo', {
      url: '/developer/child-two',
      component: ChildtwoComponent.selector
    });
}
developerRoutes.$inject = [ '$stateProvider' ];
