"use client";

import { db } from "@/firebase";
import {
  BookmarkIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  EllipsisHorizontalIcon,
  FaceSmileIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/24/solid";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { CommentDocument, LikeDocument } from "../_types";
import Moment from "react-moment";

interface Props {
  id: string;
  username: string;
  userImg: string;
  img: string;
  caption: string;
}

const Post = ({ username, userImg, img, caption, id }: Props) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<CommentDocument[]>([]);
  const [likes, setLikes] = useState<LikeDocument[]>([]);
  const [hasLiked, setHasLiked] = useState(false);

  const { data: session } = useSession();

  const inputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  };

  const sendComment = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const commentToSend = comment;
    setComment("");

    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: session?.user?.name,
      userImage: session?.user?.image,
      timestamp: serverTimestamp(),
    });
  };

  const likePost = async () => {
    const userEmail = session?.user?.email;
  
    if (userEmail) {
      if (hasLiked) {
        await deleteDoc(doc(db, "posts", id, "likes", userEmail));
      } else {
        await setDoc(doc(db, "posts", id, "likes", userEmail), {
          username: session?.user?.name,
        });
      }
    }
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(
        collection(db, "posts", id, "comments"),
        orderBy("timestamp", "desc")
      ),
      (snapshot) => {
        setComments(
          snapshot.docs.map(
            (doc) => ({ id: doc.id, data: () => doc.data() } as CommentDocument)
          )
        );
      }
    );
  }, [db, id]);

  useEffect(() => {
    const userLiked = likes.find((like) => like.id === session?.user?.email);
    setHasLiked(!!userLiked); // Преобразование в булевое значение
  }, [likes, session]);
  

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "posts", id, "likes"),
      (snapshot) =>
        setLikes(
          snapshot.docs.map(
            (doc) => ({ id: doc.id, data: () => doc.data() } as LikeDocument)
          )
        )
    );
  }, [db]);

  return (
    <div className="bg-white my-7 border rounded-md">
      <div className="flex items-center p-5">
        <img
          className="h-12 rounded-full object-cover border p-1 mr-3"
          src={userImg}
          alt={username}
        />
        <p className="font-bold flex-1">{username}</p>
        <EllipsisHorizontalIcon className="h-5" />
      </div>

      <img className="objecr-cover w-full" src={img} alt="Post picture" />

      {session && (
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4">
            {hasLiked ? (
              <HeartIconFilled
                onClick={likePost}
                className="btn text-red-400"
              />
            ) : (
              <HeartIcon onClick={likePost} className="btn" />
            )}

            <ChatBubbleOvalLeftEllipsisIcon className="btn" />
          </div>
          <BookmarkIcon className="btn" />
        </div>
      )}

      <p className="p-5 truncate">
        <span className="font-bold mr-2">{username}</span>
        {caption}
      </p>

      {comments.length > 0 && (
        <div className="mx-10 max-h-24 overflow-y-scroll scrollbar-none">
          {comments.map((comment) => (
            <div className="flex items-center space-x-2 mb-2" key={comment.id}>
              <img
                className="h-7 rounded-full object-cover"
                src={comment.data().userImage}
                alt="user-image"
              />
              <p className="font-semibold">{comment.data().username}</p>
              <p className="flex-1 truncate">{comment.data().comment}</p>
              <Moment fromNow>{comment.data().timestamp?.toDate()}</Moment>
            </div>
          ))}
        </div>
      )}

      {session && (
        <form className="flex items-center p-4">
          <FaceSmileIcon className="h-7" />
          <input
            className="border-none flex-1 focus:ring-0"
            type="text"
            placeholder="Enter your comment..."
            value={comment}
            onChange={inputChange}
          />
          <button
            onClick={sendComment}
            disabled={!comment.trim()}
            className="text-blue-400 font-bold disabled:text-blue-200"
            type="submit"
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
};

export default Post;
