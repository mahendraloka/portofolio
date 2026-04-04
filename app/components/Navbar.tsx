export default function Navbar() {
    const navLinks = [
      { name: "About", href: "#about" },
      { name: "Stack", href: "#stack" },
      { name: "Projects", href: "#projects" },
      { name: "Contact", href: "#contact" },
    ];
  
    return (
      <nav className="fixed w-full bg-[#0f172a]/80 backdrop-blur-md border-b border-slate-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="group cursor-pointer">
            <h1 className="font-extrabold text-xl tracking-tighter text-white">
              S<span className="text-blue-500 group-hover:text-purple-500 transition-colors">D</span>M.dev
            </h1>
          </div>
  
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href="#contact" 
              className="ml-4 px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-full transition-all shadow-lg shadow-blue-500/20"
            >
              Available for Hire
            </a>
          </div>
  
          {/* Mobile Menu Icon (Simple placeholder) */}
          <div className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </div>
        </div>
      </nav>
    );
}