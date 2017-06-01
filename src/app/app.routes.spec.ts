import { mock } from 'angular';
import { appModule } from './app.module';

describe('App Routes', () => {
  beforeEach(() => {
    mock.module(appModule.name);
  });

  let $state;
  const state = 'phones';

  beforeEach(inject(( _$state_ ) => {
    $state = _$state_;

  }));


  it('Should check state changing', () => {
    expect($state.href(state)).toEqual('/phones');
  });
});
