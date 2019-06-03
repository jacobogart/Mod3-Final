import { filterReducer } from "../filterReducer";
import { setFilter } from '../../actions'

describe('filterReducer', () => {
  it('should return state as default', () => {
    const expected = '';
    const result = filterReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return error message', () => {
    const party = 'Whig';
    const action = setFilter(party);
    const result = filterReducer(undefined, action);
    expect(result).toEqual(party);
  });
});