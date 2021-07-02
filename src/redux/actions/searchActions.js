export const SET_SEARCH = "New Search";
export const CLEAR_SEARCH = "Clear Search";

export function setSearch(search) {
  return { type: SET_SEARCH, search };
}
export function clearSearch() {
  return { type: CLEAR_SEARCH };
}
