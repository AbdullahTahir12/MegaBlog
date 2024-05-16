import React, { useState, useEffect } from "react";
import { Container, PostCard, PostForm } from "../components";
import appwriteService from "../appwrite/config";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  appwriteService.getPosts([]).then((posts) => {
    if (posts) {
      setPosts(posts.documents);
    }
  });
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => {
            <div className="p-2 w-1/4" key={post.$id}>
              <PostCard {...post} />
            </div>;
          })}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
