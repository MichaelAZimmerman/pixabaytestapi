import React from "react";

function ImageDisplay({
  id,
  tags,
  url,
  isFave,
  addFavorite,
  deleteFavorite,
  download,
}) {
  return (
    <div className="image-container flex-wrap flex-column">
      <h5 className="text-center">Search tags: {tags}</h5>
      <button onClick={() => window.open(`${download}`)}>
        Open Hi-Res Image
      </button>
      <img className="" alt="image" src={url} />
      {isFave && (
        <button onClick={() => deleteFavorite(id)}>Delete Favorite</button>
      )}
      {!isFave && (
        <button onClick={() => addFavorite({ id, tags, url })}>
          Add Favorite
        </button>
      )}
    </div>
  );
}

export default ImageDisplay;
