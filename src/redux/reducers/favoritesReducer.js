import { ADD_FAVORITE, DELETE_FAVORITE, CLEAR_FAVORITES } from "../actions";

const initialFavoritesState = [];

export default function favoritesReducer(
  state = initialFavoritesState,
  action
) {
  switch (action.type) {
    case ADD_FAVORITE:
      return [...state, action.pic];
    case DELETE_FAVORITE:
      return state.filter((val) => val.id !== action.id);
    case CLEAR_FAVORITES:
      return [];
    default:
      return state;
  }
}
