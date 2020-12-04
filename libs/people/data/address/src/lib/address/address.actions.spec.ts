import * as fromAddress from './address.actions';

describe('loadAddresses', () => {
  it('should return an action', () => {
    expect(fromAddress.loadAddresses().type).toBe('[Address] Load Addresses');
  });
});
