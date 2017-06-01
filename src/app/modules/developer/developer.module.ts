import { module } from 'angular';

import { DeveloperComponent } from './developer.component';
import { ChildoneComponent, ChildtwoComponent } from './components';
import { developerRoutes } from './developer.routes';
// import { developerRun } from './developer.run';
import { usernameDirective, currentTime, draggableDirective, alignDirective } from './directives';

export const DeveloperModule = module('DeveloperModule', [])
  .component(DeveloperComponent.selector, DeveloperComponent)
  .component(ChildoneComponent.selector, ChildoneComponent)
  .component(ChildtwoComponent.selector, ChildtwoComponent)
  .directive('username', usernameDirective)
  .directive('currentTime', currentTime)
  .directive('appDraggable', draggableDirective)
  .directive('appAlign', alignDirective)
  .config(developerRoutes);
// .run(developerRun);
