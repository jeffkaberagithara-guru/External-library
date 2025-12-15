function LatestWork() {
  // Projects Data (Mental Health Initiatives)
  const mentalHealthProjects = [
    {
      title: "Digital Resource Library",
      description: "A centralized, searchable database of evidence-based mental health tools and educational materials, making support accessible anytime[citation:1].",
      visual: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      outcome: "Launched 2024"
    },
    {
      title: "Community Support Platform",
      description: "Developed a safe, anonymous online space for peer-to-peer support and shared experiences, fostering connection and reducing isolation[citation:4].",
      visual: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      outcome: "10k+ Active Users"
    },
    {
      title: "Teletherapy Access Initiative",
      description: "Partnered with healthcare providers to deliver virtual therapy and psychiatry services, eliminating geographical barriers to care[citation:9].",
      visual: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      outcome: "500+ Sessions/Month"
    }
  ];

  // Partners Data (Mental Health Organizations & Tools)
  const partners = [
    {
      name: "Headspace",
      link: "https://organizations.headspace.com/",
      // Using a generic mindfulness icon as a placeholder. For a real project, you would use the official logo.
      logoPlaceholder: "HS"
    },
    {
      name: "988 Lifeline",
      link: "https://988lifeline.org/",
      logoPlaceholder: "988"
    },
    {
      name: "The Mental Health Coalition",
      link: "https://www.thementalhealthcoalition.org/",
      logoPlaceholder: "MHC"
    },
    {
      name: "Togetherall",
      link: "https://togetherall.com/",
      logoPlaceholder: "TA"
    },
    {
      name: "CDC Mental Health",
      link: "https://www.cdc.gov/mental-health/",
      logoPlaceholder: "CDC"
    },
    {
      name: "Wysa",
      link: "https://www.wysa.com/",
      logoPlaceholder: "WY"
    }
  ];

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          Our Impact & Network
        </h1>

        {/* Tabs - Updated for mental health context */}
        <div className="flex py-4 mt-4 overflow-x-auto overflow-y-hidden md:justify-center dark:border-gray-700">
          <button className="h-12 px-8 py-2 -mb-px text-sm text-center text-blue-600 bg-transparent border-b-2 border-blue-500 sm:text-base dark:border-blue-400 dark:text-blue-300 whitespace-nowrap focus:outline-none">
            Our Projects
          </button>
          <button className="h-12 px-8 py-2 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-gray-200 sm:text-base dark:text-white whitespace-nowrap focus:outline-none dark:border-gray-700 dark:hover:border-gray-400 hover:border-gray-400">
            Our Partners
          </button>
          <button className="h-12 px-8 py-2 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-gray-200 sm:text-base dark:text-white whitespace-nowrap focus:outline-none dark:border-gray-700 dark:hover:border-gray-400 hover:border-gray-400">
            Resources
          </button>
        </div>

        {/* ==================== */}
        {/* NEW: Projects / Works Done Section */}
        {/* ==================== */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-center text-gray-800 mb-8 dark:text-white md:text-2xl">
            Recent Initiatives
          </h2>
          <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
            {mentalHealthProjects.map((project, index) => (
              <a
                key={index}
                href="#"
                className="block overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              >
                <img
                  className="object-cover w-full h-48"
                  src={project.visual}
                  alt={`Visual for ${project.title}`}
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>
                  <div className="mt-4">
                    <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-200">
                      {project.outcome}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ==================== */}
        {/* NEW: Partners / Collaborations Section */}
        {/* ==================== */}
        <section className="px-4 py-12 mx-auto mt-16 max-w-7xl">
          <h2 className="text-xl font-semibold text-center text-gray-800 mb-10 dark:text-white md:text-2xl">
            Trusted By Leading Organizations
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <a
                key={index}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center w-32 h-32 p-4 transition-all duration-300 bg-gray-50 rounded-xl dark:bg-gray-800 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                title={`Visit ${partner.name}`}
              >
                {/* Placeholder for partner logo */}
                <div className="flex items-center justify-center w-16 h-16 mb-3 text-2xl font-bold text-white bg-gradient-to-br from-blue-500 to-purple-600 rounded-full">
                  {partner.logoPlaceholder}
                </div>
                <span className="text-sm font-medium text-center text-gray-700 dark:text-gray-300">
                  {partner.name}
                </span>
              </a>
            ))}
          </div>
        </section>  
      </div>
    </section>
  );
}

export default LatestWork;