import { useState } from "react";

const testimonials = [
  {
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=880&q=80",
    title: "Help us improve our productivity",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe.",
    name: "Ronik Ederson",
    role: "Marketing Manager at Stech",
  },
  {
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=880&q=80",
    title: "A truly amazing experience",
    text:
      "Quidem modi reprehenderit vitae exercitationem aliquid dolores ullam temporibus enim expedita aperiam.",
    name: "Sarah Johnson",
    role: "Product Designer",
  },
  {
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=880&q=80",
    title: "Outstanding customer support",
    text:
      "Porro consequuntur saepe accusantium consequatur. Assumenda rerum culpa aperiam dolorum.",
    name: "Michael Brown",
    role: "Startup Founder",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=880&q=80",
    title: "It changed how we work",
    text:
      "Mollitia iure consectetur dicta tenetur obcaecati corrupti aspernatur a.",
    name: "David Wilson",
    role: "Operations Lead",
  },
  {
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=880&q=80",
    title: "Highly recommended",
    text:
      "Voluptatibus delectus assumenda rerum, culpa aperiam dolorum, obcaecati corrupti.",
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