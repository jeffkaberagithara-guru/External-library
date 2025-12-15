function About() {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 lg:py-12 lg:flex lg:justify-center">
      <div className="overflow-hidden bg-white dark:bg-gray-900 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
        
        {/* Image Section */}
        <div className="lg:w-1/2">
          <div
            className="h-64 bg-cover lg:h-full"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
            }}
          />
        </div>

        {/* Content Section */}
        <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            Your Journey to <span className="text-blue-500">Mental Wellness</span> Starts Here
          </h2>

          <p className="mt-4 text-gray-500 dark:text-gray-300">
            At MindfulSupport, we believe everyone deserves access to compassionate mental health care. 
            Our platform offers a safe, judgment-free space where you can explore resources, connect with 
            understanding, and take gentle steps toward emotional wellbeing—all at your own pace.
          </p>

          <p className="mt-4 text-gray-500 dark:text-gray-300">
            Whether you're seeking coping strategies, professional guidance, or simply a listening ear, 
            we're here to support you through every step of your healing journey. Your mental health 
            matters, and you don't have to navigate it alone.
          </p>

          <div className="inline-flex w-full mt-6 sm:w-auto">
            <a
              href="#"
              className="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              Begin Your Healing Journey
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;