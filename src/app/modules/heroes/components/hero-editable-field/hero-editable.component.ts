import { IComponentOptions, IOnInit } from 'angular';


interface IUpdateObj {
  value: string;
}

class HeroEditableFieldController implements IOnInit {
  editMode = false;
  fieldValue: string;
  fieldValueCopy: string;
  fieldType: string;
  onUpdate: ( obj: IUpdateObj ) => void;

  constructor() {
  }

  handleModeChange() {
    if ( this.editMode ) {
      this.onUpdate({ value: this.fieldValue });
      this.fieldValueCopy = this.fieldValue;
    }
    this.editMode = !this.editMode;
  }

  reset() {
    this.fieldValue = this.fieldValueCopy;
  }

  $onInit() {
    this.fieldValueCopy = this.fieldValue;
    if ( !this.fieldType ) {
      this.fieldType = 'text';
    }
  }

}

export const HeroEditableFieldComponent: IComponentOptions = {
  controller: HeroEditableFieldController,
  template: require('./hero-editable-field.html'),
  bindings: {
    fieldValue: '<',
    fieldType: '@?',
    onUpdate: '&'
  }
};
