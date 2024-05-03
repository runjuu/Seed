"use client";

import { useSession } from "next-auth/react";
import { signIn } from "next-auth/webauthn";

export default function Login() {
  const { data: session, update, status } = useSession();

  console.log(session, status, update);

  return (
    <div>
      {status === "authenticated" ? (
        <button
          type="button"
          onClick={() => signIn("passkey", { action: "register" })}
        >
          Register new Passkey
        </button>
      ) : status === "unauthenticated" ? (
        <button type="button" onClick={() => signIn("passkey")}>
          Sign in with Passkey
        </button>
      ) : null}
    </div>
  );
}
