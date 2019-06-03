import * as a from './index'

describe('Action Creators', () => {
  it('should return a SET_PRESIDENTS action', () => {
    const presidents = [{ name: 'Obama'}];
    const expected = {
      type: 'SET_PRESIDENTS',
      presidents: [{ name: 'Obama' }]
    };
    const result = a.setPresidents(presidents);
    expect(result).toEqual(expected);
  });

  it('should return a SET_IS_LOADING action', () => {
    const expected = {
      type: 'SET_IS_LOADING'
    };
    const result = a.setIsLoading();
    expect(result).toEqual(expected);
  });

  it('should return a SET_HAS_ERRORED action', () => {
    const error = 'Failed to fetch';
    const expected = {
      type: 'SET_HAS_ERRORED',
      error: 'Failed to fetch'
    };
    const result = a.setHasErrored(error);
    expect(result).toEqual(expected);
  });

  it('should return a SET_FILTER action', () => {
    const party = 'Whig';
    const expected = {
      type: 'SET_FILTER',
      party
    };
    const result = a.setFilter(party);
    expect(result).toEqual(expected);
  });
});