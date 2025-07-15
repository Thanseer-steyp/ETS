"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-[#0b1c2d] w-full py-4 border-b border-gray-700">
      <div className="px-6">
        <div className="flex items-center justify-between">
          <h1>
            <Link href="/">
              <div className="flex items-center">
                <div className="logo mr-4 text-3xl">Eventify</div>
              </div>
            </Link>
          </h1>

          <ul className="flex justify-center items-center gap-12">
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
                Explore Events
              </Link>
            </li>
            <li>
              <Link
                href="/events/create"
                className={`pb-1 border-b-2 transition-all duration-200 ${
                  pathname === "/create-events"
                    ? "text-yellow-400 border-yellow-400"
                    : "text-white border-transparent hover:text-yellow-400"
                }`}
              >
                Create Events
              </Link>
            </li>
          </ul>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 border border-gray-400 p-3 rounded-lg w-[400px]">
                <img src="/glass.svg" alt="" className="w-3" />
                <input
                  type="text"
                  className="focus:outline-none w-full"
                  placeholder="Search for events, shows and programmes"
                />
            </div>

            <li>
              {/* <Link
                href="/authentication"
                className={`pb-1 border-b-2 transition-all duration-200 ${
                  pathname === "/authentication"
                    ? "text-yellow-400 border-yellow-400"
                    : "text-white border-transparent hover:text-yellow-400"
                }`}
              >
                Dashboard
              </Link> */}
              <Link
                href="/authentication"
                className="p-3.5 bg-gray-400 block w-full rounded-full"
              >
                <img src="/user-solid.svg" alt="" className="w-5 h-5" />
              </Link>
            </li>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
