import { IComponentOptions } from 'angular';

import { Hero } from '../../shared/hero';

interface IDeleteObj {
  hero: Hero;
}
interface IUpdateObj {
  hero: Hero;
  prop: string;
  value: string;
}


class HeroDetailsController {
  hero: Hero;
  onDelete: ( obj: IDeleteObj ) => void;
  onUpdate: ( obj: IUpdateObj ) => void;

  constructor() {
  }

  delete() {
    this.onDelete({ hero: this.hero });
  }

  update( prop: string, value: string ) {
    this.onUpdate({ hero: this.hero, prop, value });
  }
}

export const HeroDetailsComponent: IComponentOptions = {
  controller: HeroDetailsController,
  template: require('./hero-details.html'),
  bindings: {
    hero: '<',
    onDelete: '&',
    onUpdate: '&'
  }
};
