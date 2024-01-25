import { aboutData } from "../constants";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto mt-24 lg:mt-36 mb-36 pr-16 md:pr-56 lg:pr-20 pl-6 md:pl-36 lg:pl-6"
    >
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-36">
        {aboutData.map((about) => (
          <div
            key={about.key}
            className={
              about.key === 2
                ? "outer-container h-max mt-24 sm:mt-36 w-full rounded-md"
                : "outer-container h-max w-full rounded-md"
            }
          >
            <div className="inner-container w-full rounded ml-4 mt-4 -mb-8  md:mt-8 md:ml-8 md:-mb-8  p-8 md:p-12 shadow-container">
              <h2 className="flex items-center label">
                {/* <span className="text-xl sm:text-2xl md:text-3xl mr-4">
                  {about.icon}
                </span> */}
                {about.role}
              </h2>
              <p className="mt-4 paragraph">{about.description}</p>
              <div className="mt-5 flex flex-wrap gap-4 md:gap-6">
                {about.imgSrc.map((image, index) => (
                  <img
                    key={index}
                    className="h-4 md:h-8 mt-2"
                    src={image.src}
                    alt={image.alt}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
