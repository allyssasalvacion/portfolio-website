const projects = {
  todolight: "./projects/todolight.png",
  cart: "./projects/cart.png",
  portfolio: "./projects/portfolio.png",
  chat: "./projects/chat.png",
};

const links = {
  todo: "https://todo.allyssasalvacion.com/",
  cart: "https://cart.allyssasalvacion.com/",
  portfolio: "https://allyssasalvacion.com/",
  chat: "https://chat.allyssasalvacion.com/",
};

export default function Projects() {
  return (
    <section id="projects" className="max-w-7xl mx-auto mt-24 px-6">
      <h2 className="label mb-5">Projects</h2>
      <div className="mb-16 md:mb-36 flex flex-col-reverse gap-12 md:grid md:grid-cols-7 lg:gap-20 items-center">
        <div className="col-span-3 object-scale-down">
          <img
            className="mt-2 rounded drop-shadow-2xl"
            src={projects.cart}
            alt="To Do List Light Mode"
          />
        </div>
        <div className="col-span-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-2 text-zinc-900 dark:text-gray-300">
            Shopping Cart
          </h2>
          <a
            href={links.cart}
            className="text-indigo-500 hover:opacity-80 font-semibold text-sm md:text-md"
            target="_blank"
          >
            https://cart.allyssasalvacion.com/
          </a>
          <div className="flex flex-wrap gap-8 text-xs mt-8 uppercase text-zinc-700 dark:text-gray-300">
            <p>ReactJS</p>
            <p>TailwindCSS</p>
            <p>Ant Design</p>
            <p>Firebase</p>
          </div>
          <p className="text-sm mt-4 px-5 py-4 inner-container rounded shadow-container text-gray-700 dark:text-gray-400 leading-[24px]">
            E-commerce applications with add-to-cart functionalities are very
            common nowadays yet still a very good practice for designers and
            front-end developers. As a pre-employment assignment for Growsari,
            an e-commerce platform itself, I created a simple web app that would
            show I can work on shopping-cart experiences with my designs
            following their requirements.
          </p>
        </div>
      </div>
      <div className="mb-16 md:mb-36 flex flex-col gap-12 md:grid md:grid-cols-7 md:gap-20 items-center">
        <div className="col-span-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-2 text-zinc-900 dark:text-gray-300">
            Simple Todo List
          </h2>
          <a
            href={links.todo}
            className="text-indigo-500 hover:opacity-80 font-semibold text-sm md:text-md"
            target="_blank"
          >
            https://todo.allyssasalvacion.com/
          </a>
          <div className="flex flex-wrap gap-8 text-xs mt-8 uppercase text-zinc-700 dark:text-gray-300">
            <p>ReactJS</p>
            <p>TailwindCSS</p>
            <p>Ant Design</p>
            <p>Firebase</p>
          </div>
          <p className="text-sm mt-4 px-5 py-4 inner-container rounded shadow-container text-gray-700 dark:text-gray-400 leading-[24px]">
            My very first React project, my Simple Todo List application allows
            me to keep track of my tasks, be able to edit, and complete them
            when I'm done.
          </p>
        </div>
        <div className="col-span-3 object-scale-down">
          <img
            className="mt-2 rounded drop-shadow-2xl"
            src={projects.todolight}
            alt="To Do List Light Mode"
          />
        </div>
      </div>
      <div className="mb-16 md:mb-36 flex flex-col-reverse gap-12 md:grid md:grid-cols-7 lg:gap-20 items-center">
        <div className="col-span-3 object-scale-down">
          <img
            className="mt-2 rounded drop-shadow-2xl"
            src={projects.chat}
            alt="Messaging chat"
          />
        </div>
        <div className="col-span-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-2 text-zinc-900 dark:text-gray-300">
            Messaging App
          </h2>
          <a
            href={links.chat}
            className="text-indigo-500 hover:opacity-80 font-semibold text-sm md:text-md"
            target="_blank"
          >
            https://chat.allyssasalvacion.com/
          </a>
          <div className="flex flex-wrap gap-8 text-xs mt-8 uppercase text-zinc-700 dark:text-gray-300">
            <p>ReactJS</p>
            <p>Firebase</p>
            <p>Material UI</p>
          </div>
          <p className="text-sm mt-4 px-5 py-4 inner-container rounded shadow-container text-gray-700 dark:text-gray-400 leading-[24px]">
            Another very common UI/UX are of messaging applications. Nowadays,
            almost every big application has its own way of giving users a place
            to communicate. My version is built using React and Firebase, with
            the ability to use your Google account to leave a message.
          </p>
        </div>
      </div>
      <div className="mb-36 flex flex-col gap-12 md:grid md:grid-cols-7 md:gap-20 items-center">
        <div className="col-span-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-2 text-zinc-900 dark:text-gray-300">
            Portfolio Website
          </h2>
          <a
            href={links.portfolio}
            className="text-indigo-500 hover:opacity-80 font-semibold text-sm md:text-md"
            target="_blank"
          >
            https://allyssasalvacion.com/
          </a>
          <div className="flex flex-wrap gap-8 text-xs mt-8 uppercase text-zinc-700 dark:text-gray-300">
            <p>NextJS</p>
            <p>TailwindCSS</p>
            <p>Vercel</p>
          </div>
          <p className="text-sm mt-4 px-5 py-4 inner-container rounded shadow-container text-gray-700 dark:text-gray-400 leading-[24px]">
            As a designer and web developer, the best way to showcase my skill
            is to present it in my very own personal website. The site shows my
            preferences and tendencies as a designer - minimalist and use a lot
            of whitespace, modern, and has its own dark mode theme.
          </p>
        </div>
        <div className="col-span-3 object-scale-down">
          <img
            className="mt-2 rounded drop-shadow-2xl"
            src={projects.portfolio}
            alt="To Do List Light Mode"
          />
        </div>
      </div>
    </section>
  );
}
