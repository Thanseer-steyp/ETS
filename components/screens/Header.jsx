import Link from "next/link";

function Header() {
  return (
    <div>
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
                    <span className="text-white text-xs font-semibold">
                      ETA
                    </span>
                    <span className="text-white text-xs font-normal">
                      Event Ticketing App
                    </span>
                  </div>
                </div>
              </Link>
            </h1>
            <ul className="flex justify-center items-center gap-5">
              <li>
                <Link href="">Home</Link>
              </li>
              <li>
                <Link href="">Events</Link>
              </li>
              <li>
                {/* if not authenticated */}
                <Link href="/authentication">Signup/</Link>

                {/* if authenticated */}
                <Link href="">Dashboard</Link>
                {/*<img src="/assets/user.svg" alt="" className="w-4 invert" />*/}
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
