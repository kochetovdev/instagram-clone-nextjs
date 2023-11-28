"use client";

import { useEffect, useState } from "react";
import { USERS } from "../_utils/mockDataGenerator";
import { User } from "../_types";
import Story from "./Story";

const Stories = () => {
  const [storyUsers, setStoryUsers] = useState<User[]>([]);

  useEffect(() => {
    setStoryUsers(USERS);
  }, []);

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border overflow-x-scroll rounded-sm scrollbar-none">
      {storyUsers.map((user) => (
        <Story key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Stories;
