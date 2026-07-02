export default function Hero() {
    const stacks = [
      { name: "Laravel", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-original.svg" },
      { name: "PHP", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" },
      { name: "MySQL", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" },
      { name: "Tailwind", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "React", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
    ];
  
    return (
      <section className="relative min-h-screen flex items-center bg-[#0f172a] pt-20 px-6 md:px-20 overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-[120px] -z-10"></div>
  
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* KIRI: TEKS & CTA */}
          <div className="order-2 md:order-1 text-center md:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 mb-6 group transition-all">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold text-emerald-400 tracking-widest uppercase">
                Available for Opportunities
              </span>
            </div>
            
            {/* Headline */}
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Fullstack Developer
              </span>{" "}
              Building Scalable Web Applications.
            </h1>
            
            {/* Subheadline */}
            <p className="text-slate-400 text-lg mb-10 max-w-xl leading-relaxed">
              Computer Science graduate with hands-on experience in developing web applications using 
              <span className="text-white font-medium"> Laravel</span> and <span className="text-white font-medium">React</span>. 
              Focused on building efficient backend systems and clean, user-friendly interfaces.
            </p>
  
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-10">
              <a href="#projects" className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold rounded-2xl transition-all shadow-lg shadow-indigo-500/20 active:scale-95">
                Explore My Work
              </a>
              <a href="#contact" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-2xl border border-slate-700 transition-all active:scale-95">
                Let&apos;s Connect
              </a>
              <a
                href="https://drive.google.com/file/d/1H3L_hPD4PKTOxBv0n3c-EbNiNUwk3Li1/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-transparent border border-indigo-500/40 text-indigo-300 hover:border-indigo-400 hover:text-white font-bold rounded-2xl transition-all active:scale-95"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download CV
              </a>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-10">
              {[
                { value: "5+", label: "Projects Built" },
                { value: "2", label: "Apps in Production" },
                { value: "10+", label: "GitHub Repos" },
                { value: "1", label: "Internship" },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  {i > 0 && <div className="w-px h-8 bg-slate-800"></div>}
                  <div className="text-center md:text-left">
                    <p className="text-2xl font-extrabold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent leading-none">{stat.value}</p>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
  
            {/* TECH STACK LOGOS */}
            <div className="pt-8 border-t border-slate-800">
              <p className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-4">Core Tech Stack</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-6">
                {stacks.map((stack) => (
                  <div key={stack.name} className="group relative">
                    <img 
                      src={stack.logo} 
                      alt={stack.name} 
                      className="w-9 h-9 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"
                      title={stack.name}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
  
          {/* KANAN: FOTO */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              {/* Dekorasi Bingkai */}
              <div className="absolute -inset-4 border-2 border-indigo-500/20 rounded-[2.5rem] -rotate-6 animate-pulse"></div>
              <div className="absolute -inset-4 border-2 border-violet-500/20 rounded-[2.5rem] rotate-6"></div>
              
              {/* Container Foto */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-slate-800 to-slate-900 border-4 border-slate-900 shadow-2xl">
                <img 
                  src="/images/foto-profile.png"
                  alt="Satria Duta Mahendraloka" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}