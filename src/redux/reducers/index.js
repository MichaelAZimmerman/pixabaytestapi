import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import favoritesReducer from "./favoritesReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  search: searchReducer,
  user: userReducer,
  favorites: favoritesReducer,
});

export default rootReducer;
