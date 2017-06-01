import './phone-list.scss';
import { Phone } from '../../share';

class PhoneListController implements ng.IOnInit {
  private static $inject = [ '$http', 'PhoneService' ];
  public styles = require('./phone-list.scss');
  public query = '';
  public orderProp = 'name';
  public phones: Phone[] = [];

  constructor( private $http: ng.IHttpService, private PhoneService ) {
  }

  $onInit() {
    this.PhoneService.getAll(( phones: Phone[] ) => {
      this.phones = phones.map(( phone: Phone ) => {
        phone.imageUrl = `https://github.com/angular/angular-phonecat/raw/master/app/${phone.imageUrl}`;
        return phone;
      });
    });
  }

}


export const PhoneListComponent = {
  selector: 'phoneList',
  controller: PhoneListController,
  template: require('./phone-list.html')
};
