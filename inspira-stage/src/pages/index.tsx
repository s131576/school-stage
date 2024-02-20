import { Post } from "@/types";
import Link from "next/link";

export const loadPosts = async () => {
  const token =
    "153ddbd84e9a231945755efabb73de261275e1326c3b914e8e113e027ed77777496c9b0ca51b6fed391164f8a6bea95acc2083ac9c60e00bd4d25c4763ab0e5c548d317ee53896b14c2b84d1527b73008186d6e89c40ff4051e1e9474fa19c51d4bdcbcacb92d15001ca08d3172940e3e7198a67f2f8c852bd8a5c42a2ba6436";

  const response = await fetch("http://localhost:1337/api/blogs?populate=*", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  const posts = data.data.map((value: any) => {
    return {
      id: value.id,
      title: value.attributes.title,
      obstacles: value.attributes.obstacles,
      introduction: value.attributes.introduction,
      conclusion: value.attributes.conclusion,
      reflection: value.attributes.reflection,
      week: value.attributes.week,
      content: value.attributes.content,
      btag: value.attributes.btag.data.attributes.name,
      image: value.attributes.image.data.attributes.url,
    };
  });

  return posts;
};

export const getStaticProps = async () => {
  const posts = await loadPosts();

  return {
    props: {
      posts: posts.reverse().slice(0, 4)
    },
  };
};

interface postProps {
  posts: Post[];
}
const Home = ({ posts }: postProps) => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="container mx-auto">
          <div className="md:w-3/4 mx-auto text-center mb-8">
            <h1 className="text-5xl font-bold text-blue-600 mb-6">🚀 Welcome to My Portfolio</h1>
            <p className="text-lg text-gray-700 mb-4">
              Hi, I'm <span className="font-semibold text-blue-600">Rachad Bouhjar</span>, a student at AP Hogeschool, pursuing a degree in Programming.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Currently, I'm doing my internship at <span className="font-semibold text-blue-600">Inspira</span>, where I work with <span className="font-semibold text-blue-600">PHP and MySQL</span> technologies, crafting web solutions with Bootstrap.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              This website is a showcase of my journey during my internship. Explore my projects and experiences. Feel free to dive into the world of web development with me!
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Let's build something amazing together!
            </p>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {posts.map((value: Post) => (
            <div key={value.id} className="rounded-md overflow-hidden bg-white shadow-md flex flex-col">
              <img
                className="object-cover w-full h-64"
                src={value.image}
                alt={value.title}
              />
              <div className="p-6 flex flex-col flex-grow">
                <div>
                  <div className="text-center ">
                  </div>
                  <h2 className="text-black text-xl font-bold mb-2">{value.title}</h2>

                </div>
                <div className="mt-auto text-center">
                  <Link href={`/posts/${value.id}`}>
                    <p className="text-blue-500 hover:underline">Read More...</p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-8">
        <Link href="/posts" className="text-green-600 hover:underline font-bold text-xl">
          See all posts
        </Link>
      </div>
    </div>
  );
};

export default Home;