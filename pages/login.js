import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status !== "loading" && status === "authenticated") {
    router.push("/");
  }

  return (
    <div>
      <button onClick={() => signIn("github")}>Sign in with git hub</button>
    </div>
  );
}
