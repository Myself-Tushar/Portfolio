import React from 'react';

function Skills() {
  return (
    <section id="skills" className="skills bg-gray-100 py-16 px-6">
      <h2 className="text-3xl font-semibold text-center mb-8">Skills</h2>
      <div className="max-w-xl mx-auto">
        {/* Foundations */}
        <div className="skill-bar mb-6">
          <p className="text-lg">HTML</p>
          <div className="w-full bg-gray-300 rounded-full h-4">
            <div className="bg-green-500 h-4 rounded-full" style={{ width: '90%' }}></div>
          </div>
        </div>
        <div className="skill-bar mb-6">
          <p className="text-lg">CSS</p>
          <div className="w-full bg-gray-300 rounded-full h-4">
            <div className="bg-blue-500 h-4 rounded-full" style={{ width: '85%' }}></div>
          </div>
        </div>
        <div className="skill-bar mb-6">
          <p className="text-lg">Tailwind CSS</p>
          <div className="w-full bg-gray-300 rounded-full h-4">
            <div className="bg-blue-400 h-4 rounded-full" style={{ width: '70%' }}></div>
          </div>
        </div>
        <div className="skill-bar mb-6">
          <p className="text-lg">Bootstrap</p>
          <div className="w-full bg-gray-300 rounded-full h-4">
            <div className="bg-purple-400 h-4 rounded-full" style={{ width: '75%' }}></div>
          </div>
        </div>

        {/* JavaScript and Related Frameworks */}
        <div className="skill-bar mb-6">
          <p className="text-lg">JavaScript</p>
          <div className="w-full bg-gray-300 rounded-full h-4">
            <div className="bg-yellow-500 h-4 rounded-full" style={{ width: '80%' }}></div>
          </div>
        </div>
        <div className="skill-bar mb-6">
          <p className="text-lg">React.js</p>
          <div className="w-full bg-gray-300 rounded-full h-4">
            <div className="bg-purple-500 h-4 rounded-full" style={{ width: '75%' }}></div>
          </div>
        </div>
        <div className="skill-bar mb-6">
          <p className="text-lg">Angular.js</p>
          <div className="w-full bg-gray-300 rounded-full h-4">
            <div className="bg-red-500 h-4 rounded-full" style={{ width: '65%' }}></div>
          </div>
        </div>
        <div className="skill-bar mb-6">
          <p className="text-lg">Next.js</p>
          <div className="w-full bg-gray-300 rounded-full h-4">
            <div className="bg-pink-500 h-4 rounded-full" style={{ width: '45%' }}></div>
          </div>
        </div>
        <div className="skill-bar mb-6">
          <p className="text-lg">Node.js</p>
          <div className="w-full bg-gray-300 rounded-full h-4">
            <div className="bg-green-600 h-4 rounded-full" style={{ width: '70%' }}></div>
          </div>
        </div>
        <div className="skill-bar mb-6">
          <p className="text-lg">Express.js</p>
          <div className="w-full bg-gray-300 rounded-full h-4">
            <div className="bg-purple-700 h-4 rounded-full" style={{ width: '65%' }}></div>
          </div>
        </div>

        {/* Databases */}
        <div className="skill-bar mb-6">
          <p className="text-lg">MongoDB</p>
          <div className="w-full bg-gray-300 rounded-full h-4">
            <div className="bg-teal-500 h-4 rounded-full" style={{ width: '65%' }}></div>
          </div>
        </div>
        <div className="skill-bar mb-6">
          <p className="text-lg">SQL</p>
          <div className="w-full bg-gray-300 rounded-full h-4">
            <div className="bg-indigo-500 h-4 rounded-full" style={{ width: '60%' }}></div>
          </div>
        </div>

        {/* APIs and Additional Tools */}
        <div className="skill-bar mb-6">
          <p className="text-lg">RESTful APIs</p>
          <div className="w-full bg-gray-300 rounded-full h-4">
            <div className="bg-orange-500 h-4 rounded-full" style={{ width: '70%' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;