import React from "react";
import Link from "next/link";

const Post = ({ post }: any) => {
  return (
    <Link href={`/posts/${post.id}`}>
      <div className="card">
        <h1 className="text-center">{post.title.toUpperCase()}</h1>
        <p>{post.body}</p>
      </div>

      <style jsx>{`
        .text-center {
          text-align: center;
        }
        .card {
          margin: 1rem;
          padding: 1.5rem;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
        }
      `}</style>
    </Link>
  );
};

export default Post;
