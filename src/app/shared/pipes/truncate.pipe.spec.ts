import { TruncatePipe } from './truncate.pipe';

describe('TruncatePipe', () => {
  let pipe: TruncatePipe;

  beforeEach(() => {
    pipe = new TruncatePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return empty string if value is null or undefined', () => {
    expect(pipe.transform('')).toBe('');
  });

  it('should not truncate string if it fits the limit', () => {
    const text = 'Short text';
    expect(pipe.transform(text, 20)).toBe(text);
  });

  it('should truncate string and add ellipsis', () => {
    const text = 'Very long text content';
    expect(pipe.transform(text, 9)).toBe('Very long...');
  });
});
