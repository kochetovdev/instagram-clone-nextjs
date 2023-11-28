import { User } from "../_types";

interface Props {
  user: User;
}

const Story = ({ user }: Props) => {
  return (
    <div>
      <img
        className="h-14 rounded-full p-[1.5px] border-red-500 border-2 cursor-pointer hover:scale-110 transition-transform duration-200 ease-out"
        src={user.img}
        alt={user.username}
      />
      <p className="text-xs w-14 truncate">{user.username}</p>
    </div>
  );
};

export default Story;
