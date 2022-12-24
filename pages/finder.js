import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Layout from "../components/Layout/Layout";

export default function finder() {
  const router = useRouter();
  const { status } = useSession();
  if (status === "unauthenticated") {
    router.push("/login");
  }
  if (status === "authenticated") {
    return (
      <Layout title="Goi - finder">
        <h2 className="text-base">Drink Finder</h2>
      </Layout>
    );
  }
}
