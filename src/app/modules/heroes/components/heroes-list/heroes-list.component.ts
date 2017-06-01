import { IComponentOptions } from 'angular';

import './heroes-list.scss';
import { Hero } from '../../shared/hero';

class HeroListController {
  heroes: Hero[];

  constructor() {
  }

  updateHero( hero: Hero, prop: string, value: string ) {
    hero[ prop ] = value;
  }

  deleteHero( hero: Hero ) {
    const index = this.heroes.indexOf(hero);
    if ( index > -1 ) {
      this.heroes.splice(index, 1);
    }
  }

}

export const HeroListComponent: IComponentOptions = {
  controller: HeroListController,
  template: require('./heroes-list.html'),
  bindings: {
    heroes: '<'
  }
};
