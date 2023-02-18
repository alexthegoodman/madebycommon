import Meta from "../../../../components/Meta/Meta";
import { getPost } from "./page";

const Head = async ({ params }) => {
  const postData = await getPost(params.title);
  const post = postData.Posts.docs[0];

  return (
    <Meta
      title={post.meta.title}
      description={post.meta.description}
      addt={
        <>
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
          <meta
            property="twitter:description"
            content={post.meta.description}
          />
          <meta
            property="twitter:image"
            content={post.meta?.image?.sizes?.largeThumbnail?.url}
          />
        </>
      }
    />
  );
};

export default Head;
