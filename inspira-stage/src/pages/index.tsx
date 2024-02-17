import { Post } from "@/types";
import Link from "next/link";

export const loadPosts = async () => {
  const token =
    "9f837bb30a4ab36274ecaf4cebf0b0776272801459b1b89af766f68383f6acf3c47bf38e6bbd370ff5737070e9328df6d3c1f4b6e6869a6c22074336854f00b9012a741a05d7010a9fc968950a67e31de222c0f0d13c331b1eb380bb16633d403130bb2fa17dc6aac7af3a808db5d38d8e3b4c3ee3143f2eaa0670af9a16a168";

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
      content: value.attributes.content,
      btag:value.attributes.btag.data.attributes.name,
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
      </div>
    </div>
  );
};

export default Home;