import React from "react";

import SavedPostCard from "../components/SavedPostCard/SavedPostCard";

const SavedPost = () => {
  return (
    <div>
      <h3 className="text-left">Guardados</h3>
      <div>
        <SavedPostCard />
        <SavedPostCard />
        <SavedPostCard />
      </div>
    </div>
  );
};

export default SavedPost;
