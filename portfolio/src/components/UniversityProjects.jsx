// src/components/UniversityProjects.jsx
import React from 'react';
import ImageCarousel from './ImageCarousel';
import { universityProjects as projects } from '../data/projectsData';

const UniversityProjects = () => {

    return (
        <section id="proyectos-universitarios" className="py-20 bg-slate-950 text-white border-t border-slate-800">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Proyectos <span className="text-purple-500">Universitarios</span>
                    </h2>
                    <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        Aplicando teoría y construyendo arquitecturas robustas en el ámbito académico.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 transform hover:-translate-y-2 border border-slate-700/50 group h-full flex flex-col">

                            <div className="relative overflow-hidden h-96 bg-slate-950">
                                <ImageCarousel images={project.images} title={project.title} />
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-5 leading-relaxed flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-5">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-purple-500/10 text-purple-400 rounded-lg border border-purple-500/20">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {project.url ? (
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-5 py-2.5 rounded-xl shadow-lg transition-all font-semibold text-sm w-full hover:scale-[1.02] shadow-purple-600/20"
                                    >
                                        Ver Proyecto
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                ) : (
                                    <span
                                        className="inline-flex items-center justify-center gap-2 bg-slate-700/50 text-slate-400 px-5 py-2.5 rounded-xl border border-slate-600/50 font-semibold text-sm w-full cursor-not-allowed select-none"
                                    >
                                        Proyecto Académico
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default UniversityProjects;
