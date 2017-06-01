import { Hero } from '../shared/hero';
import { IQService } from 'angular';
import { IPromise } from 'q';

export class HeroService {
  static $inject = [ '$q' ];
  private heroes: Hero[] = [
    new Hero('Superman', 'Krypton'),
    new Hero('Batman', 'Wayne Manor')
  ];

  constructor( private $q: IQService ) {
  }

  getHeroes(): IPromise<Hero[]> {
    return this.$q(( resolve ) => {
      setTimeout(() => {
        resolve(this.heroes);
      }, 2000);
    });
  }
}
