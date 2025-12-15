import { useState } from "react";
import { HiMenu, HiX, HiPhone } from "react-icons/hi";

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gray-900 relative overflow-hidden">
      {/* HEADER - Change from sticky to fixed with proper positioning */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm">
        <nav className="flex items-center justify-between p-6 lg:px-8">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Mindful Support Hub</span>
              <img
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                alt="Mindful Support Hub Logo"
                className="h-8 w-auto"
              />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(true)}
              className="p-2.5 text-gray-200 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-900"
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <HiMenu className="w-6 h-6" />
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex lg:gap-x-8">
            {["Home", "Self Help", "Find Support", "Learn", "Crisis"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors focus:outline-none focus:text-white px-3 py-2 rounded-md hover:bg-white/5 focus:bg-white/5"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right side: Login + Emergency button */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-x-4">
            {/* Emergency button - added here */}
            <a 
              href="tel:112"
              className="flex items-center gap-x-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-red-500 to-orange-500 rounded-md hover:from-red-600 hover:to-orange-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-gray-900 shadow-md"
            >
              <HiPhone className="w-4 h-4" />
              <span>Emergency: Call 112</span>
            </a>
            
            {/* Existing login button */}
            <a 
              href="#" 
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors focus:outline-none focus:text-white px-4 py-2 rounded-md hover:bg-white/5 focus:bg-white/5"
            >
              Log in
            </a>
          </div>
        </nav>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 bg-gray-900 px-6 py-6 lg:hidden">
            <div className="flex items-center justify-between">
              <div>
                <span className="sr-only">Mindful Support Hub</span>
                <img
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Mindful Support Hub Logo"
                  className="h-8 w-auto"
                />
              </div>
              <button 
                onClick={() => setMenuOpen(false)}
                className="p-2 text-gray-200 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md"
                aria-label="Close menu"
              >
                <HiX className="w-6 h-6" />
              </button>
            </div>

            <div className="mt-8 space-y-1">
              {["Home", "Self Help", "Find Support", "Learn", "Crisis"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block rounded-lg px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 focus:outline-none focus:text-white focus:bg-white/5 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              
              {/* Emergency button in mobile menu */}
              <a
                href="tel:112"
                className="flex items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-base font-medium text-white bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 mt-6"
                onClick={() => setMenuOpen(false)}
              >
                <HiPhone className="w-5 h-5" />
                <span>Emergency: Call 112</span>
              </a>
              
              {/* Existing login button in mobile menu */}
              <a
                href="#"
                className="block rounded-lg px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 focus:outline-none focus:text-white focus:bg-white/5 transition-colors mt-4"
                onClick={() => setMenuOpen(false)}
              >
                Log in
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Add padding to push content down below fixed header */}
      <div className="pt-16">
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
            {/* Trust signal - added at top */}
            <div className="mb-6 text-sm text-indigo-300">
              <span className="bg-white/10 px-3 py-1 rounded-full">Free & anonymous • No sign-up required</span>
            </div>

            {/* Changed headline */}
            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
              Your mental health
              <span className="block">matters here</span>
            </h1>

            {/* Human-first value proposition - added under headline */}
            <p className="mt-8 text-lg text-gray-300">
              A safe, private space where you can find support without judgment or pressure.
            </p>

            {/* Short "What you can do here" hint - added */}
            <p className="mt-4 text-gray-400">
              Explore resources, practice self-care, or connect with understanding.
            </p>

            {/* Changed CTAs */}
            <div className="mt-10 flex justify-center gap-x-6">
              {/* Primary action - low commitment */}
              <a
                href="#"
                className="rounded-md bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-indigo-400 transition"
              >
                Check in with yourself
              </a>
              
              {/* Secondary action - urgent support */}
              <a 
                href="#"
                className="rounded-md border border-red-400/30 px-6 py-3 text-sm font-semibold text-red-300 hover:bg-red-900/20 transition"
              >
                Crisis support →
              </a>
            </div>

            {/* Added privacy reassurance */}
            <p className="mt-6 text-sm text-gray-500">
              Your privacy is protected. No personal data required to get started.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;