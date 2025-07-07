'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-[#131d30] w-full py-4">
      <div className="wrapper">
        <div className="flex items-center justify-between">
          <h1>
            <Link href="/">
              <div className="flex items-center">
                <div className="mr-4 bg-[#fab641] w-7 h-7 flex justify-center items-center rounded-md text-black font-bold">
                  E
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-xs font-semibold">ETA</span>
                  <span className="text-white text-xs font-normal">
                    Event Ticketing App
                  </span>
                </div>
              </div>
            </Link>
          </h1>

          <ul className="flex justify-center items-center gap-5">
            <li>
              <Link
                href="/"
                className={`pb-1 border-b-2 transition-all duration-200 ${
                  pathname === "/"
                    ? "text-yellow-400 border-yellow-400"
                    : "text-white border-transparent hover:text-yellow-400 "
                }`}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/events"
                className={`pb-1 border-b-2 transition-all duration-200 ${
                  pathname === "/events"
                    ? "text-yellow-400 border-yellow-400"
                    : "text-white border-transparent hover:text-yellow-400"
                }`}
              >
                Events
              </Link>
            </li>

            <li>
              <Link
                href="/authentication"
                className={`pb-1 border-b-2 transition-all duration-200 ${
                  pathname === "/authentication"
                    ? "text-yellow-400 border-yellow-400"
                    : "text-white border-transparent hover:text-yellow-400"
                }`}
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
