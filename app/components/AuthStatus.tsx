"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

const AuthStatus = () => {
  const { status, data: session } = useSession();
  return (
    <Link href='/auth/signstatus'>
      {status === "authenticated" && (
        <img
          src={session!.user!.image || undefined}
          alt="user-image"
          className="h-10 rounded-full"
        />
      )}
      {status === "unauthenticated" && (
        <img
          src="https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0="
          alt="user-image"
          className="h-10 rounded-full"
        />
      )}
    </Link>
  );
};

export default AuthStatus;
