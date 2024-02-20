import Link from "next/link";
import { GetServerSidePropsContext } from "next";
import { Post } from "@/types";
import { loadPosts } from "..";
import { Marked } from 'marked';
const marked = new Marked();
export const getStaticPaths = async () => {

  const token =
    "153ddbd84e9a231945755efabb73de261275e1326c3b914e8e113e027ed77777496c9b0ca51b6fed391164f8a6bea95acc2083ac9c60e00bd4d25c4763ab0e5c548d317ee53896b14c2b84d1527b73008186d6e89c40ff4051e1e9474fa19c51d4bdcbcacb92d15001ca08d3172940e3e7198a67f2f8c852bd8a5c42a2ba6436";

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
      reflection: postDetail[0].reflection,
      introduction: postDetail[0].introduction,
      conclusion: postDetail[0].conclusion,
      obstacles: postDetail[0].obstacles,
      week: postDetail[0].week,
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
    <div className="max-w-5xl mx-auto my-8">
      <main className="mt-8 flex flex-col md:flex-row">
        <div className="md:w-full">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">

            {/* Title */}
            <div className="p-6">
              <h1 className="text-gray-800 text-4xl font-bold mb-4">{post.title}</h1>
            </div>

            {/* Introduction */}
            <div className="p-6 italic text-lg text-gray-600"> {/* Add italic and adjust font size */}
              <div dangerouslySetInnerHTML={{ __html: marked.parse(post.introduction) }} />
            </div>

            {/* Image */}
            <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />

            {/* Content */}
            <div className="p-6">
              <div className="text-gray-700 prose" dangerouslySetInnerHTML={{ __html: marked.parse(post.content) }} />
            </div>

            {/* Obstacles */}
            <div className="p-6">
            <h1 className="text-gray-800 text-4xl font-bold mb-4">Obstacles</h1>
              <div className="text-gray-700 prose" dangerouslySetInnerHTML={{ __html: marked.parse(post.obstacles) }} />
            </div>

            {/* Reflection */}
            <div className="p-6">
            <h1 className="text-gray-800 text-4xl font-bold mb-4">Reflection</h1>
              <div className="text-gray-700 prose" dangerouslySetInnerHTML={{ __html: marked.parse(post.reflection) }} />
            </div>

             {/* Conclusion */}
             <div className="p-6 text-xl"> {/* Adjusted font size for Conclusion */}
             <h1 className="text-gray-800 text-4xl font-bold mb-4">Conclusion</h1>
              <div className="text-gray-700 prose" dangerouslySetInnerHTML={{ __html: marked.parse(post.conclusion) }} />
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="md:w-1/5 mt-4 md:mt-0 md:ml-4">
          <div className="bg-white text-center rounded-lg overflow-hidden shadow-lg p-1 mb-4">
            <p className="text-green-900 text-1xl font-bold mb-4">#{post.btag}</p>
          </div>
          <div className="bg-white text-center rounded-lg overflow-hidden shadow-lg p-1 mb-4">
            <p className="text-green-900 text-1xl font-bold mb-4">=={post.week}==</p>
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

