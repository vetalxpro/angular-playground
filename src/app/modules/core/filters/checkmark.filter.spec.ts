import { mock } from 'angular';
import { CoreModule } from '../core.module';

describe('Checkmark Filter', () => {
  beforeEach(() => {
    mock.module(CoreModule.name);
  });

  let checkmarkFilter;

  beforeEach(() => {
    mock.inject(( _checkmarkFilter_ ) => {
      checkmarkFilter = _checkmarkFilter_;
    });
  });

  it('should change value to yes|no', () => {
    expect(checkmarkFilter(true)).toBe('yes');
  });
});
