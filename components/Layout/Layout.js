import Head from "next/head";
import Header from "../Header";

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 sm:py-12 py-10">
        {children}
      </section>
    </>
  );
}
