import { FaHeartbeat, FaUserMd, FaHeadphones, FaHandsHelping, FaBrain, FaShieldAlt } from 'react-icons/fa';

function Features() {
  const mentalHealthActions = [
    {
      icon: <FaHeartbeat className="w-6 h-6" />,
      title: "Mood Check-in",
      description: "Track your emotional wellbeing with our gentle, daily check-in tool. Monitor patterns and celebrate progress.",
      link: "#mood-check"
    },
    {
      icon: <FaBrain className="w-6 h-6" />,
      title: "Self-Assessment",
      description: "Anonymous screening tools to help you understand your mental health. Not a diagnosis, but a starting point.",
      link: "#assessment"
    },
    {
      icon: <FaUserMd className="w-6 h-6" />,
      title: "Find a Counselor",
      description: "Connect with licensed therapists in your area or online. Filter by specialty, insurance, and availability.",
      link: "#counselors"
    },
    {
      icon: <FaHandsHelping className="w-6 h-6" />,
      title: "Crisis Support",
      description: "Immediate, confidential support when you need it most. 24/7 hotlines and chat services available.",
      link: "#crisis"
    },
    {
      icon: <FaHeadphones className="w-6 h-6" />,
      title: "Guided Meditation",
      description: "Calm your mind with breathing exercises and mindfulness practices designed to reduce anxiety.",
      link: "#meditation"
    },
    {
      icon: <FaShieldAlt className="w-6 h-6" />,
      title: "Safety Planning",
      description: "Create a personalized safety plan for difficult moments. Your wellbeing is our priority.",
      link: "#safety"
    }
  ];

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-16 mx-auto">
        <div className="lg:flex lg:items-center">
          {/* Left content */}
          <div className="w-full space-y-12 lg:w-1/2">
            <div>
              <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                Find Support <br /> Through Our Tools
              </h1>

              <div className="mt-2">
                <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
              </div>
            </div>

            {/* Mental Health Action Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mentalHealthActions.map((action, index) => (
                <a
                  key={index}
                  href={action.link}
                  className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-start space-x-4">
                    <span className="inline-block p-3 text-blue-500 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                      {action.icon}
                    </span>
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                        {action.title}
                      </h2>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                        {action.description}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="hidden lg:flex lg:w-1/2 lg:justify-center">
            <img
              className="w-[28rem] h-[28rem] object-cover rounded-full xl:w-[34rem] xl:h-[34rem] shadow-lg"
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Person practicing mindfulness in a peaceful environment"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;