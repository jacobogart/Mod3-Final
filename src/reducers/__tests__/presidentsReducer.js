import { presidentsReducer } from "../presidentsReducer";
import { setPresidents } from '../../actions'

describe('hasErroredReducer', () => {
  it('should return state as default', () => {
    const expected = [];
    const result = presidentsReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return error message', () => {
    const presidents = [{name: 'Obama'}];
    const action = setPresidents(presidents);
    const result = presidentsReducer(undefined, action);
    expect(result).toEqual(presidents);
  });
});