import './phone-details.scss';

class PhoneDetailController implements ng.IOnInit {
  static $inject = [ '$http', 'PhoneService' ];
  public styles = require('./phone-details.scss');
  public phoneId: string;
  public phoneDetails: any;
  public mainImageUrl: string;

  constructor( private $http: ng.IHttpService, private PhoneService ) {
  }

  $onInit() {
    if ( this.phoneId ) {
      this.PhoneService.get({ phoneId: this.phoneId }, ( phoneDetails ) => {
        phoneDetails.images = phoneDetails.images.map(( img ) => {
          return img = `https://github.com/angular/angular-phonecat/raw/master/app/${img}`;
        });
        this.phoneDetails = phoneDetails;
        this.setImage(phoneDetails.images[ 0 ]);
      });
    }
  }

  public setImage( imageUrl: string ) {
    this.mainImageUrl = imageUrl;
  }
}

export const PhoneDetailComponent = {
  selector: 'phoneDetails',
  controller: PhoneDetailController,
  template: require('./phone-details.html'),
  bindings: {
    phoneId: '<'
  }
};
