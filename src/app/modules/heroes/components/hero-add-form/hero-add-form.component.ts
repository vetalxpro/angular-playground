import { IComponentOptions } from 'angular';


interface IAddObj {
  name: string;
  location: string;
}

class HeroAddController {
  heroName = '';
  heroLocation = '';
  onAdd: ( obj: IAddObj ) => void;
  onCancel: () => void;

  constructor() {

  }

  addHero() {
    this.onAdd({ name: this.heroName, location: this.heroLocation });
  }

  cancel() {
    this.onCancel();
  }
}

export const HeroAddFormComponent: IComponentOptions = {
  controller: HeroAddController,
  template: require('./hero-add-form.html'),
  bindings: {
    onAdd: '&',
    onCancel: '&'
  }
};
