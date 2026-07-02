export default function TechStack() {
    const stackCategories = [
      {
        title: "Backend & Database",
        description: "Managing server-side logic and data security.",
        skills: [
          { name: "Laravel", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-original.svg" },
          { name: "PHP", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" },
          { name: "MySQL", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" },
        ],
      },
      {
        title: "Frontend & UI",
        description: "Building responsive and interactive user interfaces.",
        skills: [
          { name: "React", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
          { name: "Tailwind CSS", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" },
          { name: "JavaScript", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
        ],
      },
      {
        title: "Design & Workflow",
        description: "Tools for visual design and collaboration.",
        skills: [
          { name: "Figma", logo: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg" },
          { name: "Canva", logo: "https://www.vectorlogo.zone/logos/canva/canva-icon.svg" },
          { name: "Git", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" },
        ],
      },
    ];
  
    return (
      <section id="stack" className="py-24 px-6 md:px-20 bg-[#0f172a]">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-indigo-400 font-bold uppercase tracking-widest text-sm mb-3">Skills & Tools</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white">The Tech Behind My Work.</h3>
          </div>
  
          <div className="grid md:grid-cols-3 gap-8">
            {stackCategories.map((category, index) => (
              <div 
                key={index} 
                className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl hover:border-indigo-500/50 transition-all duration-300 group"
              >
                <h4 className="text-xl font-bold text-white mb-2">{category.title}</h4>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                  {category.description}
                </p>
  
                <div className="flex flex-wrap gap-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col items-center gap-2 group/icon">
                      <img 
                        src={skill.logo} 
                        alt={skill.name} 
                        className="w-10 h-10 grayscale group-hover/icon:grayscale-0 transition-all duration-300" 
                      />
                      <span className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter group-hover/icon:text-indigo-400 transition-colors">
                        {skill.name}
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
}