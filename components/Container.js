import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Container({ children }) {
  const meta = {
    title: "Allyssa Albores - Front End Developer",
    description: "A Front End Developer with UI / UX Design skills",
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta content={meta.description} name="description" />
      </Head>
      <main className="w-full bg-white dark:bg-[#090d11] h-screen font-inter">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
