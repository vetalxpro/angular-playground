import { module } from 'angular';

import { AppComponent } from './app.component';
import { materialConfig, sceDelegateConfig, routesConfig } from './config';
import { appRoutes } from './app.routes';
import { PhoneListComponent, PhoneDetailComponent, TestComponent } from './components';
import { CoreModule, DeveloperModule, HeroModule, TabsModule } from './modules';
import { selectors } from './app.constants';


export const appModule = module('AppModule', [
  'ui.router',
  'ngAnimate',
  'ngMaterial',
  CoreModule.name,
  DeveloperModule.name,
  HeroModule.name,
  TabsModule.name
]).component(AppComponent.selector, AppComponent)
  .component(PhoneListComponent.selector, PhoneListComponent)
  .component(PhoneDetailComponent.selector, PhoneDetailComponent)
  .component(selectors.test, TestComponent)
  .config(sceDelegateConfig)
  .config(materialConfig)
  .config(routesConfig)
  .config(appRoutes);
