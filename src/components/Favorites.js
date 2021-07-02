import React from "react";
import { connect } from "react-redux";
import { deleteFavorite } from "../redux/actions";
import ImageDisplay from "./ImageDisplay";

const Favorites = ({ favorites, deleteFavorite, username }) => {
  return (
    <div className="top-padding">
      <h2 className="text-center">Favorites for {username}</h2>
      <div className="flex-wrap">
        {favorites.map((pic) => (
          <ImageDisplay
            id={pic.id}
            isFave={true}
            deleteFavorite={deleteFavorite}
            tags={pic.tags}
            url={pic.url}
            key={pic.id}
            download={pic.download}
          />
        ))}
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    username: state.user.username,
    favorites: state.favorites,
  };
}

const mapDispatchToProps = {
  deleteFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
