export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Pindahkan class 'group' ke sini agar semua komponen kiri merespon hover */}
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          {/* SISI KIRI: VISUALISASI FULLSTACK */}
          <div className="w-full md:w-1/2 relative group">
            <div className="relative z-10 bg-[#0f172a] p-6 rounded-3xl shadow-2xl border border-slate-800 transform -rotate-1 group-hover:rotate-0 transition-all duration-500">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="font-mono text-sm space-y-2">
                <p className="text-blue-400">class <span className="text-yellow-300">WebApplication</span> &#123;</p>
                <p className="text-slate-400 pl-4">// Crafting scalable solutions</p>
                <p className="text-purple-400 pl-4">public function <span className="text-blue-300">buildImpact</span>() &#123;</p>
                {/* Diperbaiki menggunakan titik (.) khas PHP/Laravel */}
                <p className="text-slate-300 pl-8">return <span className="text-green-400">"Structure" . "Efficiency"</span>;</p>
                <p className="text-purple-400 pl-4">&#125;</p>
                <p className="text-blue-400">&#125;</p>
              </div>
            </div>
            
            {/* Dekorasi Gelar S.Kom */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-2xl -z-10 shadow-xl flex flex-col items-center justify-center text-white transition-transform group-hover:scale-110 duration-500">
              <span className="text-xs opacity-80 uppercase tracking-widest font-bold">Degree</span>
              <span className="text-3xl font-black">S.Kom</span>
            </div>
          </div>

          {/* SISI KANAN: KONTEN */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm">About Me</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 leading-tight">
              Transforming Ideas into <span className="text-blue-600">Scalable</span> and <span className="text-blue-600">Maintainable</span> Systems.
            </h3>

            <p className="text-lg text-slate-600 leading-relaxed">
              I am a Full-Stack Web Developer focused on building web applications with a structured and efficient approach. 
              I am highly accustomed to designing <span className="font-semibold text-slate-800">relational databases</span>, 
              developing robust <span className="font-semibold text-slate-800">RESTful APIs</span>, and ensuring seamless data flow between the backend and frontend.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Leveraging Laravel for powerful backend architectures and React for dynamic frontends, I build web solutions that are not only performant but also scalable, maintainable, and user-centric.
            </p>

            {/* Dua Sisi Keahlian */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-blue-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                  <h4 className="font-bold text-slate-900">Robust Backend</h4>
                </div>
                <p className="text-sm text-slate-500">
                  Developing secure and scalable backend systems using Laravel, including API development, database design, and data processing.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-blue-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.172-1.172a4 4 0 115.656 5.656L15.656 13" /></svg>
                  <h4 className="font-bold text-slate-900">Modern Frontend</h4>
                </div>
                <p className="text-sm text-slate-500">
                  Building responsive and interactive user interfaces using React and Tailwind CSS with a focus on usability and clean design.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}