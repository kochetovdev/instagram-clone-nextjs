"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

const MiniProfile = () => {
  const { status, data: session } = useSession();
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      {status === "authenticated" && (
        <>
          <img
            className="h-16 rounded-full border p-[2px]"
            src={session!.user!.image || "?"}
            alt="user-image"
          />
          <div className="flex-1 ml-4">
            <h2 className="font-bold">{session!.user!.name}</h2>
            <h3 className="text-sm text-gray-400">Welcome to instagram</h3>
          </div>
        </>
      )}
      {status === "unauthenticated" && (
        <>
          <img
            className="h-16 rounded-full border p-[2px]"
            src="https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0="
            alt="user-image"
          />
          <div className="flex-1 ml-4">
            <h2 className="font-bold">You are not authorized</h2>
            <h3 className="text-sm text-gray-400">Please sign in</h3>
          </div>
        </>
      )}
      <Link href="/auth/signstatus">
        <button className="font-semibold text-blue-400 text-sm">
          {status === "authenticated" && "Sign out"}
          {status === "unauthenticated" && "Sign in"}
        </button>
      </Link>
    </div>
  );
};

export default MiniProfile;
