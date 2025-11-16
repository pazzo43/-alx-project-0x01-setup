import React from 'react';
import Header from '@/components/layout/Header';

const PostsPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Posts</h1>
            <p className="text-lg text-gray-600">Browse through all the posts</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Posts will be rendered here */}
            <div className="text-center py-8">
              <p className="text-gray-500">Posts content coming soon...</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PostsPage;
