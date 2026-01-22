// src/components/Projects.jsx
import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: "Delonc Limpieza Profesional",
            description: "Web para empresa de servicios de limpieza con API de whatsapp para contactar con la empresa y presupuestar el servicio",
            tech: ["React", "Tailwind"],
            image: "https://placehold.co/600x400/1e293b/FFFFFF/png?text=Delonc+Limpieza+Profesional",
            url: "https://delonc-limpieza-profesional.netlify.app"
        },
        {
            title: "E-commerce ExtraRango",
            description: "Sistema de gestión de pedidos y ventas. Manejo de carrito, lista de productos, API del precio del dolar, CRUD de productos y usuarios, generación de remitos.",
            tech: ["Next.js", "Tailwind", "MySQL", "Prisma"],
            image: "https://placehold.co/600x400/2563eb/FFFFFF/png?text=ExtraRango",
            url: "https://www.extrarango.com"
        },
        {
            title: "Portfolio para modelo de Runway",
            description: "Portfolio creado con React y Tailwind CSS. Galería de imágenes e información sobre la modelo.",
            tech: ["React", "Tailwind"],
            image: "https://placehold.co/600x400/B00E83/FFFFFF/png?text=Runway+Models",
            url: "https://aixabacur.netlify.app"
        }
    ];

    return (
        <section id="proyectos" className="py-20 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Mis <span className="text-blue-500">Proyectos</span>
                    </h2>
                    <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        Soluciones reales a problemas complejos.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-2 border border-gray-700 group">

                            <div className="relative overflow-hidden h-48">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition font-medium inline-block"
                                    >
                                        Ir a la web
                                    </a>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                        {project.title}
                                    </a>
                                </h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="px-2 py-1 text-xs font-semibold bg-slate-700 text-blue-300 rounded border border-slate-600">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;