import React, { Fragment, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Button from "./Button";
import { Popover, Transition } from "@headlessui/react";
import {
  MenuIcon,
  XIcon,
  MoonIcon,
  LightBulbIcon,
} from "@heroicons/react/outline";

const navigation = [
  { name: "ABOUT", href: "#about" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "PROJECTS", href: "#projects" },
  {
    name: "RESUME",
    href: "https://drive.google.com/file/d/1XP3J2ahWaVvDrGjbnCVRUhFLdWTI20jM/view?usp=sharing",
  },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="bg-white dark:bg-[#090d11] fixed w-full top-0 z-50">
      <div className="px-6 py-6 max-w-7xl mx-auto flex md:flex-row justify-between items-center h-full">
        {/* logo */}
        <div className="flex flex-col">
          <Link href="/">
            <a>
              <h1 className="pt-2 font-bold text-zinc-700 dark:text-gray-300 text-xl font-apple flex flex-row gap-1">
                allyssa <span className="hidden md:flex">salvacion</span>
              </h1>
            </a>
          </Link>
        </div>

        {/* links */}
        <Popover>
          <div className="flex-row gap-2 hidden md:flex">
            <Button
              label="ABOUT"
              style="link"
              onClick={() => window.location.assign("#about")}
            />
            <Button
              label="EXPERIENCE"
              style="link"
              onClick={() => window.location.assign("#experience")}
            />
            <Button
              label="PROJECTS"
              style="link"
              onClick={() => window.location.assign("#projects")}
            />
            <Button
              label="RESUME"
              style="link"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1XP3J2ahWaVvDrGjbnCVRUhFLdWTI20jM/view?usp=sharing",
                  "_blank"
                )
              }
            />
            <Button
              label={
                mounted && theme === "dark" ? (
                  <LightBulbIcon className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <MoonIcon className="h-6 w-6" aria-hidden="true" />
                )
              }
              style="toggle"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            />
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <Popover.Button className="bg-white dark:bg-[#090d11] rounded-md p-2 inline-flex items-center justify-center text-zinc-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none">
              <span className="sr-only">Open main menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg bg-gray-100 dark:bg-[#0E1117] ring-1 ring-black ring-opacity-5 overflow-hidden pb-2">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div className="flex flex-row">
                    <h1 className="pt-2 font-semibold text-zinc-700 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 text-xl font-apple mr-2">
                      allyssa
                    </h1>
                    <Button
                      label={
                        mounted && theme === "dark" ? (
                          <LightBulbIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <MoonIcon className="h-6 w-6" aria-hidden="true" />
                        )
                      }
                      style="toggle"
                      onClick={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                      }
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-gray-100 dark:bg-[#0E1117] rounded-md p-2 inline-flex items-center justify-center text-zinc-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-none">
                      <span className="sr-only">Close main menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 text-sm rounded-md text-zinc-700 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </header>
  );
}
