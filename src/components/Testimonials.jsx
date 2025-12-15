import { useState } from "react";

const testimonials = [
  {
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=880&q=80",
    title: "Provided clarity during a stressful career transition",
    text:
      "The stress management resources helped me navigate a difficult job change with much more emotional balance and self-awareness than I thought possible.",
    name: "Ronik Ederson",
    role: "Marketing Manager at Stech",
  },
  {
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=880&q=80",
    title: "Found a compassionate community",
    text:
      "Connecting with others who understood my anxiety made me feel less alone. The support groups are a safe space for genuine sharing.",
    name: "Sarah Johnson",
    role: "Product Designer",
  },
  {
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=880&q=80",
    title: "Essential tools for managing founder stress",
    text:
      "Building a company is incredibly stressful. The mindfulness exercises and practical guides have been crucial for maintaining my mental health.",
    name: "Michael Brown",
    role: "Startup Founder",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=880&q=80",
    title: "Improved team communication and support",
    text:
      "Implementing mental wellness practices from the site has transformed our team's dynamics, fostering a more supportive work environment.",
    name: "David Wilson",
    role: "Operations Lead",
  },
  {
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=880&q=80",
    title: "Incredibly valuable resource for clients and myself",
    text:
      "I recommend this platform to my clients for self-guided support, and I use the professional resources to enhance my own practice.",
    name: "Emily Carter",
    role: "Business Consultant",
  },
];

function Testimonials() {
  const [index, setIndex] = useState(0);

  const prevSlide = () =>
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  const nextSlide = () =>
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  const current = testimonials[index];

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="relative flex">
        <div className="min-h-screen lg:w-1/3"></div>
        <div className="hidden w-3/4 min-h-screen bg-gray-100 dark:bg-gray-800 lg:block"></div>

        <div className="container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            What our <span className="text-blue-500">customers</span>
            <br /> are saying
          </h1>

          {/* SLIDER */}
          <div className="mt-10 lg:mt-20 lg:flex lg:items-center transition-all duration-500 ease-in-out">
            <img
              key={current.image}
              className="object-cover object-center w-full rounded-lg lg:w-[32rem] h-96 transition-all duration-500"
              src={current.image}
              alt={current.name}
            />

            <div className="mt-8 lg:px-10 lg:mt-0 transition-all duration-500">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white lg:w-72">
                {current.title}
              </h2>

              <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400">
                “ {current.text} ”
              </p>

              <h3 className="mt-6 text-lg font-medium text-blue-500">
                {current.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {current.role}
              </p>
            </div>
          </div>

          {/* CONTROLS */}
          <div className="flex items-center justify-between mt-12 lg:justify-start">
            <button
              onClick={prevSlide}
              className="p-2 text-gray-800 transition hover:bg-gray-100 border rounded-full dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              ‹
            </button>

            <button
              onClick={nextSlide}
              className="p-2 ml-6 text-gray-800 transition hover:bg-gray-100 border rounded-full dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;