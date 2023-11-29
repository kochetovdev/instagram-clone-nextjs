"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

const Signin = () => {
  const { status } = useSession();
  return (
    <>
      <div className="flex justify-center space-x-7 mt-20">
        <img
          className="hidden object-cover rotate-6 md:inline-flex md:w-48"
          src="https://superviral.com.au/wp-content/uploads/2021/10/Buy-Instagram-Followers-Australia.png"
          alt="instagram-image"
        />
        <div className="">
          <div className="flex flex-col items-center">
            <img
              className="w-32 object-cover "
              src="https://www.hasoptimization.com/wp-content/uploads/2017/12/instagram.jpg"
              alt="instagram-image"
            />
            <p className="text-sm italic my-10 text-center">
              This app is created for learning purposes
            </p>
            <Link
              href={`/api/auth/${
                status === "authenticated" ? "signout" : "signin"
              }`}
            >
              <button className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500">
                {status === "authenticated" && "Sign out"}
                {status === "unauthenticated" && "Sign in with google"}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
