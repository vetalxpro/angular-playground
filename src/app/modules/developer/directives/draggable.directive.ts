import { IAugmentedJQuery, IDirective, IDocumentService, IScope } from 'angular';

export function draggableDirective( $document: IDocumentService ): IDirective {

  function linkFunc( scope: IScope,
                     element: IAugmentedJQuery ) {
    let startX = 0;
    let startY = 0;
    let x = 0;
    let y = 0;

    element.css({
      position: 'relative',
      padding: '10px',
      border: '1px solid blue',
      borderRadius: '5px',
      boxShadow: '0 0 3px 1px black',
      backgroundColor: '#ffffff',
      cursor: 'pointer'
    });

    element.on('mousedown', mousedown);

    function mousedown( e ) {
      e.preventDefault();
      startX = e.pageX - x;
      startY = e.pageY - y;
      $document.on('mousemove', mousemove);
      $document.on('mouseup', mouseup);
    }

    function mousemove( e ) {
      x = e.pageX - startX;
      y = e.pageY - startY;
      element.css({
        left: `${x}px`,
        top: `${y}px`
      });
    }

    function mouseup() {
      $document.off('mousemove', mousemove);
      $document.off('mouseup', mouseup);
    }

  }

  return {
    restrict: 'A',
    link: linkFunc
  };
}
draggableDirective.$inject = [ '$document' ];
