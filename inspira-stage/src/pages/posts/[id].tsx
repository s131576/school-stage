import Link from "next/link";
import { GetServerSidePropsContext } from "next";
import { Post } from "@/types";
import { loadPosts } from "..";
import { Marked } from 'marked';
const marked = new Marked();
export const getStaticPaths = async () => {

  const token =
  "9f837bb30a4ab36274ecaf4cebf0b0776272801459b1b89af766f68383f6acf3c47bf38e6bbd370ff5737070e9328df6d3c1f4b6e6869a6c22074336854f00b9012a741a05d7010a9fc968950a67e31de222c0f0d13c331b1eb380bb16633d403130bb2fa17dc6aac7af3a808db5d38d8e3b4c3ee3143f2eaa0670af9a16a168";

    const response = await fetch("http://localhost:1337/api/blogs?populate=*", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const data = await response.json();

    const paths = data.data.map((value: any) => {
        return {
            params: {
                id: value.id.toString()
            }
        }
    })

    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = async (context: GetServerSidePropsContext) => {

    const id = parseInt(context.params?.id as string);

    const posts = await loadPosts();
    const postDetail = await posts.filter((value: Post) => value.id == id && value);
  
    const post = (
        {
            id: postDetail[0].id,
            title: postDetail[0].title,
            content: postDetail[0].content,
            image: postDetail[0].image,
            btag: postDetail[0].btag
        });

    return {
        props: {
            post: post
        }
    }
}
interface PostDetailProps {
    post: Post
}
const PostDetail = ({ post }: PostDetailProps) => {
  return (
    <div className="max-w-2xl mx-auto my-8">
      <header className="bg-blue-500 text-white py-4 text-center">
        <h1 className="text-4xl font-bold">{post.title}</h1>
      </header>
      <main className="mt-8 flex">
        <div className="w-2/3 pr-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
            <div className="p-6">
              <div className="text-gray-700 prose" dangerouslySetInnerHTML={{ __html: marked.parse(post.content) }} />
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <div className="rounded-lg overflow-hidden shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Tag</h2>
            <p>#{post.btag}</p>
          </div>
        </div>
      </main>
      <div className="mt-6 text-center">
        <Link href="/posts">
          <p className="text-blue-500 hover:underline">Go Back</p>
        </Link>
      </div>
    </div>
  );
};

export default PostDetail;
