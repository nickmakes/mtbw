import { MtbwClientFactory } from '../src';

describe('client factory', () => {
  it('should error out when constructed', () => {
    expect(() => new MtbwClientFactory()).toThrowError();
  });
})