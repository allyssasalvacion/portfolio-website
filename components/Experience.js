export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-7xl mx-auto px-6 mt-24 lg:mt-48 mb-36 relative"
    >
      <h2 className="label mb-5">Experience</h2>
      <div className="flex flex-col lg:flex-row mx-0 md:mx-48 lg:mx-0 gap-14 mt-0 sm:mt-12 lg:mt-0">
        <div className="bg-[#edf2f6] dark:bg-[#0e1117] w-full rounded-md p-6 h-fit">
          <h3 className="text-lg sm:text-xl font-semibold gradient-text">
            Front End Developer, Growsari
          </h3>
          <p className="mt-2 subtext text-xs">FEBRUARY 2022 - PRESENT</p>
          <p className="mt-5 paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="bg-[#edf2f6] dark:bg-[#0e1117] w-full rounded-md p-6 h-fit">
          <h3 className="text-lg sm:text-xl font-semibold gradient-text">
            Software Engineer, Nuvensis
          </h3>
          <p className="mt-2 subtext text-xs">OCTOBER 2020 - AUGUST 2021</p>
          <p className="mt-5 paragraph">
            Designed, prototyped, and developed various features of 4 different
            projects- company website, product website, marketplace web
            application, and merchant web application. All using HTML, CSS,
            JavaScript with VueJS framework, TailwindCSS library, and Quasar
            component library.
          </p>
        </div>
        <div className="bg-[#edf2f6] dark:bg-[#0e1117] w-full rounded-md p-6 h-fit">
          <h3 className="text-lg sm:text-xl font-semibold gradient-text">
            UI / UX Developer, BPOSeats
          </h3>
          <p className="mt-2 subtext text-xs">AUGUST 2019 - AUGUST 2020</p>
          <p className="mt-5 paragraph">
            Responsible for creating designs and templates for features such as
            messaging, release notes, landing pages, and HR information system
            related features using JavaScript with VueJS framework.
          </p>
        </div>
      </div>
    </section>
  );
}
