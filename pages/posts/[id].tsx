import React from "react";

export const getServerSideProps = async (context: any) => {
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
        }
      `}</style>
    </div>
  );
};

export default PostDetails;
