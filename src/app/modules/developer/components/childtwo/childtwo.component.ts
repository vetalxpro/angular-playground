class ChildtwoController {
  username = 'username vasya';
  format = 'EEEE, dd MMM HH:mm:ss';
  timeLabel = 'Текущее время:';

  constructor() {

  }
}

export const ChildtwoComponent = {
  selector: 'appChildtwo',
  controller: ChildtwoController,
  template: require('./childtwo.html')
};
