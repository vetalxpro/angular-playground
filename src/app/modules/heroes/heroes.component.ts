import { IComponentOptions, IOnInit } from 'angular';

import { Hero } from './shared/hero';
import { HeroService } from './services';

class HeroesController implements IOnInit {
  static $inject = [ 'HeroService' ];
  isAddMode = false;
  heroes: Hero[];

  constructor( private heroService: HeroService ) {
  }

  $onInit() {
    this.heroService.getHeroes()
      .then(( heroes: Hero[] ) => {
        this.heroes = heroes;
      });
  }

  enableAddMode() {
    this.isAddMode = true;
  }

  addHero( name: string, location: string ) {
    this.heroes.push(new Hero(name, location));
    this.isAddMode = false;
  }

  cancelAdd() {
    this.isAddMode = false;
  }
}

export const HeroesComponent: IComponentOptions = {
  controller: HeroesController,
  template: require('./heroes.html')
};
