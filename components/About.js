const tech = {
  figma: "./tech/figma.svg",
  photoshop: "./tech/photoshop.svg",
  xd: "./tech/xd.svg",
  illustrator: "./tech/illustrator.svg",
  html: "./tech/html.svg",
  css: "./tech/css.svg",
  javascript: "./tech/javascript.svg",
  typescript: "./tech/typescript.svg",
  react: "./tech/react.svg",
  vue: "./tech/vue.svg",
  tailwind: "./tech/tailwind.svg",
  quasar: "./tech/quasar.svg",
  styled: "./tech/styled.svg",
  git: "./tech/git.svg",
  bootstrap: "./tech/bootstrap.svg",
  firebase: "./tech/firebase.svg",
  antd: "./tech/antd.svg",
  next: "./tech/next.svg",
};

export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto mt-24 lg:mt-36 mb-36 pr-16 md:pr-56 lg:pr-20 pl-6 md:pl-36 lg:pl-6"
    >
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-36">
        <div className="outer-container h-max w-full rounded-md ">
          <div className="inner-container w-full rounded mt-8 -mb-8 ml-8 md:mt-12 md:-mb-12 md:ml-12 p-8 md:p-12 shadow-container">
            <h2 className="flex items-center label">
              <span className="text-xl sm:text-2xl md:text-3xl mr-4">🎨</span>
              UI/UX Designer
            </h2>
            <p className="mt-4 paragraph">
              With almost 3 years of work experience, I am fully capable of
              creating eye-pleasing, easy-to-use, and modern user interfaces
              that follow industry standards. In my free time, I like to take
              inspiration on new design trends from world-class web designers in
              Dribbble, Awwwards, Instagram, and Twitter. I prefer minimalist,
              whitespace-heavy web designs that use clean typography.
            </p>
            <div className="mt-5 flex flex-wrap gap-6">
              <img className="h-6 md:h-8 mt-2" src={tech.figma} alt="Figma" />
              <img
                className="h-6 md:h-8 mt-2"
                src={tech.photoshop}
                alt="Adobe Photoshop"
              />
              <img
                className="h-6 md:h-8 mt-2"
                src={tech.illustrator}
                alt="Adobe Illustrator"
              />
              <img className="h-6 md:h-8 mt-2" src={tech.xd} alt="Adobe Xd" />
            </div>
          </div>
        </div>
        <div className="outer-container h-max mt-24 sm:mt-36 w-full rounded-md">
          <div className="inner-container w-full rounded mt-8 -mb-8 ml-8 md:mt-12 md:-mb-12 md:ml-12 p-8 md:p-12 shadow-container">
            <h2 className="flex items-center label">
              <span className="text-xl sm:text-2xl md:text-3xl mr-4">💻</span>
              Web Developer
            </h2>
            <p className="mt-4 paragraph">
              Javascript is responsible for almost all beautiful and dynamic Web
              UI and UX there is. Sometimes, I like to implement my designs from
              scratch using it with HTML, CSS. Other times, I like to use
              libraries such as React and Tailwind CSS which I used in this
              portfolio website.
            </p>
            <div className="mt-5 flex flex-wrap gap-6">
              <img className="h-6 md:h-8 mt-2" src={tech.html} alt="HTML5" />
              <img className="h-6 md:h-8 mt-2" src={tech.css} alt="CSS3" />
              <img
                className="h-6 md:h-8 mt-2"
                src={tech.javascript}
                alt="JavaScript"
              />
              <img
                className="h-6 md:h-8 mt-2"
                src={tech.typescript}
                alt="TypeScript"
              />
              <img className="h-6 md:h-8 mt-2" src={tech.react} alt="ReactJs" />
              <img className="h-6 md:h-8 mt-2" src={tech.vue} alt="VueJs" />
              <img
                className="h-6 md:h-8 mt-2"
                src={tech.tailwind}
                alt="TailwindCSS"
              />
              {/* <img
                className="h-6 md:h-8 mt-2"
                src={tech.bootstrap}
                alt="Bootstrap"
              />
              <img
                className="h-6 md:h-8 mt-2"
                src={tech.quasar}
                alt="Quasar"
              /> */}
              <img
                className="h-6 md:h-8 mt-2"
                src={tech.antd}
                alt="Ant Design"
              />
              {/* <img
                className="h-6 md:h-8 mt-2"
                src={tech.styled}
                alt="Styled Components"
              /> */}
              <img
                className="h-6 md:h-8 mt-2"
                src={tech.firebase}
                alt="Firebase"
              />
              <img className="h-6 md:h-8 mt-2" src={tech.git} alt="Git" />
              {/* <img
                className="h-6 md:h-8 mt-2"
                src={tech.next}
                alt="Next.js"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
