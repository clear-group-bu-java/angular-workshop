import * as fromAddress from './address.reducer';
import { selectAddressesState } from './address.selectors';

describe('Address Selectors', () => {
  it('should select the feature state', () => {
    const result = selectAddressesState({
      [fromAddress.addressFeatureKey]: {},
    });

    expect(result).toEqual({});
  });
});
