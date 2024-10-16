"use client";

import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import moment from "moment-timezone";

const SignUpForm = () => {
  const supabase = createClientComponentClient({
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  });

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
          username: username,
          email: email,
          role: "user" as UserRolesType,
        },
      },
    });

    if (error) {
      console.error("Supabase Sign Up Error:", error);
      setError("Unable to sign up. Please try again.");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="bg-gray-900 p-6 rounded-[24px] shadow-md">
      <div className={"w-full flex justify-between items-center mb-4"}>
        <h2 className="text-white font-semibold text-[16.66px]">Sign Up</h2>
        <button
          className={"bg-slate-700 px-[12px] py-[6px] rounded-[4px]"}
          type={"button"}
          onClick={() => router.push("/")}
        >
          back
        </button>
      </div>
      <form onSubmit={handleSignUp}>
        <label className="font-semibold text-gray-100" htmlFor="firstName">
          First Name
        </label>
        <input
          id="firstName"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full px-[8px] py-[4px] mb-4 rounded-lg border border-gray-300 placeholder-gray-100 text-black"
          placeholder="Enter your first name"
        />
        <label className="font-semibold text-gray-100" htmlFor="lastName">
          Last Name
        </label>
        <input
          id="lastName"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full px-[8px] py-[4px] mb-4 rounded-lg border border-gray-300 placeholder-gray-100 text-black"
          placeholder="Enter your last name"
        />
        <label className="font-semibold text-gray-100" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-[8px] py-[4px] mb-4 rounded-lg border border-gray-300 placeholder-gray-100 text-black"
          placeholder="Enter your email"
        />
        <label className="font-semibold text-gray-100" htmlFor="email">
          Username
        </label>
        <input
          id="username"
          type="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-[8px] py-[4px] mb-4 rounded-lg border border-gray-300 placeholder-gray-100 text-black"
          placeholder="Enter your email"
        />
        <label className="font-semibold text-gray-100" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-[8px] py-[4px] mb-4 rounded-lg border border-gray-300 placeholder-gray-100 text-black"
          placeholder="Enter your password"
        />
        {error && <p className="text-red-500">{error}</p>} {/* Error message */}
        <button
          type="submit"
          className="w-full bg-gray-700 px-[20px] py-[10px] rounded-[24px] hover:bg-gray-600 text-white mt-4"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
