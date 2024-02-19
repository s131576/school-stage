import { Post } from "@/types";
import Link from "next/link";
import { useState } from "react";
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
      posts: posts.reverse()
    },
  };
};

interface postProps {
  posts: Post[];  
}
const Posts = ({ posts }: postProps) => {
  const [selectedBtag, setSelectedBtag] = useState<string | null>(null);

  // Extract all unique btags from posts
  const btags = Array.from(new Set(posts.flatMap((post) => post.btag || "Uncategorized")));

  // Filter posts based on the selected btag
  const filteredPosts = selectedBtag
    ? posts.filter((post) => post.btag === selectedBtag)
    : posts;

  return (
    <div className="flex">
      {/* Posts Section */}
      <main className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
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
                <div>
                  <h2 className="text-black text-xl font-semibold">{value.title}</h2>
                  <h2 className="text-black text-xl font-semibold">{value.btag || "Uncategorized"}</h2>
                </div>
                <div className="flex-grow"></div>
                <div className="text-center">
                  <Link href={`/posts/${value.id}`}>
                    <p className="text-blue-500 cursor-pointer transition-opacity duration-300 ease-in-out hover:opacity-80">
                      Read More ...
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>
      {/* Filter Section */}
      <div className="w-1/4 pr-4">
        <h2 className="text-lg font-semibold mb-2">Categories</h2>
        <ul>
          <li key="all" onClick={() => setSelectedBtag(null)} className={`cursor-pointer ${selectedBtag === null ? 'text-blue-500' : ''}`}>All</li>
          {btags.map((btag) => (
            <li
              key={btag}
              onClick={() => setSelectedBtag(btag)}
              className={`cursor-pointer ${selectedBtag === btag ? 'text-blue-500' : ''}`}
            >
              #{btag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Posts;