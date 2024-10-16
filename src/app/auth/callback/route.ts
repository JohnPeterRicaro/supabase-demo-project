import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const GET = async (req: NextRequest) => {
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (error) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  if (session?.user) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.redirect(new URL("/auth/login", req.url));
};

export default GET;
