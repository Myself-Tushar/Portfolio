// Projects.js
import React from 'react';

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="projects py-16 px-6 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="project-card bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <img src={project.imgSrc} alt={project.title} className="w-full h-64 object-cover rounded-lg" />
            <h3 className="text-xl font-semibold mt-4 text-green-600">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;