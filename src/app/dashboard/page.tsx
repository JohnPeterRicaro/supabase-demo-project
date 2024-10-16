"use client";

import {
  createClientComponentClient,
  Session,
} from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { User } from "@supabase/supabase-js";
import moment from "moment";

const Page = () => {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const [session, setSession] = useState<Session | null>(null);
  const [userData, setUserDate] = useState<{ user: User } | { user: null }>();

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (!session) {
        router.push("/");
      } else {
        setSession(session);

        // Fetch user data and set it to state
        const { data: user } = await supabase.auth.getUser();
        setUserDate(user);
      }
    };
    checkSession();
  }, [supabase, router]);

  useEffect(() => {
    const loadProfiles = async () => {
      const { data: profiles, error } = await supabase
        .from("profiles")
        .select("*");

      console.log("data:", profiles);
    };

    session && loadProfiles();
  }, [session]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  if (!session) {
    return <div>Loading...</div>;
  }

  return (
    <div className={"w-full h-screen flex justify-center items-center"}>
      <div
        className={
          "max-w-[500px] h-auto p-[24px] rounded-[24px] bg-gray-900 flex flex-col justify-start items-start gap-[4px]  shadow-[0px_0px_8px_4px_rgba(255,255,255,0.04)]"
        }
      >
        <h1 className={"text-[16.66px] text-white font-bold"}>
          Welcome to your Dashboard
        </h1>
        <p className={"text-white"}>User email: {userData?.user?.email}</p>{" "}
        <p className={"text-white"}>
          created at: {moment(userData?.user?.created_at).format("DD-MM-YYYY")}
        </p>{" "}
        {/* Displaying the user's ID as an example */}
        <button
          onClick={handleLogout}
          className="mt-4 bg-red-500 text-white p-2 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Page;
