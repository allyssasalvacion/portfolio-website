import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Container({ children }) {
  const meta = {
    title: "Allyssa Albores - Front End Developer",
    author: "Allyssa Albores",
    description:
      "Allyssa Albores is a Front End Developer based in Cebu, Philippines",
    type: "website",
    keywords: "Allyssa, Albores, Allyssa Albores",
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={meta.description}></meta>
        <meta name="keywords" content={meta.keywords} />
        <meta name="author" content={meta.author} />
        <meta content={meta.description} name="description" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Allyssa Albores" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <link rel="icon" type="image/png" sizes="32x32" href="/allyssabg.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Homemade+Apple&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="w-full bg-white dark:bg-[#090d11] h-screen font">
        <Navbar />
        <div className="overflow-auto bg-white dark:bg-[#090d11]">
          {children}
        </div>
        <Footer />
      </main>
    </div>
  );
}
