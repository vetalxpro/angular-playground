import {
  IAttributes,
  IAugmentedJQuery,
  IDirective,
  IDirectiveLinkFn,
  IFilterDate,
  IIntervalService, ILogService,
  IScope
} from 'angular';

export function currentTime( $interval: IIntervalService,
                             dateFilter: IFilterDate,
                             $log: ILogService ): IDirective {

  const link: IDirectiveLinkFn = ( scope: IScope,
                                   element: IAugmentedJQuery,
                                   attrs: IAttributes ) => {
    let timeoutId;
    let format;

    const colors = [ 'red', 'green', 'blue', 'yellow' ];
    const span = element.find('span');
    span.css('transition', '0.8s color');

    const updateTime = () => {
      span.text(dateFilter(new Date(), format));
      span.css('color', colors[ Math.floor(Math.random() * colors.length) ]);
      // $log.info(new Date());
    };

    scope.$watch(attrs.currentTime, ( value ) => {
      format = value;
      updateTime();
    });
    element.on('$destroy', () => {
      $interval.cancel(timeoutId);
    });
    timeoutId = $interval(() => {
      updateTime();
    }, 1000);
  };

  return {
    link,
    transclude: true,
    template: `<div ng-transclude></div><span></span>`
  };
}

currentTime.$inject = [ '$interval', 'dateFilter', '$log' ];
