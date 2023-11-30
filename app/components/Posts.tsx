"use client";

import { db } from "@/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { PostDocument } from "../_types";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState<PostDocument[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "posts"), orderBy("timeStamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: () => doc.data() } as PostDocument)));
      },
      (error) => {
        console.error("Error getting posts: ", error);
      }
    );

    return unsubscribe;
  }, [db]);

  console.log(posts);

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  );
};

export default Posts;



