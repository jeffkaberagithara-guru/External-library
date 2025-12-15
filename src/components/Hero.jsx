import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gray-900 relative overflow-hidden">
      {/* HEADER */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                alt="Logo"
                className="h-8 w-auto"
              />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(true)}
              className="p-2.5 text-gray-200"
            >
              <HiMenu className="w-6 h-6" />
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex lg:gap-x-12">
            {["Product", "Features", "Marketplace", "Company"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-semibold text-white hover:text-indigo-400 transition"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold text-white">
              Log in →
            </a>
          </div>
        </nav>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 bg-gray-900 px-6 py-6 lg:hidden">
            <div className="flex items-center justify-between">
              <img
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                alt="Logo"
                className="h-8 w-auto"
              />
              <button onClick={() => setMenuOpen(false)}>
                <HiX className="w-6 h-6 text-white" />
              </button>
            </div>

            <div className="mt-6 space-y-4">
              {["Product", "Features", "Marketplace", "Company"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5"
                >
                  {item}
                </a>
              ))}
              <a
                href="#"
                className="block rounded-lg px-3 py-2.5 text-base font-semibold text-white hover:bg-white/5"
              >
                Log in
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO BACKGROUND SHAPES */}
      <div className="absolute inset-x-0 -top-40 -z-10 blur-3xl">
        <div
          className="relative left-1/2 h-[40rem] w-[80rem] -translate-x-1/2 rotate-30 bg-gradient-to-tr from-pink-400 to-indigo-500 opacity-30"
          style={{
            clipPath:
              "polygon(74% 44%,100% 62%,98% 27%,86% 0%,73% 33%,60% 62%,47% 58%,27% 77%,18% 100%,76% 98%)",
          }}
        />
      </div>

      {/* HERO CONTENT */}
      <div className="relative px-6 pt-32 pb-40 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            Data to enrich your online business
          </h1>

          <p className="mt-8 text-lg text-gray-400">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo.
          </p>

          <div className="mt-10 flex justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-500 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-indigo-400"
            >
              Get started
            </a>
            <a href="#" className="text-sm font-semibold text-white">
              Learn more →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;