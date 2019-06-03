import { mapStateToProps } from "./PresContainer";

describe('PresContainer Redux', () => {
  describe('mapStateToProps', () => {
    const presidents = [{ name: 'Obama' }];
    const mockState = {
      presidents,
      isLoading: true,
      hasErrored: '',
      filter: 'Whig',
      test: 'test'
    }

    it('should return an state object', () => {
      const result = mapStateToProps(mockState);
      const expected = {
        presidents,
        isLoading: true,
        hasErrored: '',
        filter: 'Whig',
      }
      expect(result).toEqual(expected)
    });
  });
});