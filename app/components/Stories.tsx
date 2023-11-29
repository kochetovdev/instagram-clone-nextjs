"use client";

import { useEffect, useState } from "react";
import { USERS } from "../_utils/mockDataGenerator";
import { User } from "../_types";
import Story from "./Story";
import { useSession } from "next-auth/react";

const Stories = () => {
  const [storyUsers, setStoryUsers] = useState<User[]>([]);
  const { data: session } = useSession();

  useEffect(() => {
    setStoryUsers(USERS);
  }, []);

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border overflow-x-scroll rounded-sm scrollbar-none">
      {session && (
        <Story
          image={session!.user!.image as string}
          username={session!.user!.name as string}
          isUser={true}
        />
      )}
      {storyUsers.map((user) => (
        <Story key={user.id} image={user.img} username={user.username} />
      ))}
    </div>
  );
};

export default Stories;
