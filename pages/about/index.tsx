import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About Page</title>
        {/* <link rel="stylesheet" href="/favicon.ico" /> */}
      </Head>
      <div>
        <h1 className="greenColor text-156">About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          omnis.
        </p>
      </div>

      <style jsx>
        {`
          .greenColor {
            color: red;
          }

          .text-156 {
            font-size: 156px;
          }
        `}
      </style>
    </>
  );
}
