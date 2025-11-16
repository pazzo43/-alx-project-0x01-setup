1. Create the UserProps interface

Inside interfaces/index.ts, add:
export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

This matches the structure of the sample JSON exactly.
  2. Create a UserCard component

Inside:
components/common/UserCard.tsx

Here is a simple styled card you can expand later:
import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "20px",
      marginBottom: "20px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    }}>
      <h2>{user.name}</h2>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>

      <p>
        <strong>Address:</strong>  
        {user.address.street}, {user.address.city}
      </p>

      <p><strong>Company:</strong> {user.company.name}</p>
      <p><strong>Website:</strong> {user.website}</p>
    </div>
  );
};

export default UserCard;

This is similar to a PostCard component, just adapted for user details.
  3. Update your users page

Go to:

pages/users/index.tsx

Add the getStaticProps function (paste exactly as instructed):
  export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

4. Use the UserCard component inside your Users component

Still in pages/users/index.tsx:
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

const Users: React.FC<{ posts: UserProps[] }> = ({ posts }) => {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Users</h1>

      {posts.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;

5. Run the project

In the terminal:
npm run dev -- -p 3000

