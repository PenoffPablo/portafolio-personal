// src/components/Projects.jsx
import React from 'react';
import ImageCarousel from './ImageCarousel';

const Projects = () => {
    const projects = [
        {
            title: "Delonc Limpieza Profesional",
            description: "Web para empresa de servicios de limpieza con API de whatsapp para contactar con la empresa y presupuestar el servicio",
            tech: ["React", "Tailwind"],
            images: [
                "home-delonc.png",
                "services-delonc.png"
            ],
            url: "https://delonc-limpieza-profesional.netlify.app"
        },
        {
            title: "E-commerce ExtraRango",
            description: "Sistema de gestión de pedidos y ventas. Manejo de carrito, lista de productos, API del precio del dolar, CRUD de productos y usuarios, generación de remitos.",
            tech: ["Next.js", "Tailwind", "MySQL", "Prisma"],
            images: [
                "home-extrarango.png",
                "admin-panel-extrarango.png",
                "login-extrarango.png",
                "register-extrarango.png"
            ],
            url: "https://www.extrarango.com"
        },
        {
            title: "Portfolio para modelo de Runway",
            description: "Portfolio creado con React y Tailwind CSS. Galería de imágenes e información sobre la modelo.",
            tech: ["React", "Tailwind"],
            images: [
                "portada-agus.png",
                "gallery-agus.png"
            ],
            url: "https://aixabacur.netlify.app"
        }
    ];

    return (
        <section id="trabajos" className="py-20 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Mis <span className="text-blue-500">Trabajos</span>
                    </h2>
                    <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        Soluciones reales a problemas complejos.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-slate-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:-translate-y-2 border border-slate-700/50 group h-full flex flex-col">

                            <div className="relative overflow-hidden h-96 bg-slate-950">
                                <ImageCarousel images={project.images} title={project.title} />
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-5 leading-relaxed flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-5">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-blue-500/10 text-blue-400 rounded-lg border border-blue-500/20">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl shadow-lg transition-all font-semibold text-sm w-full hover:scale-[1.02] shadow-blue-600/20"
                                >
                                    Visitar Sitio
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;
