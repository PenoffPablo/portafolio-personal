import React from 'react';

const Skills = () => {
    const skills = [
        {
            category: "Frontend",
            technologies: [
                { name: "React" },
                { name: "Tailwind CSS" },
                { name: "JavaScript (ES6+)" },
                { name: "HTML5 & CSS3" },
            ]
        },
        {
            category: "Backend",
            technologies: [
                { name: "Java" },
                { name: "Spring Boot" },
                { name: "Python" },
                { name: "Flask" },
                { name: "Node.js" },
            ]
        },
        {
            category: "Bases de Datos",
            technologies: [
                { name: "MySQL", level: "Intermedio" },
                { name: "MongoDB", level: "Básico" },
            ]
        },
        {
            category: "Herramientas & Otros",
            technologies: [
                { name: "Git & GitHub" },
                { name: "VS Code" },
                { name: "Postman" },
                { name: "Scrum" },
            ]
        }
    ];

    return (
        <section id="habilidades" className="py-20 bg-slate-800 relative overflow-hidden">

            {/* Elementos decorativos de fondo */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-3xl"></div>
                <div className="absolute top-[20%] -left-[10%] w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Mis <span className="text-blue-500">Habilidades</span>
                    </h2>
                    <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        Stack tecnológico diverso. Me adapto a la herramienta adecuada para cada problema, ya sea SQL, NoSQL, Java o Python.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {skills.map((skillGroup, index) => (
                        <div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-colors duration-300">
                            <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-700 pb-2 flex items-center gap-2">
                                <span className="text-blue-500">#</span> {skillGroup.category}
                            </h3>

                            <div className="space-y-4">
                                {skillGroup.technologies.map((tech, i) => (
                                    <div key={i} className="flex justify-between items-center group">
                                        <span className="text-gray-300 font-medium group-hover:text-blue-400 transition-colors">
                                            {tech.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skills;