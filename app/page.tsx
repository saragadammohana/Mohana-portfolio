"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
       <div className="flex flex-col justify-center">
     <main className="min-h-screen bg-slate-950 text-white px-6 pt-16">

  {/* Welcome Section */}
  <motion.div
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-center pt-8 pb-12"
  >
    <p className="text-purple-400 text-2xl md:text-5xl font-semibold tracking-wide">
      Welcome to My Portfolio
    </p>
  </motion.div>

  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center px-6">

  {/* LEFT SIDE */}
  <div className="flex flex-col items-center text-center">


    <motion.h1
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
  whileHover={{ scale: 1.03 }}
 className="text-4xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent mb-12"
>
      Saragadam Mohana
      <br />
      Rama Renuka
    </motion.h1>

   <motion.div
  className="flex flex-col items-center gap-8"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.8, duration: 1 }}
>

     <motion.div
       whileHover={{
        scale: 1.05,
        y: -5,
     }}
  transition={{ duration: 0.2 }}
  className="bg-purple-600/20 border border-purple-500 px-6 py-3 rounded-full"
>
        <p className="text-xl md:text-2xl text-purple-300 font-semibold">
          Java Full Stack Developer
        </p>
      </motion.div>

       <motion.div
       whileHover={{
        scale: 1.05,
        y: -5,
     }}
  transition={{ duration: 0.2 }}
  className="bg-purple-600/20 border border-purple-500 px-6 py-3 rounded-full"
>
        <p className="text-xl md:text-2xl text-purple-300 font-semibold">
          Problem Solver
        </p>
      </motion.div>

     <motion.div
       whileHover={{
        scale: 1.05,
        y: -5,
     }}
  transition={{ duration: 0.2 }}
  className="bg-purple-600/20 border border-purple-500 px-6 py-3 rounded-full"
