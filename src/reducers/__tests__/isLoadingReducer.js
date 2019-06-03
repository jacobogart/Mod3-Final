import { isLoadingReducer } from "../isLoadingReducer";
import { setIsLoading, setPresidents} from '../../actions'


describe('isLoadingReducer', () => {
  it('should return default state', () => {
    const expected = false;
    const result = isLoadingReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return true with a SET_IS_LOADING action', () => {
    const action = setIsLoading();
    const result = isLoadingReducer(undefined, action);
    expect(result).toEqual(true);
  });

  it('should return false with a SET_PRESIDENTS action', () => {
    const action = setPresidents();
    const result = isLoadingReducer(undefined, action);
    expect(result).toEqual(false);
  })
});