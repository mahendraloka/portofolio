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
        title: "Job Applicant Tracker",
        description: "A full-stack web application designed to manage and track job applications. Built with a decoupled architecture, it features a robust RESTful API built with Laravel to handle data persistence and authentication, paired with a dynamic React frontend for seamless status tracking and pipeline management.",
        tech: ["Laravel", "REST API", "React", "Tailwind CSS"],
        image: "/images/projects/jobapplicant.jpg",
        liveLink: null,
        githubLink: "https://github.com/mahendraloka/job-tracking-api.git",
        status: "Development"
      },
      {
        title: "JRoom - Campus Room Booking App",
        description: "A native Android mobile application developed to streamline the room reservation process in the campus J building. Built using Android Studio and Java, this app allows students and staff to check room availability in real-time, submit booking requests, and manage schedules efficiently to prevent classroom conflicts.",
        tech: ["Java", "Android Studio", "Android SDK"],
        image: "/images/projects/jroom.jpg",
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
      <section id="projects" className="py-24 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Portfolio</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900">Featured Projects.</h3>
          </div>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
            {projectList.map((project, index) => (
              <div key={index} className="group flex flex-col bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                
                {/* Image Preview */}
                <div className="relative h-64 overflow-hidden bg-slate-200">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className={`w-full h-full transition-transform duration-700 group-hover:scale-110 ${
                      project.title === "Want to see more?" ? "object-contain p-12 bg-slate-50" : "object-cover"
                    }`} 
                  />
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-slate-800 shadow-sm">
                    {project.status}
                  </div>
                </div>
  
                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
  
                  <h4 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
  
                  <div className="mt-auto flex gap-4">
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" className="flex items-center gap-2 text-blue-600 font-bold text-sm hover:text-blue-700 transition-colors">
                        Live Demo 
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      </a>
                    )}
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" className="flex items-center gap-2 text-slate-500 font-bold text-sm hover:text-slate-900 transition-colors">
                        {project.title === "Want to see more?" ? "Visit Profile" : "Source Code"}
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