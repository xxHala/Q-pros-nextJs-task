"use client";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function UserInfo() {
  const { data: session } = useSession();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full sm:w-9/12 md:w-8/12 lg:w-6/12 xl:w-4/12 max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
          WELCOME !!
          <div>
            Name:{" "}
            <span className="font-normal text-gray-700 dark:text-gray-400">
              {session?.user?.name}
            </span>
          </div>
          <div>
            Email:{" "}
            <span className="font-normal text-gray-700 dark:text-gray-400">
              {session?.user?.email}
            </span>
          </div>
          <button
            onClick={() => signOut()}
            className="bg-red-500 text-white font-bold px-6 py-2 mt-3"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
