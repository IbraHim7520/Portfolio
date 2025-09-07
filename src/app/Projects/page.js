"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

const Page = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    Aos.init({ duration: 1000 });

    fetch("/project.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Failed to load projects:", err));
  }, []);

  return (
    <div className="w-full py-12 px-5 md:px-12 bg-dark text-white">
      <h1
        className="text-4xl lg:text-5xl font-bold mb-10 text-accent border-l-4 border-primary pl-4"
        data-aos="fade-down"
      >
        Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <div className="relative w-full h-60">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5 space-y-3">
              <h2 className="text-xl font-semibold text-accent">
                {project.title}
              </h2>
              <p className="text-gray-300 text-sm">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-primary text-dark px-2 py-1 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent text-dark px-4 py-2 rounded-md font-semibold text-sm hover:bg-accent/80 transition"
                >
                  Live
                </a>
                <a
                  href={project.githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 text-white px-4 py-2 rounded-md font-semibold text-sm hover:bg-gray-600 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
