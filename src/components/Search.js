import React, { useEffect, useMemo, useState } from "react";
import ImageDisplay from "./ImageDisplay";
import useFetch from "../hooks/useFetch";
import { connect } from "react-redux";
import { setSearch, addFavorite, deleteFavorite } from "../redux/actions";
import Button from "@material-ui/core/Button";

const Search = ({
  addFavorite,
  deleteFavorite,
  favorites,
  setSearch,
  search,
}) => {
  const [searchField, setSearchField] = useState("");
  const [query, setQuery] = useState("");
  const { data, loading, error } = useFetch(query);
  const faveIds = useMemo(() => {
    return favorites.map((val) => val.id);
  }, [favorites]);

  useEffect(() => {
    if (data) {
      setSearch(data.hits);
    }
  }, [data]);
  return (
    <div>
      <form className="text-center marginBottom">
        <div className="flex-wrap margin">
          <label htmlFor="search">Search Images Tags: </label>
          <input
            id="search"
            value={searchField}
            className="marginLeft"
            onChange={(e) => setSearchField(e.target.value)}
            placeholder="Search for Images"
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            e.preventDefault();
            setQuery(searchField);
          }}
        >
          Search
        </Button>
      </form>
      {loading && <div className="text-center">Loading Images</div>}
      {error && <div className="text-center">{error}</div>}
      {search && (
        <div className="flex-wrap">
          {search.map((pic) => (
            <ImageDisplay
              deleteFavorite={deleteFavorite}
              addFavorite={addFavorite}
              isFave={faveIds.includes(pic.id)}
              id={pic.id}
              tags={pic.tags}
              url={pic.previewURL}
              key={pic.id}
              download={pic.largeImageURL}
            />
          ))}
        </div>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    username: state.user.username,
    favorites: state.favorites,
    search: state.search,
  };
}

const mapDispatchToProps = {
  deleteFavorite,
  addFavorite,
  setSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
