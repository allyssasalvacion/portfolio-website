const heroUrl = "./allyssa.png";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 xl:px-5 mb-0 lg:mb-32 mt-24 md:pt-12">
      <div className="flex flex-col sm:flex-row items-center gap-8 md:gap-10 lg:gap-16 mx-12 sm:mx-24 md:mx-32 lg:mx-40">
        <img
          src={heroUrl}
          alt="avatar"
          className="rounded-md h-24 sm:h-48 lg:h-54 shadow-2xl dark:shadow-2xl shadow-zinc-500/50 dark:shadow-fuchsia-600/20 dark:bg-gray-200"
        />
        <h1 className="leading-tight text-center sm:text-left text-2xl md:text-4xl xl:text-5xl font-bold text-zinc-900 dark:text-gray-300">
          <p className="-mb-4">Hey there 👋🏼</p>
          <br />
          I'm <span className="gradient-text">Allyssa</span>, a designer and
          developer specializing in web interface and experience
        </h1>
      </div>
    </section>
  );
}
