import { ui } from 'angular';
export function developerRun( $state: ui.IStateService ) {
  $state.go('developer.childone');
}

developerRun.$inject = [ '$state' ];
