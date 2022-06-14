import React from "react";
import PostCard from "../PostCard/PostCard";

const PostCardList = ({ posts }) => {
  return (
    <div>
      {posts ? (
        posts.map((post, index) => <PostCard key={index} post={post} />)
      ) : (
        <div> No se encontraron post</div>
      )}
    </div>
  );
};

export default PostCardList;
