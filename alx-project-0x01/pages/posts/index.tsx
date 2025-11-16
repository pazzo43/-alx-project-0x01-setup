
1. interfaces/index.ts
export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}
components/common/PostCard.tsx
import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, body, userId, id }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
      </div>
      <p className="text-gray-600">{body}</p>
      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        <span>User ID: {userId}</span>
        <span>Post ID: {id}</span>
      </div>
    </div>
  );
};

export default PostCard;
pages/posts/index.tsx
Note: The type definition for the Posts component should be adjusted to accept an object containing the posts array, rather than being typed as an array itself. The type should be React.FC<{ posts: PostProps[] }> to correctly match the data returned by getStaticProps. I will assume this is what you intended for correct TypeScript usage.

  import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";
import { GetStaticProps } from "next"; // Recommended import for proper GetStaticProps typing

// Corrected type for the component props
interface PostsPageProps {
  posts: PostProps[];
}

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
  console.log(posts)
  return (
    <div className="flex flex-col min-h-screen"> {/* Changed h-screen to min-h-screen for better layout */}
      <Header />
      <main className="p-4 flex-grow">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">Post Content</h1>
          <button className="bg-blue-700 px-4 py-2 rounded-full text-white hover:bg-blue-800 transition-colors duration-200">
            Add Post
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts?.map((post: PostProps) => ( // Using a spread of 1, 2, or 3 columns for responsiveness
              <PostCard {...post} key={post.id} />
            ))
          }
        </div>
      </main>
    </div>
  )
}


export const getStaticProps: GetStaticProps<PostsPageProps> = async () => { // Added GetStaticProps typing
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts: PostProps[] = await response.json()

  return {
    props: {
      posts
    }
  }
}

export default Posts;
  
