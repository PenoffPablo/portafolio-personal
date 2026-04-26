// src/components/Projects.jsx
import React from 'react';
import ImageCarousel from './ImageCarousel';

const Projects = () => {
    const projects = [
        {
            title: "G4 Company S.A",
            description: "Plataforma integral de logística empresarial. Implementa generación de facturas en PDF, sincronización de base de datos offline y una arquitectura robusta para garantizar alta disponibilidad.",
            tech: ["Next.js", "React", "TypeScript", "Tailwind"],
            images: [
                "g4-main.png",
                "Bussiness-areas-g4.png",
                "g4-about-us.png",
                "global-vision-g4.png"
            ],
            url: "https://www.g4company.com"
        },
        {
            title: "Delonc Limpieza Profesional",
            description: "Landing page corporativa optimizada para conversión. Integra la API de WhatsApp Business para automatizar el contacto de clientes y agilizar la solicitud de presupuestos en tiempo real.",
            tech: ["React", "Tailwind"],
            images: [
                "home-delonc.png",
                "services-delonc.png"
            ],
            url: "https://delonc-limpieza-profesional.netlify.app"
        },
        {
            title: "E-commerce ExtraRango",
            description: "Plataforma B2B con panel de administración. Incluye carrito dinámico, sincronización de precios vía API del dólar en tiempo real, gestión integral de inventario y generación de remitos.",
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
            title: "Portfolio de Modelaje Runway",
            description: "Portfolio visual de alto rendimiento con enfoque en UI/UX. Incluye galería multimedia optimizada, animaciones fluidas y diseño completamente responsivo adaptado a dispositivos móviles.",
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
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Mis <span className="text-blue-500">Trabajos</span>
                    </h2>
                    <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        Soluciones reales a problemas complejos.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

                                {project.url ? (
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
                                ) : (
                                    <span
                                        className="inline-flex items-center justify-center gap-2 bg-slate-700/50 text-slate-400 px-5 py-2.5 rounded-xl border border-slate-600/50 font-semibold text-sm w-full cursor-not-allowed select-none"
                                        title="Sistema Interno / Privado"
                                    >
                                        Sistema Privado
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

export default Projects;
