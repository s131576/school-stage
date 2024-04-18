import { Post } from "@/types";
import Link from "next/link";
import { useState } from "react";
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
      publishedAt: value.attributes.publishedAt,
      obstacles: value.attributes.obstacles || "",
      introduction: value.attributes.introduction || "",
      conclusion: value.attributes.conclusion || "",
      reflection: value.attributes.reflection || "",
      week: value.attributes.week || "",
      content: value.attributes.content || "",
      btag: value.attributes.btag?.data?.attributes?.name || "",
      image: value.attributes.image?.data?.attributes?.url || "",
      imageUrls: value.attributes.extraimages?.data?.map((image: any) => image.attributes.url) || [],
    };
  });

  return posts;
};


export const getStaticProps = async () => {
  const posts = await loadPosts();

  return {
    props: {
      posts: posts.reverse()
    },
  };
};

interface postProps {
  posts: Post[];
}const Posts = ({ posts }: postProps) => {
  const [selectedBtag, setSelectedBtag] = useState<string | null>(null);

  const btags = Array.from(new Set(posts.flatMap((post) => post.btag || "Uncategorized")));
  const filteredPosts = selectedBtag ? posts.filter((post) => post.btag === selectedBtag) : posts;

  return (
    <div className="flex flex-col md:flex-row md:space-x-4">
      {/* Filter Section */}
      <div className="w-full md:w-1/4 md:pr-4  md:order-2">
        <ul>
          <h2 className="text-lg font-semibold mb-2 mt-1">Categorieën</h2>
          <li key="all" onClick={() => setSelectedBtag(null)} className={`cursor-pointer mt-2`}>
            <button
              type="button"
              className={`text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800`}
            >
              All
            </button>
          </li>
          {btags.map((btag) => (
            <li key={btag} onClick={() => setSelectedBtag(btag)} className={`cursor-pointer mt-2`}>
              <button
                type="button"
                className={`text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800`}
              >
                #{btag}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Posts Section */}

      <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:p-4 md:order-1">
        {filteredPosts.map((value: Post) => (
          <div
            key={value.id}
            className="relative overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-1.02"
          >
            <div className="flex flex-col h-full">
              <div className="flex-grow">
                <img
                  className="object-cover w-full h-48 transition-transform duration-300 ease-in-out transform hover:scale-105"
                  src={value.image}
                  alt={value.title}
                />
              </div>
              <div className="p-4 flex flex-col justify-between h-full">
                <div className="items-center">
                  <p className="text-gray-400  font-small text-center">
                    {/* Published on:{value.publishedAt?.substring(0, 10)} */}
                    Week {value.week}
                    {/* <span className="text-primary text-sm font-semibold ml-2 text-center">#Week {value.week}</span> */}
                  </p>
                  <p className="text-primary text-sm font-semibold ml-2">#{value.btag || "Uncategorized"}</p>
                  <h2 className="text-black text-xl font-semibold">{value.title}</h2>

                </div>

                <div className="flex-grow"></div>
                <div className="mt-auto text-center">
                  <Link href={`/posts/${value.id}`}>
                    <button type="button" className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Lees meer ...</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;