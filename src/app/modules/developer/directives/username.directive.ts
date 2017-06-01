import { IDirective } from 'angular';

export function usernameDirective(): IDirective {
  return {
    restrict: 'A',
    scope: {
      username: '='
    },
    template: `<h3>{{ username }}</h3>`
  };
}
