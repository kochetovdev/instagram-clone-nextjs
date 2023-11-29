"use client";

import { useSession } from "next-auth/react";

const AuthStatus = () => {
  const { status, data: session } = useSession();
  return (
    <>
      {status === "authenticated" && (
        <img
          src={session!.user!.image || "?"}
          alt="user-image"
          className="h-10 rounded-full cursor-pointer"
        />
      )}
      {status === "unauthenticated" && (
        <img
          src="https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0="
          alt="user-image"
          className="h-10 rounded-full cursor-pointer"
        />
      )}
    </>
  );
};

export default AuthStatus;
