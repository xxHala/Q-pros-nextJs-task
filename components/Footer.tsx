import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white shadow dark:bg-gray-800 w-full	">
      <div className="w-full mx-auto w-full	 p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://github.com/xxHala/" className="hover:underline">
            Hala Azmi
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="/dashboard" className="hover:underline me-4 md:me-6">
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="https://github.com/xxHala/#-hala-azmi--associate-software-engineer"
              className="hover:underline me-4 md:me-6"
            >
              About Me
            </a>
          </li>

          <li>
            <a
              href="https://github.com/xxHala/#-connect-with-me"
              className="hover:underline me-4 md:me-6"
            >
              Contact With Me
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
