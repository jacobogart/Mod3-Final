import { combineReducers } from "redux";
import { presidentsReducer } from "./presidentsReducer";
import { isLoadingReducer } from "./isLoadingReducer";
import { hasErroredReducer } from "./hasErroredReducer";
import { filterReducer } from "./filterReducer";

export const rootReducer = combineReducers({
  presidents: presidentsReducer,
  isLoading: isLoadingReducer,
  hasErrored: hasErroredReducer,
  filter: filterReducer
});