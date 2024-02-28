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

      <div className="relative">
        <div
          className="absolute w-full h-full top-0 left-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/Inspira-63.jpg)' }}
        ></div>
        <div className="container relative z-10 text-center  sm:pt-1">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold pt-5 mt-5" style={{ zIndex: -1 }}>Project Inspira</h1>
        </div>
        <div className="hidden lg:block" style={{ height: '360px', zIndex: -1 }}></div>
        <div className="hidden md:block lg:hidden" style={{ height: '360px', zIndex: -1 }}></div>
      </div>

      <section className="container pb-5 mb-lg-3 mb-xl-4 mb-xxl-5 mt-5 flex flex-wrap">
        <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-4">
          <div className="flex items-center mb-3">
            <div className="bg-primary rounded-1 p-2 flex-shrink-0">
              <div>
                <svg className="text-white" width="28" height="28" viewBox="-5 0 25 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
                </svg>
              </div>
            </div>
            <h3 className="h5 ms-3 mb-0">Introduction</h3>
          </div>
          <p className="fs-sm">
            Welcome to the official website of Schoolproject-Inspira. I am Bouhjar Rachad, a junior intern in the exciting field of web development at Inspira. My role as a web developer intern involves working enthusiastically with PHP to create robust web applications. We use the powerful Bootstrap framework for attractive and responsive user interfaces. My daily tasks also include managing data with MySQL as the database.
          </p>
        </div>

        <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-4">
          <div className="flex items-center mb-3">
            <div className="bg-primary rounded-1 p-2 flex-shrink-0">
              <div>
                <svg className="text-white" width="28" height="28" viewBox="-5 0 25 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0z" />
                  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
                  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
                </svg>
              </div>
            </div>
            <h3 className="h5 ms-3 mb-0">Purpose of this website</h3>
          </div>
          <p className="fs-sm">
            This website serves not only as a digital portfolio but also as a dynamic report of my learning experiences and achievements during my internship. I cordially invite you to follow my development journey and discover how my passion for web development is reflected in each project and blog post. Here, I share my growth, challenges, and successes, with the aim of providing a transparent insight into my professional development and the creative journey I have undertaken.
          </p>
        </div>
      </section>

      <div className="container mx-auto">
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
                  <span className="text-gray-400  font-small">
                    Published on:{value.publishedAt?.substring(0, 10)}
                  </span>
                  <p className="text-primary text-sm font-semibold ml-2">#{value.btag}</p>
                  <h2 className="text-black text-xl font-bold mb-2">{value.title}</h2>
                </div>
                <div className="mt-auto text-center">
                  <Link href={`/posts/${value.id}`}>
                    <button type="button" className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Read more ...</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="container">
        <div className="flex py-md-4 py-lg-2 my-2">
          <Link href="/posts" className="text-white">
            <div>
              <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                See all posts
              </button>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;