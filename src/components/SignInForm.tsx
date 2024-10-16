"use client";

import { useState, useEffect } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SignInForm = () => {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Reset error

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError("Invalid credentials. Please try again.");
    } else {
      router.push("/dashboard"); // Redirect to dashboard on success
    }
  };

  useEffect(() => {
    if (!router) {
      console.error(
        "NextRouter is not mounted. Check your Next.js version and ensure you're in a client component."
      );
    }
  }, [router]);

  return (
    <div className="bg-gray-900 p-6 rounded-[24px] shadow-md">
      <h2 className="text-white mb-4">Sign In</h2>
      <form onSubmit={handleSignIn}>
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
          Sign In
        </button>
        <div className={"mt-[10px] w-full flex justify-center items-center"}>
          <Link
            href={"/sign-up"}
            className={"text-white text-[11.11px] text-center w-full underline"}
          >
            Don't have an account yet? Sign up here!
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
