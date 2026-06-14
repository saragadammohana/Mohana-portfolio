export default function Navbar() {
  return (
   <nav className="fixed top-0 left-0 w-full bg-slate-950/90 backdrop-blur-md text-white px-8 py-4 flex justify-center z-50">
      

      <div className="space-x-6">
        <a href="#about" className="hover:text-purple-400">
          About
        </a>

        <a href="#skills" className="hover:text-purple-400">
          Skills
        </a>

        <a href="#projects" className="hover:text-purple-400">
          Projects
        </a>
         
         <a href="#internships" className="hover:text-purple-400">
           Internships
         </a>

        <a href="#contact" className="hover:text-purple-400">
          Contact
        </a>

        <a href="#education" className="hover:text-purple-400">
         Education
         </a>

         <a href="#certifications" className="hover:text-purple-400">
           Certifications
          </a>
      </div>
    </nav>
  );
}