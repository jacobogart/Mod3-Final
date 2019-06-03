export const isLoadingReducer = (state = false, action) => {
  switch (action.type) {
    case 'SET_IS_LOADING':
      return true;
    case 'SET_PRESIDENTS':
      return false;
    default:
      return state
  }
}