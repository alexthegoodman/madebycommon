import { getPost } from "./page";

const Head = async ({ params }) => {
  const postData = await getPost(params.title);
  const post = postData.Posts.docs[0];

  return (
    <>
      <title>{post.meta.title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={post.meta.description} />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
};

export default Head;
