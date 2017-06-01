import { IAttributes, IAugmentedJQuery, IDirective, IScope } from 'angular';

export function alignDirective(): IDirective {

  function linkFunc( scope: IScope,
                     element: IAugmentedJQuery,
                     attrs: IAttributes ) {
    scope.$watch(attrs.appAlign, ( value: string = attrs.appAlign ) => {
      setAlign(value);
    });
    function setAlign( align: string ) {
      element.css({
        textAlign: align || 'left'
      });
    }

    setAlign(attrs.appAlign);
  }


  return {
    restrict: 'A',
    link: linkFunc
  };
}
