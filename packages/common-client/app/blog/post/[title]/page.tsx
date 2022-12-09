import request from "graphql-request";
import Image from "next/image";
import { getPostQuery } from "../../../../graphql/queries/posts";

const getPost = (slug) => {
  const data = request("http://localhost:3000/api/graphql", getPostQuery, {
    slug,
  });
  return data;
};

const BlogPost = async ({ params }) => {
  const postData = await getPost(params.title);
  const post = postData?.Posts.docs[0];

  console.info("post", post);

  return (
    <main>
      <section>
        <div>
          {post.meta.image ? (
            <div>
              <Image src={post.meta.image} alt={""} width="800" height="450" />
            </div>
          ) : (
            <></>
          )}

          <div>
            <span></span>
            <h1>{post.title}</h1>
            <span></span>
            <p></p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPost;
