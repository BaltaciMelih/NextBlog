import Link from "next/link";
import React from "react";

export const getStaticProps = async () => {
  const posts = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return {
    props: {
      posts: posts,
    },
  };
};

const StaticPosts = ({ posts }: any) => {
  return (
    <div>
      <h1>STATIC POSTS</h1>
      {posts.map((post: any) => {
        return (
          <Link href={`/staticposts/${post.id}`} key={post.id}>
            <div className="static-card">
              <h2>{post.title.toUpperCase()}</h2>
              <p>{post.title}</p>
            </div>
          </Link>
        );
      })}
      <style jsx>{`
        .static-card {
          margin: 1rem;
          padding: 1rem;
          max-width: 30rem;
          border: 1px solid black;
          border-radius: 1rem;
        }
      `}</style>
    </div>
  );
};

export default StaticPosts;
