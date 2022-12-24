import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Login from "../components/Login";

export default function LoginPage() {
  const { data: session, status } = useSession();
  console.log(session);
  const router = useRouter();

  if (status !== "loading" && status === "authenticated") {
    router.push("/");
  }

  return (
    <>
      <Login signIn={signIn} />
    </>
  );
}