>
        <p className="text-xl md:text-2xl text-purple-300 font-semibold">
          Continuous Learner
        </p>
      </motion.div>

   

  </motion.div>
   </div>

  {/* RIGHT SIDE */}
  <motion.div
  initial={{ opacity: 0, x: 80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  whileHover={{ scale: 1.01 }}
  className="relative h-[350px] md:h-[600px] w-full overflow-hidden rounded-3xl shadow-2xl"
>

    <video
      className="w-full h-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      controls
    >
      <source src="/intro.mp4.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

 </motion.div>

</div>
      <section
 id="about"
  className="w-full max-w-6xl py-20 px-6 mt-20">

  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold text-purple-400 mb-4">
      About Me
    </h2>

   <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto mb-8 transition-all duration-700 hover:text-white">
      I am a passionate Computer Science graduate with a strong foundation in
      Java, Python, SQL, and Full Stack Development. Through internships and
      hands-on projects, I have gained practical experience in building
      responsive web applications and understanding real-world software
      development practices. I enjoy solving problems, learning emerging
      technologies, and collaborating with teams to create impactful software
      solutions.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
    <motion.div
  whileHover={{
    y: -10,
    boxShadow: "0px 10px 30px rgba(168,85,247,0.3)",
  }}
  transition={{ duration: 0.3 }}
  className="bg-slate-900 p-6 rounded-2xl"
>
      <h3 className="text-3xl font-bold text-purple-400">3</h3>
      <p className="text-gray-300 mt-2">Internships Completed</p>
    </motion.div>

   

    <div className="bg-slate-900 p-6 rounded-2xl">
      <h3 className="text-3xl font-bold text-purple-400">3</h3>
      <p className="text-gray-300 mt-2">Certifications Earned</p>
    </div>

    <div className="bg-slate-900 p-6 rounded-2xl">
      <h3 className="text-3xl font-bold text-purple-400">9.33</h3>
      <p className="text-gray-300 mt-2">Current CGPA</p>
    </div>
  </div>
</section>
    <section id="skills" className="w-full max-w-6xl py-20 px-6">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold text-purple-400 mb-4">
      Skills
    </h2>

    <p className="text-gray-300">
      Technologies and tools I use to build efficient applications.
    </p>
  </div>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    {[
      "Java",
      "Python",
      "SQL",
      "HTML",
      "CSS",
      "JavaScript",
      
    ].map((skill) => (
      <div
        key={skill}
        className="bg-slate-900 p-6 rounded-2xl text-center border border-purple-500/20 hover:border-purple-500 hover:scale-105 transition duration-300"
      >
        <p className="text-xl font-semibold text-white">
          {skill}
        </p>
      </div>
    ))}
  </div>
</section>
<motion.section
  id="projects"
  className="py-20 px-6"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <div className="max-w-7xl mx-auto">

    {/* Section Heading */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-purple-400 mb-4">
        Featured Project
      </h2>

      <p className="text-gray-300">
        A showcase of my practical experience in building responsive web applications.
      </p>
    </div>

    {/* Project Card */}
    
<motion.div
  whileHover={{
    y: -8,
    scale: 1.01,
  }}
  transition={{ duration: 0.3 }}
  className="grid lg:grid-cols-2 gap-12 items-center bg-slate-900 rounded-3xl p-8 border border-purple-500/20 hover:border-purple-500"
>
      {/* Project Image */}
      <a
        href="https://github.com/saragadammohana/University-management-website"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <img
          src="/image.JPEG"
          alt="University Management Website"
          className="rounded-2xl shadow-2xl group-hover:scale-105 transition duration-500 cursor-pointer"
        />
      </a>

      {/* Project Details */}
      <div>

        {/* Clickable Project Title */}
        <a
          href="https://github.com/saragadammohana/University-management-website"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className="text-3xl font-bold text-white mb-6 hover:text-purple-400 transition duration-300 cursor-pointer">
            University Management Website ↗
          </h3>
        </a>

        {/* Project Description */}
        <p className="text-gray-300 leading-relaxed mb-6">
          Designed and developed a responsive university management web
          application focused on delivering an intuitive and engaging user
          experience. Implemented modern frontend development practices,
          interactive user interface components, and responsive layouts
          to ensure seamless usability across multiple devices.
        </p>

        {/* Key Highlights */}
        <div className="mb-8">
          <ul className="space-y-3 text-gray-300">

            <li>
              ✓ Developed responsive webpages using HTML, CSS, and JavaScript.
            </li>

            <li>
              ✓ Designed interactive and user-friendly interfaces to improve usability.
            </li>

            <li>
              ✓ Implemented dynamic elements and optimized layouts for various screen sizes.
            </li>

            <li>
              ✓ Applied debugging and problem-solving techniques to enhance performance.
            </li>

          </ul>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-3 mb-8">

          <span className="bg-purple-600/20 border border-purple-500 px-4 py-2 rounded-full text-purple-300">
            HTML
          </span>

          <span className="bg-purple-600/20 border border-purple-500 px-4 py-2 rounded-full text-purple-300">
            CSS
          </span>

          <span className="bg-purple-600/20 border border-purple-500 px-4 py-2 rounded-full text-purple-300">
            JavaScript
          </span>

          <span className="bg-purple-600/20 border border-purple-500 px-4 py-2 rounded-full text-purple-300">
            Responsive Design
          </span>

          <span className="bg-purple-600/20 border border-purple-500 px-4 py-2 rounded-full text-purple-300">
            GitHub
          </span>

        </div>

        {/* GitHub Button */}
        <a
          href="https://github.com/saragadammohana/University-management-website"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full font-semibold transition duration-300 hover:scale-105"
        >
          View Repository →
        </a>

      </div>

   </motion.div>

  </div>
</motion.section>
<motion.section
  id="internships"
  className="py-20 px-6"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-purple-400 mb-4">
        Internships
      </h2>

      <p className="text-gray-300">
        Hands-on industry experience gained through internships.
      </p>
    </div>

    <div className="space-y-8">

      {/* Internship 1 */}
      <div className="bg-slate-900 p-8 rounded-3xl border border-purple-500/20 hover:border-purple-500 transition duration-300">

        <h3 className="text-2xl font-bold text-white mb-2">
          Java Full Stack Development Intern
        </h3>

        <p className="text-purple-300 mb-4">
          Nirmaan Organization • 3 Months
        </p>

        <ul className="space-y-2 text-gray-300">
          <li>✓ Worked on Java Full Stack Development projects.</li>
          <li>✓ Developed and integrated frontend and backend components.</li>
          <li>✓ Applied programming and debugging skills during implementation.</li>
          <li>✓ Gained exposure to real-world software development workflows.</li>
        </ul>

      </div>

      {/* Internship 2 */}
      <div className="bg-slate-900 p-8 rounded-3xl border border-purple-500/20 hover:border-purple-500 transition duration-300">

        <h3 className="text-2xl font-bold text-white mb-2">
          Full Stack Development Intern – Python
        </h3>

        <p className="text-purple-300 mb-4">
          Tanasavi Technologies Pvt Ltd • 3 Months
        </p>

        <ul className="space-y-2 text-gray-300">
          <li>✓ Developed web applications using Python and frontend technologies.</li>
          <li>✓ Integrated frontend and backend components.</li>
          <li>✓ Built and tested real-time projects.</li>
          <li>✓ Strengthened problem-solving and debugging abilities.</li>
        </ul>

      </div>

      {/* Internship 3 */}
      <div className="bg-slate-900 p-8 rounded-3xl border border-purple-500/20 hover:border-purple-500 transition duration-300">

        <h3 className="text-2xl font-bold text-white mb-2">
          Python Intern
        </h3>

        <p className="text-purple-300 mb-4">
          VR Educational and IT Solutions • 1 Month
        </p>

        <ul className="space-y-2 text-gray-300">
          <li>✓ Learned core Python concepts and OOP principles.</li>
          <li>✓ Developed automation and data handling scripts.</li>
          <li>✓ Enhanced logical thinking and coding skills.</li>
        </ul>

      </div>

    </div>

  </div>
</motion.section>
<section id="education" className="py-20 px-6">
  <div className="max-w-5xl mx-auto">

    {/* Section Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-purple-400 mb-4">
        Education
      </h2>

      <p className="text-gray-300">
        My academic journey and achievements.
      </p>
    </div>

    <div className="relative border-l-4 border-purple-500 ml-6 space-y-12">

      {/* B.Sc */}
      <div className="relative pl-10">
        <div className="absolute -left-[18px] top-1 w-8 h-8 bg-purple-500 rounded-full border-4 border-slate-950"></div>

        <div className="bg-slate-900 p-6 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-white">
            B.Sc Computer Science
          </h3>

          <p className="text-purple-300 mt-2">
            Chaitanya Degree & PG College for Women's (Andhra University)
          </p>

          <p className="text-gray-400 mt-2">
            2023 – 2026
          </p>

          <p className="text-green-400 font-semibold mt-3">
            CGPA: 9.33 / 10
          </p>
        </div>
      </div>

      {/* Intermediate */}
      <div className="relative pl-10">
        <div className="absolute -left-[18px] top-1 w-8 h-8 bg-purple-500 rounded-full border-4 border-slate-950"></div>

        <div className="bg-slate-900 p-6 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-white">
            Intermediate (MPC)
          </h3>

          <p className="text-purple-300 mt-2">
            Sri Chaitanya Junior College
          </p>

          <p className="text-gray-400 mt-2">
            2022 – 2023
          </p>

          <p className="text-green-400 font-semibold mt-3">
            Percentage: 92.5%
          </p>
        </div>
      </div>

      {/* SSC */}
      <div className="relative pl-10">
        <div className="absolute -left-[18px] top-1 w-8 h-8 bg-purple-500 rounded-full border-4 border-slate-950"></div>

        <div className="bg-slate-900 p-6 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-white">
            SSC
          </h3>

          <p className="text-purple-300 mt-2">
            A.V.K (EM) High School
          </p>

          <p className="text-gray-400 mt-2">
            2020 – 2021
          </p>

          <p className="text-green-400 font-semibold mt-3">
            Percentage: 99.6%
          </p>
        </div>
      </div>

    </div>

  </div>
</section>
<section id="certifications" className="py-20 px-6">
  <div className="max-w-7xl mx-auto">

    {/* Section Heading */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-purple-400 mb-4">
        Certifications
      </h2>

      <p className="text-gray-300">
        Certifications that reflect my commitment to continuous learning and skill development.
      </p>
    </div>

    {/* Certification Cards */}
    <div className="grid md:grid-cols-3 gap-8">

      {/* IBM Python */}
      <div className="bg-slate-900 p-8 rounded-3xl border border-purple-500/20 hover:border-purple-500 hover:-translate-y-2 transition duration-300">

        <div className="text-5xl mb-6">🐍</div>

        <h3 className="text-2xl font-bold text-white mb-3">
          Python for Programmers
        </h3>

        <p className="text-purple-300 mb-4">
          IBM SkillsBuild
        </p>

        <p className="text-gray-300">
          Gained practical knowledge of Python programming concepts and problem-solving techniques.
        </p>

      </div>

      {/* IBM JavaScript */}
      <div className="bg-slate-900 p-8 rounded-3xl border border-purple-500/20 hover:border-purple-500 hover:-translate-y-2 transition duration-300">

        <div className="text-5xl mb-6">💻</div>

        <h3 className="text-2xl font-bold text-white mb-3">
          Learn JavaScript
        </h3>

        <p className="text-purple-300 mb-4">
          IBM SkillsBuild
        </p>

        <p className="text-gray-300">
          Strengthened frontend development skills by learning JavaScript fundamentals and interactive programming.
        </p>

      </div>

      {/* Accenture AI */}
      <div className="bg-slate-900 p-8 rounded-3xl border border-purple-500/20 hover:border-purple-500 hover:-translate-y-2 transition duration-300">

        <div className="text-5xl mb-6">🤖</div>

        <h3 className="text-2xl font-bold text-white mb-3">
          AI Fundamentals
        </h3>

        <p className="text-purple-300 mb-4">
          Accenture
        </p>

        <p className="text-gray-300">
          Developed an understanding of artificial intelligence concepts, applications, and emerging technologies.
        </p>

      </div>

    </div>

  </div>
</section>
<section id="contact" className="py-20 px-6">
  <div className="max-w-5xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-purple-400 mb-4">
        Let's Connect
      </h2>

      <p className="text-gray-300">
        I'm always open to discussing new opportunities, collaborations, and innovative projects.
      </p>
    </div>

    {/* Contact Cards */}
    <div className="grid md:grid-cols-2 gap-6">

      {/* Email */}
      <a
        href="mailto:saragadamrenuka493@gmail.com"
        className="bg-slate-900 p-6 rounded-3xl border border-purple-500/20 hover:border-purple-500 transition duration-300"
      >
        <h3 className="text-2xl font-bold text-white mb-2">
          📧 Email
        </h3>

        <p className="text-gray-300">
          saragadamrenuka493@gmail.com
        </p>
      </a>

      {/* Phone */}
      <a
        href="tel:+919347722543"
        className="bg-slate-900 p-6 rounded-3xl border border-purple-500/20 hover:border-purple-500 transition duration-300"
      >
        <h3 className="text-2xl font-bold text-white mb-2">
          📱 Phone
        </h3>

        <p className="text-gray-300">
          +91 9347722543
        </p>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/mohana-rama-renuka/ "
        target="_blank"
        rel="noopener noreferrer"
        className="bg-slate-900 p-6 rounded-3xl border border-purple-500/20 hover:border-purple-500 transition duration-300"
      >
        <h3 className="text-2xl font-bold text-white mb-2">
          💼 LinkedIn
        </h3>

        <p className="text-gray-300">
          Connect with me professionally
        </p>
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/saragadammohana"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-slate-900 p-6 rounded-3xl border border-purple-500/20 hover:border-purple-500 transition duration-300"
      >
        <h3 className="text-2xl font-bold text-white mb-2">
          💻 GitHub
        </h3>

        <p className="text-gray-300">
          Explore my projects and repositories
        </p>
      </a>

    </div>

  </div>
</section>
<section className="py-20 px-6 text-center">

  <div className="max-w-4xl mx-auto">

    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent mb-6">
      Thank You
    </h2>

    <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
     Thank You for Visiting!

Thank you for taking the time to review my portfolio.
As a passionate and motivated fresher, I am ready to embrace new challenges, learn continuously, and contribute positively to every opportunity that comes my way.

Looking forward to starting this exciting journey in the world of technology..
    </p>

    <p className="text-gray-400 mt-4 text-lg">
      I look forward to connecting, collaborating, and contributing to meaningful opportunities.
    </p>

  </div>

</section>
      </main>
      </div>
    </>
  );
}