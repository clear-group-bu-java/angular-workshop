/* eslint-disable @typescript-eslint/no-explicit-any */
import { initialState, reducer } from './address.reducer';

describe('Address Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = <any>{};

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
