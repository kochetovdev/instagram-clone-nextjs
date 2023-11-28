import { PostData } from "../_types";
import {
  EllipsisHorizontalIcon,
  HeartIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  BookmarkIcon,
  FaceSmileIcon,
} from "@heroicons/react/24/outline";

interface Props {
  post: PostData;
}

const Post = ({ post }: Props) => {
  return (
    <div className="bg-white my-7 border rounded-md">
      <div className="flex items-center p-5">
        <img
          className="h-12 rounded-full object-cover border p-1 mr-3"
          src={post.userImg}
          alt={post.username}
        />
        <p className="font-bold flex-1">{post.username}</p>
        <EllipsisHorizontalIcon className="h-5" />
      </div>

      <img className="objecr-cover w-full" src={post.img} alt="Post picture" />

      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatBubbleOvalLeftEllipsisIcon className="btn" />
        </div>
        <BookmarkIcon className="btn" />
      </div>

      <p className="p-5 truncate">
        <span className="font-bold mr-2">{post.username}</span>
        {post.caption}
      </p>

      <form className="flex items-center p-4">
        <FaceSmileIcon className="h-7" />
        <input className="border-none flex-1 focus:ring-0" type="text" placeholder="Enter your comment..." />
        <button className="text-blue-400 font-bold">Post</button>
      </form>

    </div>
  );
};

export default Post;
