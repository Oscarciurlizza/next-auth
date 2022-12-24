import { getSession, signOut } from "next-auth/react";
import Layout from "../components/Layout/Layout";

export default function Home({ session }) {
  return (
    <Layout title="Goi.io">
      <h2>Homepage</h2>
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session)
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  return {
    props: {
      session,
    },
  };
};
