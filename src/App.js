import React from "react";
import { motion } from "framer-motion";

const resumeUrl = "/MohammedPashaResume.pdf"; 

const sectionBg = {
  about: "bg-indigo-50",
  skills: "bg-pink-50",
  work: "bg-green-50",
  education: "bg-yellow-50",
  contact: "bg-blue-50",
};

const skills = [
  "Java", "Spring Boot", "Node.js", "Angular", "React", ".NET Core", "C#", 
  "PostgreSQL", "MySQL", "MongoDB", "Docker", "Kubernetes", "AWS", 
  "Jenkins", "Terraform", "Kafka", "Agile/Scrum", "CI/CD", "TDD"
];

function App() {
    const name = "MOHAMMED PASHA";

  return (
    <div className="font-sans">

      {/* Floating Social Buttons */}
      <div className="fixed top-1/3 left-4 flex flex-col gap-4 z-50">
        <a href="https://github.com/Mohammed-dev9" target="_blank" rel="noreferrer" className="bg-gray-800 text-white px-3 py-2 rounded shadow-lg hover:bg-indigo-600 transform hover:scale-110 transition duration-300">GitHub</a>
        <a href="https://www.linkedin.com/in/pasha-mohammed/" target="_blank" rel="noreferrer" className="bg-blue-600 text-white px-3 py-2 rounded shadow-lg hover:bg-indigo-600 transform hover:scale-110 transition duration-300">LinkedIn</a>
        <a href="mailto:md.pasha7852@gmail.com" className="bg-red-600 text-white px-3 py-2 rounded shadow-lg hover:bg-indigo-600 transform hover:scale-110 transition duration-300">Email</a>
      </div>

      {/* Hero Section */}
      <header className="text-center py-20 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-white">
         <motion.h1
            className="text-3xl font-extrabold mb-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {name.split("").map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>
       
   

<motion.p
  className="text-xl mb-6"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0, scale: [1, 1.05, 1] }}
  transition={{ duration: 1.9, delay: 0.5, repeat: Infinity, repeatType: "loop" }}
>
  Full Stack Software Engineer | Java · Node · React · Angular · .NET
