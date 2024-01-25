import { ChevronRightIcon } from "@heroicons/react/outline";
import { workExperience } from "../constants";

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-7xl mx-auto px-6 mt-24 lg:mt-48 mb-36 relative"
    >
      <h2 className="label mb-5">Experience</h2>
      <div className="flex flex-col lg:flex-row mx-0 md:mx-48 lg:mx-0 gap-14 mt-0 sm:mt-12 lg:mt-0">
        {workExperience.map((job) => (
          <div
            key={job.key}
            className="bg-[#edf2f6] dark:bg-[#0e1117] w-full rounded-md p-6 h-fit"
          >
            <h3 className="text-lg sm:text-xl font-semibold gradient-text">
              {job.position}, {job.companyName}
            </h3>
            <p className="mt-2 subtext text-xs">{job.period}</p>
            <div className="mt-8">
              <dl className="flex flex-col gap-6">
                {job.description.map((desc, index) => (
                  <div key={index} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center text-indigo-500">
                        <ChevronRightIcon
                          className="h-4 w-4"
                          aria-hidden="true"
                        />
                      </div>
                    </dt>
                    <dd className="-mt-2 ml-8 leading-[24px] text-sm text-gray-700 dark:text-gray-400">
                      {desc}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
