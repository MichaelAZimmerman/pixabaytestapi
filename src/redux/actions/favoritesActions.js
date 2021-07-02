export const ADD_FAVORITE = "Add Favorite";
export const DELETE_FAVORITE = "Delete Favorite";
export const CLEAR_FAVORITES = "Clear Favorites";

export function addFavorite(gif) {
  return { type: ADD_FAVORITE, gif };
}

export function deleteFavorite(id) {
  return { type: DELETE_FAVORITE, id };
}

export function clearFavorites() {
  return { type: CLEAR_FAVORITES };
}
