import React from 'react';

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white overflow-hidden">

            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -z-10"></div>

            <div className="text-center px-4 max-w-4xl mx-auto">
                <div className="mb-6 inline-block">
                    <span className="py-1 px-3 text-sm rounded-full bg-green-500/10 text-green-400 border border-green-500/20 font-medium">
                        Disponible para trabajar
                    </span>
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
                    Hola, soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Penoff Pablo</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Junior Software Developer. Transformo ideas en código escalable.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                        href="#proyectos"
                        className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold transition-all hover:scale-105 shadow-lg shadow-blue-500/25 w-full sm:w-auto text-center cursor-pointer"
                    >
                        Ver mis Proyectos
                    </a>

                    <a
                        href="#contacto"
                        className="px-8 py-4 border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white rounded-lg font-medium transition-all w-full sm:w-auto text-center cursor-pointer"
                    >
                        Contactar
                    </a>
                </div>
            </div>

            <div className="absolute bottom-10 animate-bounce">
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </div>
        </section>
    );
};

export default Hero;