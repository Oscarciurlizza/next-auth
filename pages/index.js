import { getSession, signOut } from "next-auth/react";

export default function Home({ session }) {
  return (
    <div>
      {session ? (
        <div>
          <span>{session.user.name}</span>
          <span>{session.user.email}</span>
        </div>
      ) : (
        "skeleton"
      )}

      <button onClick={() => signOut()}>Logout</button>
    </div>
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