</motion.p>

    <nav className="space-x-4" style={{marginBottom:'8px'}}>
            <a href="#about" className="text-gray-700 hover:text-indigo-600">About</a>
            <a href="#skills" className="text-gray-700 hover:text-indigo-600">Skills</a>
            <a href="#work" className="text-gray-700 hover:text-indigo-600">Work</a>
            <a href="#education" className="text-gray-700 hover:text-indigo-600">Education</a>
          </nav>

        <motion.div className="flex justify-center gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
          <a href={resumeUrl} download className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:from-purple-600 hover:to-pink-600 transition transform hover:scale-105">Download Resume</a>
          <a href="mailto:md.pasha7852@gmail.com" className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition transform hover:scale-105">Contact Me</a>
        </motion.div>
      </header>

      <main className="max-w-5xl mx-auto px-5 py-16 space-y-16">

        {/* About */}
        <motion.section className={`${sectionBg.about} rounded-xl shadow-xl p-6`} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <h2 id="about" className="text-3xl font-semibold text-indigo-600 mb-4 border-b-4 border-indigo-300 inline-block pb-1">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            Full Stack Software Engineer with 6+ years of experience building scalable, cloud-based applications using Java, Spring Boot, Node.js, Angular, React, and modern microservices architecture. Strong backend engineering background with hands-on experience designing RESTful services, optimizing distributed systems, and integrating third-party APIs. Skilled in AWS, CI/CD pipelines, containerization, and SQL/NoSQL databases. Recently gained working knowledge of C#, .NET Core, and Web API through API integration and cross-team collaboration. Recognized for clean code practices, problem-solving ability, and cross-functional teamwork in fast-paced Agile environments.
          </p>
        </motion.section>

        {/* Skills */}
        <motion.section className={`${sectionBg.skills} rounded-xl shadow-xl p-6`} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <h2  id="skills" className="text-3xl font-semibold text-pink-600 mb-4 border-b-4 border-pink-300 inline-block pb-1">Technical Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map(skill => (
              <motion.span key={skill} className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full font-medium text-sm cursor-default" whileHover={{ scale: 1.15, backgroundColor: "#FBCFE8", color: "#BE185D" }}>{skill}</motion.span>
            ))}
          </div>
        </motion.section>

        {/* Work */}
        <motion.section className={`${sectionBg.work} rounded-xl p-6 space-y-6`} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <h2 id="work" className="text-3xl font-semibold text-green-600 mb-4 border-b-4 border-green-300 inline-block pb-1">Work Experience</h2>

          {/* Jobs */}
          {[
            {
              title: "Full Stack Software Engineer",
              company: "Beneficial Tech Services",
              period: "May 2024 – Present",
              location: "Chicago, IL",
              bullets: [
                "Designed and optimized Java 17 and Node.js microservices, improving API performance by ~30%.",
                "Modernized legacy modules into distributed microservices to improve scalability and reliability.",
                "Implemented secured authentication using OAuth2 and JWT for internal and external service integrations.",
                "Improved CI/CD pipelines using Jenkins and GitHub Actions to reduce deployment friction.",
                "Turned PostgreSQL and MongoDB queries, resulting in faster reporting and high-volume data retrieval.",
                "Developed UI features in Angular and React, ensuring smooth integration with backend services.",
                "Collaborated on architecture improvements and cross-team development efforts.",
                "Worked alongside .NET teams on API integrations, gaining hands-on exposure to C# and Web API."
              ]
            },
            {
              title: "Software Developer (Java/Node)",
              company: "Deloitte",
              period: "June 2022 – April 2024",
              location: "Chicago, IL",
              bullets: [
                "Developed high-traffic backend services handling 1M+ daily API calls using Java, Spring Boot, and Node.js.",
                "Migrated critical SOAP services to REST, improving maintainability and reducing response times by 35%.",
                "Built reusable Angular components and optimized UI workflows using modern JavaScript patterns.",
                "Improved system resilience by integrating Kafka for event-driven communication across microservices.",
                "Increased automated test coverage by ~25% using JUnit, Mockito, and Selenium.",
                "Deployed applications on AWS (EC2, S3, Lambda), reducing cloud costs by ~20%.",
                "Participated in architecture design sessions, code reviews, and API versioning discussions.",
                "Coordinated API contracts with .NET teams, gaining familiarity with C#, .NET Core, and API standards."
              ]
            },
            {
              title: "Software Engineer",
              company: "Workruit",
              period: "Sept 2018 – Aug 2021",
              location: "Hyderabad, India",
              bullets: [
                "Built and enhanced backend services powering a job-matching platform with 500K+ users.",
                "Developed UI functionality in React, improving onboarding flow and application engagement.",
                "Designed REST APIs using Spring Boot, reducing overall latency by ~30%.",
                "Integrated MySQL and Cassandra to support both transactional and analytical workloads.",
                "Implemented OAuth2 authentication and contributed to Docker-based deployments.",
                "Monitored AWS EC2/S3 environments and improved system uptime via optimized resource usage.",
                "Worked closely with PM and QA teams in an Agile environment with consistent sprint delivery."
              ]
            }
          ].map(job => (
            <motion.div key={job.title} className="p-6 bg-green-50 rounded-xl shadow-lg" whileHover={{ scale: 1.02 }}>
              <h3 className="text-xl font-bold text-green-700">{job.title}</h3>
              <p className="italic text-gray-600">{job.company} | {job.location} | {job.period}</p>
              <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">{job.bullets.map(b => <li key={b}>{b}</li>)}</ul>
            </motion.div>
          ))}
        </motion.section>

        {/* Education */}
        <motion.section className={`${sectionBg.education} rounded-xl shadow-xl p-6`} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <h2 id="education" className="text-3xl font-semibold text-yellow-700 mb-4 border-b-4 border-yellow-300 inline-block pb-1">Education</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Master of Science in Software Engineering – Lewis University, Romeoville, IL</li>
            <li>Bachelor of Science in Computer Science – Jawaharlal Nehru Technological University (JNTUH), Hyderabad, India</li>
          </ul>
        </motion.section>

        {/* Contact */}
        <motion.section className={`${sectionBg.contact} rounded-xl shadow-xl p-6 text-center`} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl font-semibold text-blue-700 mb-4 border-b-4 border-blue-300 inline-block pb-1">Get in Touch</h2>
          <p className="text-gray-700">Interested in working together or want to know more? Send me a message at <a href="mailto:md.pasha7852@gmail.com" className="underline">md.pasha7852@gmail.com</a>.</p>
        </motion.section>

      </main>
      <footer className="bg-gray-800 text-white py-4 text-center">
  © 2025 Mohammed Pasha — Made with ❤️
</footer>
    </div>
  );
}

export default App;

