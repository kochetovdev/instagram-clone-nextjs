import { User } from "../_types";

interface Props {
  user: User;
}

const Story = ({ user }: Props) => {
  return (
    <div>
      <img src={user.img} alt={user.username} />
      <p>{user.username}</p>
    </div>
  );
};

export default Story;
