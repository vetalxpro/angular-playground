import { module } from 'angular';
import { checkmarkFilter } from './filters';
import { PhoneService } from './services';

export const CoreModule = module('CoreModule', [
  'ngResource'
])
  .factory('PhoneService', PhoneService)
  .filter(checkmarkFilter.name, checkmarkFilter.filter);
