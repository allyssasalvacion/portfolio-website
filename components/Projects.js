import { projectsData } from "../constants";

export default function Projects() {
  return (
    <section id="projects" className="max-w-7xl mx-auto mt-24 px-6">
      <h2 className="label mb-5">Projects</h2>
      {projectsData.map((project) => (
        <div
          key={project.key}
          className={`mb-16 md:mb-36 flex ${
            project.key % 2 === 0 ? "flex-col" : "flex-col-reverse"
          } gap-12 md:grid md:grid-cols-7 lg:gap-20 items-center`}
        >
          <div
            className={`col-span-3 object-scale-down ${
              project.key % 2 === 0 ? "order-1" : ""
            }`}
          >
            <img
              className="mt-2 rounded drop-shadow-2xl"
              src={project.src}
              alt={project.alt}
            />
          </div>
          <div className="col-span-4">
            <h2 className="text-md sm:text-lg md:text-xl font-semibold mb-1 text-zinc-900 dark:text-gray-300">
              {project.title}
            </h2>
            <a
              href={project.link}
              className="text-indigo-500 hover:opacity-80 font-semibold text-sm md:text-md"
              target="_blank"
            >
              {project.link}
            </a>
            <div className="flex flex-wrap gap-8 text-xs mt-8 uppercase text-zinc-700 dark:text-gray-300">
              {project.tech.map((tech, index) => (
                <p key={index}>{tech}</p>
              ))}
            </div>
            <p className="text-sm mt-4 px-5 py-4 inner-container rounded shadow-container text-gray-700 dark:text-gray-400 leading-[24px]">
              {project.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
