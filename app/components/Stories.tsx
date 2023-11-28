"use client";

import { useEffect, useState } from "react";
import { USERS } from "../_utils/userGenerator";
import { User } from "../_types";
import Story from "./Story";

const Stories = () => {
  const [storyUsers, setStoryUsers] = useState<User[]>([]);

  useEffect(() => {
    setStoryUsers(USERS);
  }, []);

  return <div>{storyUsers.map(user => (
    <Story key={user.id} user={user} />
  ))}</div>;
};

export default Stories;
