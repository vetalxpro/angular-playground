import { IComponentOptions, forEach } from 'angular';
import './tabs-container.scss';

import { TabController } from '../';

export class TabsContainerController {
  tabs: TabController[] = [];

  constructor() {
  }

  addTab( tab: TabController ) {
    if ( this.tabs.length === 0 ) {
      this.select(tab);
    }
    this.tabs.push(tab);
  }

  select( tab: TabController ) {
    forEach(this.tabs, ( item: TabController ) => {
      item.selected = false;
    });
    tab.selected = true;
  }
}

export const TabsContainerComponent: IComponentOptions = {
  transclude: true,
  controller: TabsContainerController,
  template: require('./tabs-container.html')
};
