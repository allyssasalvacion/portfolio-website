const projects = {
  todolight: "./projects/todolight.png",
  cart: "./projects/cart.png",
  portfolio: "./projects/portfolio.png",
};

const links = {
  todo: "https://todo.allyssa.dev/",
  cart: "https://tinda-han-9f087.firebaseapp.com/",
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
            className="text-indigo-500 hover:opacity-70 font-semibold text-sm md:text-md"
            target="_blank"
          >
            https://tinda-han-9f087.firebaseapp.com/
          </a>
          <div className="flex flex-wrap gap-8 text-xs mt-8 uppercase text-zinc-700 dark:text-gray-300">
            <p>ReactJS</p>
            <p>TailwindCSS</p>
            <p>Ant Design</p>
            <p>Firebase</p>
          </div>
          <p className="text-sm mt-4 px-5 py-4 inner-container rounded shadow-container text-gray-700 dark:text-gray-400 leading-[24px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
            ratione.
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
            className="text-indigo-500 hover:opacity-70 font-semibold text-sm md:text-md"
            target="_blank"
          >
            https://todo.allyssa.dev
          </a>
          <div className="flex flex-wrap gap-8 text-xs mt-8 uppercase text-zinc-700 dark:text-gray-300">
            <p>JavaScript</p>
            <p>ReactJS</p>
            <p>TailwindCSS</p>
            <p>Ant Design</p>
          </div>
          <p className="text-sm mt-4 px-5 py-4 inner-container rounded shadow-container text-gray-700 dark:text-gray-400 leading-[24px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
            ratione.
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
      <div className="mb-36 flex flex-col-reverse gap-12 md:grid md:grid-cols-7 md:gap-20 items-center">
        <div className="col-span-3 object-scale-down">
          <img
            className="mt-2 rounded drop-shadow-2xl"
            src={projects.portfolio}
            alt="To Do List Light Mode"
          />
        </div>
        <div className="col-span-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-2 text-zinc-900 dark:text-gray-300">
            Portfolio Website
          </h2>
          <a
            href={links.todo}
            className="text-indigo-500 hover:opacity-70 font-semibold text-sm md:text-md"
            target="_blank"
          >
            https://todo.allyssa.dev
          </a>
          <div className="flex flex-wrap gap-8 text-xs mt-8 uppercase text-zinc-700 dark:text-gray-300">
            <p>JavaScript</p>
            <p>ReactJS</p>
            <p>TailwindCSS</p>
            <p>Vercel</p>
          </div>
          <p className="text-sm mt-4 px-5 py-4 inner-container rounded shadow-container text-gray-700 dark:text-gray-400 leading-[24px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
            ratione.
          </p>
        </div>
      </div>
    </section>
  );
}
