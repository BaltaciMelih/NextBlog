import React from "react";

export const getStaticPaths = async () => {
  const posts = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=5`
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));

  const paths = posts.map((post: any) => {
    return {
      params: { id: post.id.toString() },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return {
    props: {
      post: post,
    },
  };
};

const PostDetails = ({ post }: any) => {
  return (
    <div className="post-detail">
      <h1>{post.title.toUpperCase()}</h1>
      <p>{post.body}</p>
      <style jsx>{`
        .post-detail {
          margin-top: 2rem;
          max-width: 40rem;
          color: red;
        }
      `}</style>
    </div>
  );
};

export default PostDetails;
