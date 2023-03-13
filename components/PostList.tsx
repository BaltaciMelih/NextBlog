import React from "react";
import Post from "./Post";

const PostList = ({ posts }: any) => {
  return (
    <div className="center">
      {posts.map((post: any) => (
        <div className="grid" key={post.id}>
          <Post post={post} />
        </div>
      ))}
      <style jsx>{`
        .center {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
          margin-top: 3rem;
        }
      `}</style>
    </div>
  );
};

export default PostList;
