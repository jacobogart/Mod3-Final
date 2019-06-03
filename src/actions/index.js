export const setPresidents = (presidents) => ({
  type: 'SET_PRESIDENTS',
  presidents
});

export const setIsLoading = () => ({
  type: 'SET_IS_LOADING'
});

export const setHasErrored = (error) => ({
  type: 'SET_HAS_ERRORED',
  error
});

export const setFilter = (party) => ({
  type: 'SET_FILTER',
  party
});

