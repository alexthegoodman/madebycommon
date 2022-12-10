import request from "graphql-request";
import Image from "next/image";
import { getPostQuery } from "../../../../graphql/queries/posts";
import { serialize } from "../../../../helpers/serialize";

const getPost = (slug) => {
  //   const data = fetch(
  //     `http://0.0.0.0:3000/api/posts?where[slug][equals]=${slug}`
  //   );
  const data = request("http://localhost:3000/api/graphql", getPostQuery, {
    slug,
  });
  return data;
};

const BlogPost = async ({ params }) => {
  const postData = await getPost(params.title);
  //   const postJson = await postData.json();
  const post = postData.Posts.docs[0];

  console.info("post", post);

  return (
    <main>
      <section>
        <div>
          {post.meta.image ? (
            <div>
              <Image
                src={post.meta.image.sizes.thumbnail.url}
                alt={post.title}
                width="800"
                height="450"
              />
            </div>
          ) : (
            <></>
          )}

          <div>
            <span>Published on </span>
            <h1>{post.title}</h1>
            <span>Written by</span>
            <p>...</p>
          </div>
        </div>
      </section>
      <article>{serialize(post.content)}</article>
    </main>
  );
};

export default BlogPost;
