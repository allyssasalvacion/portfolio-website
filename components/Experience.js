import { ChevronRightIcon } from "@heroicons/react/outline";

const growsari = [
  {
    key: 1,
    description:
      "A tech-enabled B2B platform that helps the Philippines’ over one million sari-sari stores. I love working for them as together, we empower small and medium business owners.",
  },
  {
    key: 2,
    description:
      "As a front end developer for Growsari, I help small business owners by creating user-friendly interfaces that make it easy for them to shop for supplies.",
  },
];

const nuvensis = [
  {
    key: 1,
    description:
      "Nuvensis creates custom software solutions for clients all over the globe.",
  },
  {
    key: 2,
    description:
      "As the only designer and UI developer, I gathered more experience than ever before. I learned about the different frameworks and libraries that make my life easier until today. ",
  },
];

const bposeats = [
  {
    key: 1,
    description:
      "As the first ever video-centric leasing platform, BPOSeats offer customized business solutions for clients who want to avail of the Philippines' outsourcing talent from the comfort of their home.",
  },
  {
    key: 2,
    description:
      "Working on several new features that require custom experiences and interfaces, it is in BPOSeats that I discovered that I could be both a designer and a developer.",
  },
];

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
          <div className="mt-8">
            <dl className="flex flex-col gap-6">
              {growsari.map((item) => (
                <div key={item.key} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center text-indigo-500">
                      <ChevronRightIcon
                        className="h-4 w-4"
                        aria-hidden="true"
                      />
                    </div>
                  </dt>
                  <dd className="-mt-2 ml-8 paragraph">{item.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="bg-[#edf2f6] dark:bg-[#0e1117] w-full rounded-md p-6 h-fit">
          <h3 className="text-lg sm:text-xl font-semibold gradient-text">
            Software Engineer, Nuvensis
          </h3>
          <p className="mt-2 subtext text-xs">OCTOBER 2020 - AUGUST 2021</p>
          <div className="mt-8">
            <dl className="flex flex-col gap-6">
              {nuvensis.map((item) => (
                <div key={item.key} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center text-indigo-500">
                      <ChevronRightIcon
                        className="h-4 w-4"
                        aria-hidden="true"
                      />
                    </div>
                  </dt>
                  <dd className="-mt-2 ml-8 paragraph">{item.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="bg-[#edf2f6] dark:bg-[#0e1117] w-full rounded-md p-6 h-fit">
          <h3 className="text-lg sm:text-xl font-semibold gradient-text">
            UI / UX Developer, BPOSeats
          </h3>
          <p className="mt-2 subtext text-xs">AUGUST 2019 - AUGUST 2020</p>
          <div className="mt-8">
            <dl className="flex flex-col gap-6">
              {bposeats.map((item) => (
                <div key={item.key} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center text-indigo-500">
                      <ChevronRightIcon
                        className="h-4 w-4"
                        aria-hidden="true"
                      />
                    </div>
                  </dt>
                  <dd className="-mt-2 ml-8 paragraph">{item.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
