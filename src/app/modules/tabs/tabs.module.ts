import { IModule, module } from 'angular';

import { TabsContainerComponent, TabComponent } from './components';
import { selectors } from './tabs.constants';


export const TabsModule: IModule = module('TabsModule', [])
  .component(selectors.tabsContainer, TabsContainerComponent)
  .component(selectors.tab, TabComponent);
