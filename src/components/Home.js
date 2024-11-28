import React from 'react';

function Home() {
  return (
    <section
      id="home"
      className="home h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 text-white px-4"
    >
      {/* Heading */}
      <h1 className="custom-text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
        Hi, I'm <span className="text-green-400">Tushar Singha</span>
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-lg md:text-xl mt-4 max-w-md sm:max-w-lg">
        A Passionate Web Developer and BCA Student
      </p>

      {/* Call-to-Action Button */}
      <a
        href="#contact"
        className="mt-6 px-6 py-3 text-sm sm:text-base md:text-lg bg-green-500 text-white rounded-md hover:bg-green-600 transition-all"
      >
        Get In Touch
      </a>
    </section>
  );
}

export default Home;