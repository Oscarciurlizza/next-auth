import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Home from ".";
import Layout from "../components/Layout/Layout";
import Login from "../components/Login";

export default function LoginPage() {
  const router = useRouter();
  const { status } = useSession();
  if (status === "authenticated") {
    router.push("/");
  }
  if (status === "unauthenticated") {
    return (
      <Layout ti tle="Goi - Login">
        <Login signIn={signIn} />
      </Layout>
    );
  }
}
