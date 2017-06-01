import { module } from 'angular';
import { HeroesComponent } from './heroes.component';
import { heroRoutes } from './heroes.routes';
import {
  HeroListComponent,
  HeroDetailsComponent,
  HeroEditableFieldComponent,
  HeroAddFormComponent
} from './components';
import { selectors } from './heroes.constants';
import { HeroService } from './services';

export const HeroModule = module('HeroesModule', [])
  .component(selectors.heroes, HeroesComponent)
  .component(selectors.heroesList, HeroListComponent)
  .component(selectors.heroDetails, HeroDetailsComponent)
  .component(selectors.heroEditableField, HeroEditableFieldComponent)
  .component(selectors.heroAddForm, HeroAddFormComponent)
  .service('HeroService', HeroService)
  .config(heroRoutes);
