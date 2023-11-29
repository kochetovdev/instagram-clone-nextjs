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
            src={session!.user!.image || undefined}
            alt="user-image"
          />
          <div className="flex-1 ml-4">
            <h2 className="font-bold">{session!.user!.name}</h2>
            <h3 className="text-sm text-gray-400">Welcome to instagram</h3>
          </div>
        </>
      )}
      <Link href="/auth/signstatus">
        <button className="font-semibold text-blue-400 text-sm">
          {status === "authenticated" && "Sign out"}
        </button>
      </Link>
    </div>
  );
};

export default MiniProfile;
