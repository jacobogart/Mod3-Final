import { hasErroredReducer } from "../hasErroredReducer";
import { setHasErrored } from '../../actions'

describe('hasErroredReducer', () => {
  it('should return state as default', () => {
    const expected = '';
    const result = hasErroredReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return error message', () => {
    const error = 'Failed to fetch';
    const action = setHasErrored(error);
    const result = hasErroredReducer(undefined, action);
    expect(result).toEqual(error);
  });
});