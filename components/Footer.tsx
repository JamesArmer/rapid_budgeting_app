import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="flex w-full items-center justify-center pt-4">
        <a
          href="https://github.com/JamesArmer"
          target="about:blank"
          rel="noopener noreferrer"
          className="pb-2"
        >
          Find me on <FaGithub size={25} className="inline-block" />
        </a>
      </div>
      <div className="w-full">
        <p className="text-2xs sm:text-xs sm:absolute sm:bottom-2 sm:right-2">
          <br />© 2023 James Armer. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
