import { getPost } from "./page";

const Head = async ({ params }) => {
  const postData = await getPost(params.title);
  const post = postData.Posts.docs[0];

  return (
    <>
      <title>{post.meta.title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={post.meta.description} />
      <meta property="og:type" content="website" />

      {/* <meta property="og:url" content="https://deeptype.app/"/> */}
      <meta property="og:title" content={post.meta.title} />
      <meta property="og:description" content={post.meta.description} />
      <meta
        property="og:image"
        content={post.meta?.image?.sizes?.largeThumbnail?.url}
      />
      <meta property="twitter:card" content="summary_large_image" />
      {/* <meta property="twitter:url" content="https://deeptype.app/"/> */}
      <meta property="twitter:title" content={post.meta.title} />
      <meta property="twitter:description" content={post.meta.description} />
      <meta
        property="twitter:image"
        content={post.meta?.image?.sizes?.largeThumbnail?.url}
      />

      <link rel="icon" href="/favicon.ico" />
    </>
  );
};

export default Head;
