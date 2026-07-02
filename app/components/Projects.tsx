export default function Projects() {
    const projectList = [
      {
        title: "EmoSense - Mental Health Screening",
        description: "A web-based mental health screening system designed to help students assess their psychological condition using the DASS-21 method and mood tracking features.",
        tech: ["Laravel", "Tailwind CSS", "MySQL"],
        image: "/images/projects/emosense.jpg",
        liveLink: "https://emosense.smartsense.my.id/",
        githubLink: "#",
        status: "Production"
      },
      {
        title: "IT Help Desk - Tribun",
        description: "An internal help desk system for reporting damaged equipment and tracking repair status. Built with Laravel, this system improves workflow efficiency by enabling employees to submit reports and monitor progress, while IT staff manage and update report statuses in real-time.",
        tech: ["Laravel", "Tailwind CSS", "MySQL"],
        image: "/images/projects/tribun.jpg",
        liveLink: null,
        githubLink: "https://github.com/mahendraloka/it-help-desk.git",
        status: "Magang / Internship"
      },
      {
        title: "DRP Remap - ECU Tuning Workshop",
        description: "A professional company profile website for DRP, an ECU remapping workshop specializing in engine tuning and performance upgrades. Built to provide customers with service information, booking details, and a clean, automotive-themed user experience.",
        tech: ["Next.js", "React", "Tailwind CSS"],
        image: "/images/projects/drpremap.png",
        liveLink: "https://drpremap.vercel.app/",
        githubLink: "https://github.com/mahendraloka/drp-remap.git",
        status: "Production"
      },
      {
        title: "Job Applicant Tracker",
        description: "A full-stack web application designed to manage and track job applications. Built with a decoupled architecture, it features a robust RESTful API built with Laravel to handle data persistence and authentication, paired with a dynamic React frontend for seamless status tracking and pipeline management.",
        tech: ["Laravel", "REST API", "React", "Tailwind CSS"],
        image: "/images/projects/jobtracker.png",
        liveLink: null,
        githubLink: "https://github.com/mahendraloka/job-tracking-api.git",
        status: "Development"
      },
      {
        title: "JRoom - Campus Room Booking App",
        description: "A native Android mobile application developed to streamline the room reservation process in the campus J building. Built using Android Studio and Java, this app allows students and staff to check room availability in real-time, submit booking requests, and manage schedules efficiently to prevent classroom conflicts.",
        tech: ["Java", "Android Studio", "Android SDK"],
        image: "/images/projects/jroom.png",
        liveLink: null, 
        githubLink: "https://github.com/mahendraloka/JRoom-App.git",
        status: "Academic Project"
      },
      {
        title: "Want to see more?",
        description: "I constantly build and experiment with other applications. Check out my GitHub profile to explore my other repositories, source codes, and contributions.",
        tech: ["Open Source", "Git"],
        image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        liveLink: null,
        githubLink: "https://github.com/mahendraloka",
        status: "More Repositories"
      }
    ];
  
    return (
      <section id="projects" className="py-24 px-6 md:px-20 bg-[#0f172a]">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-indigo-400 font-bold uppercase tracking-widest text-sm mb-3">Portfolio</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white">Featured Projects.</h3>
          </div>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projectList.map((project, index) => (
              <div key={index} className="group flex flex-col bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden hover:border-indigo-500/40 transition-all duration-500 hover:shadow-xl hover:shadow-indigo-500/5">
                
                {/* Image Preview */}
                <div className="relative h-56 overflow-hidden bg-slate-800">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className={`w-full h-full transition-transform duration-700 group-hover:scale-110 ${
                      project.title === "Want to see more?" ? "object-contain p-12 bg-slate-900/80" : "object-cover"
                    }`} 
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-slate-900/90 backdrop-blur-sm rounded-full text-xs font-bold text-slate-300 border border-slate-700 shadow-sm">
                    {project.status}
                  </div>
                </div>
  
                {/* Content */}
                <div className="p-7 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-[10px] font-bold uppercase rounded-md border border-indigo-500/20">
                        {t}
                      </span>
                    ))}
                  </div>
  
                  <h4 className="text-xl font-bold text-white mb-3">{project.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
  
                  <div className="mt-auto flex gap-4">
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-indigo-400 font-bold text-sm hover:text-violet-400 transition-colors">
                        Live Demo 
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      </a>
                    )}
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-500 font-bold text-sm hover:text-slate-200 transition-colors">
                        {project.title === "Want to see more?" ? "Visit Profile" : "Source Code"}
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                      </a>
                    )}
                  </div>
                </div>
  
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}