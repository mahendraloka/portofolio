export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6 md:px-20 bg-[#0f172a] relative overflow-hidden">
      {/* Efek Cahaya di Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -z-0"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-3">What's Next?</h2>
        <h3 className="text-4xl md:text-6xl font-extrabold text-white mb-8">Let's Work Together.</h3>
        
        <p className="text-slate-400 text-lg mb-12 leading-relaxed">
        I am currently open to new opportunities as a Fullstack Web Developer, 
        especially in roles involving Laravel and React.

        If you are looking for someone who can build reliable systems and deliver clean user experiences, 
        feel free to reach out or connect with me.
        </p>

        <div className="flex flex-col items-center gap-6">
          {/* Tombol Email Utama */}
          <a 
            href="mailto:smahendraloka@gmail.com" 
            className="px-10 py-4 bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold rounded-2xl transition-all duration-300 shadow-lg shadow-blue-500/10"
          >
            Send Me an Email
          </a>

          {/* Social Links */}
          <div className="flex gap-8 mt-8">
            <a href="https://linkedin.com/in/mahendraloka" target="_blank" className="text-slate-500 hover:text-white transition-colors">
              <span className="font-bold tracking-wider">LINKEDIN</span>
            </a>
            <a href="https://github.com/mahendraloka" target="_blank" className="text-slate-500 hover:text-white transition-colors">
              <span className="font-bold tracking-wider">GITHUB</span>
            </a>
            <a href="https://instagram.com/mahendraloka" target="_blank" className="text-slate-500 hover:text-white transition-colors">
              <span className="font-bold tracking-wider">INSTAGRAM</span>
            </a>
          </div>
        </div>
      </div>
    </section>
    );
}