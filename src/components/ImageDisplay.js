import React from "react";
import Button from "@material-ui/core/Button";

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
    <div className="img-container flex-wrap flex-column">
      <h5 className="text-center">Search tags: {tags}</h5>
      <Button variant="contained" onClick={() => window.open(`${download}`)}>
        Open Hi-Res Image
      </Button>
      <img className="" alt="image" src={url} />
      {isFave && (
        <Button
          variant="contained"
          color="secondary"
          onClick={() => deleteFavorite(id)}
        >
          Delete Favorite
        </Button>
      )}
      {!isFave && (
        <Button
          variant="contained"
          color="primary"
          onClick={() => addFavorite({ id, tags, url, download })}
        >
          Add Favorite
        </Button>
      )}
    </div>
  );
}

export default ImageDisplay;
