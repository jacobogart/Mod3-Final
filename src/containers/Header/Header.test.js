import { mapStateToProps, mapDispatchToProps } from "./Header";
import { setFilter } from "../../actions";

describe('Header Redux', () => {
  describe('mapStateToProps', () => {
    it('should return an array of presidents', () => {
      const presidents = [{ name: 'Obama' }];
      const mockState = { presidents, test: 'test' };
      const result = mapStateToProps(mockState);
      expect(result).toEqual({ presidents })
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch with a setFilter action', () => {
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);
      const actionToDispatch = setFilter('Whig');
      mappedProps.setFilter('Whig');
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });
  });
});