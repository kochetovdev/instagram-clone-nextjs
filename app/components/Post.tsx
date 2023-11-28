import { PostData } from "../_types";
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid'


interface Props {
  post: PostData;
}

const Post = ({ post }: Props) => {
  return (
    <div className="bg-white my-7 border rounded-md">
      <div className="flex items-center p-5">
        <img className="h-12 rounded-full object-cover border p-1 mr-3" src={post.userImg} alt={post.username} />
        <p className="font-bold flex-1">{post.username}</p>
        <EllipsisHorizontalIcon className="h-5" />
      </div>
      <img className="objecr-cover w-full" src={post.img} alt="" />
    </div>
  );
};

export default Post;
