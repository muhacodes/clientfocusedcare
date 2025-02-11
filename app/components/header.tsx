import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const HomeSectionPage: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER */}
      <header className="w-full bg-white border-b border-gray-200">
        <div className="mx-auto flex items-center justify-between px-6 py-4 max-w-7xl">
          {/* Left Nav */}
          <nav className="flex items-center space-x-6">
            <Link
              href="#"
              className="text-sm font-medium text-gray-800 hover:text-gray-600"
            >
              Home Care
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-800 hover:text-gray-600"
            >
              About Us
            </Link>
            <div className="relative">
              <button
                type="button"
                className="text-sm font-medium text-gray-800 hover:text-gray-600 inline-flex items-center space-x-1"
              >
                <span>Link Three</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {/* TODO: Insert dropdown menu items if desired */}
            </div>
          </nav>

          {/* Logo (Center) */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <Link href="/" className="text-lg font-bold tracking-wider">
              Logo
            </Link>
          </div>

          {/* Right Button */}
          <div>
            <button className="bg-black text-white px-4 py-2 text-sm font-medium hover:bg-gray-900 transition-colors">
              Button
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative flex-1 w-full bg-black text-white">
        {/* Background Image filling the entire hero section */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // <-- replace with your own image path
            alt="Hero background"
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Hero Content */}
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-28">
          {/* You can adjust “md:py-28” etc. for spacing on larger screens */}
          <div className="max-w-lg">
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">
              Medium length hero headline goes here
            </h1>
            <p className="text-gray-200 text-base sm:text-lg mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              varius enim in eros elementum tristique. Duis cursus, mi quis viverra
              ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
            </p>
            <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4">
              <button className="bg-white text-black px-6 py-2 font-medium hover:bg-gray-200 transition-colors">
                Button
              </button>
              <button className="bg-black text-white border border-white px-6 py-2 font-medium hover:bg-gray-800 transition-colors">
                Button
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSectionPage;
