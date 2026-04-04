export default function Footer() {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="py-12 px-6 md:px-20 bg-[#0f172a] border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          
          {/* Brand/Name */}
          <div>
            <h4 className="text-white font-bold text-lg tracking-tight">
              Satria Duta Mahendraloka<span className="text-blue-500">.</span>
            </h4>
            <p className="text-slate-500 text-sm mt-1">
            Fullstack Web Developer focused on building scalable and efficient applications.
            </p>
          </div>
  
          {/* Tech Info */}
          <div className="text-slate-500 text-xs">
            <p>Built with <span className="text-blue-500">Laravel</span> & <span className="text-blue-500">React</span></p>
            <p className="mt-1">Styled with Tailwind CSS</p>
          </div>
  
          {/* Copyright */}
          <div className="text-slate-500 text-sm font-medium">
            &copy; {currentYear} All Rights Reserved.
          </div>
          
        </div>
      </footer>
    );
}