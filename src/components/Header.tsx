import React from "react";
import Link from "@/components/GatsbyLink";
import Container from "@/components/Container";
import { SITE_TITLE, MENU } from "../../config";

export default function Header() {
  return (
    <header>
      <Container>
        <nav className="flex justify-between py-6 md:py-10">
          <Link to="/" className="text-black">
          {SITE_TITLE}
          </Link>
          <ul className="list-style-none grid grid-flow-col auto-cols-max gap-6 items-center">
            {MENU.map((item) => (
              <li key={item.label}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link
                to="mailto:jimmy.work.kr@gmail.com"
                target="_blank"
                className="px-4 py-2 bg-gray-800 rounded-full text-white hover:bg-gray-600 transition-all ease-in-out duration-300 hover:text-white uppercase"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
