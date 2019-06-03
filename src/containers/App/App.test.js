import { setPresidents, setIsLoading, setHasErrored } from "../../actions";
import { mapDispatchToProps } from "./App";

describe('App Redux', () => {
  describe('mapDispatchToProps', () => {
    let mockDispatch, mappedProps;

    beforeEach(() => {
      mockDispatch = jest.fn();
      mappedProps = mapDispatchToProps(mockDispatch);
    });

    it('should dispatch a setPresidents action', () => {
      const presidents = [ { name: 'Obama' } ];
      const actionToDispatch = setPresidents(presidents);
      mappedProps.setPresidents(presidents);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should dispatch a setIsLoading action', () => {
      const actionToDispatch = setIsLoading();
      mappedProps.setIsLoading();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should dispatch a setHasErrored action', () => {
      const error = 'Failed to fetch';
      const actionToDispatch = setHasErrored(error);
      mappedProps.setHasErrored(error);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});