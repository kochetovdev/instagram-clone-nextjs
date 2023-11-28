import { PostData } from "../_types";

interface Props {
  post: PostData;
}

const Post = ({ post }: Props) => {
  return (
    <div>
      <h1>{post.username}</h1>
    </div>
  );
};

export default Post;
