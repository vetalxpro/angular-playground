import { IComponentOptions } from 'angular';
class TestController {
  constructor() {

  }
}

export const TestComponent: IComponentOptions = {
  controller: TestController,
  template: require('./test.html')
};
