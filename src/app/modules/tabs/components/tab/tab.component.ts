import { IComponentOptions, IOnInit } from 'angular';

import { TabsContainerController } from '../';

export class TabController implements IOnInit {
  tabsCtrl: TabsContainerController;
  selected: boolean;

  constructor() {
  }

  $onInit() {
    this.tabsCtrl.addTab(this);
  }
}
export const TabComponent: IComponentOptions = {
  transclude: true,
  require: {
    tabsCtrl: '^tabs-container'
  },
  controller: TabController,
  template: require('./tab.html'),
  bindings: {
    title: '@tabTitle'
  }
};
