import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Github, Linkedin, Mail } from 'lucide-react';
import { 
  FaJava, FaPython, FaReact, 
  FaHtml5, FaCss3Alt, FaJs,
  FaAndroid, FaChartBar, FaCode 
} from 'react-icons/fa';
import { SiCplusplus } from 'react-icons/si';

function App() {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    });

    document.querySelectorAll('.slide-up').forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'Java', icon: FaJava },
    { name: 'Python', icon: FaPython },
    { name: 'C++', icon: SiCplusplus },
    { name: 'Android Development', icon: FaAndroid },
    { name: 'Data Analysis', icon: FaChartBar },
    { name: 'Problem Solving', icon: FaCode },
    { name: 'HTML/CSS', icon: FaHtml5 },
    { name: 'JavaScript', icon: FaJs },
    { name: 'React', icon: FaReact }
  ];

  return (
    <div className="gradient-bg min-h-screen">
      <nav className="fixed w-full backdrop-blur-lg bg-background/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold text-purple-400">PR</span>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                {['Home', 'Projects', 'Certifications'].map((item) => (
                  <Link
                    key={item}
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    className="nav-link cursor-pointer"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center min-h-[calc(100vh-8rem)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-8">
              <h1 className="text-5xl font-bold mb-4">
                Hi, I'm <span className="text-purple-400">Poojith Reddy</span>
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                Full Stack Web Developer
              </p>
              <div className="flex items-center justify-center space-x-6 mb-8">
                <a href="https://github.com/PoojithReddy33" className="social-link" target="_blank" rel="noopener noreferrer">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/poojith-reddy5" className="social-link" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:poojithreddy33@gmail.com" className="social-link" target="_blank" rel="noopener noreferrer">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="card mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">About Me</h2>
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate Bachelor of Technology student specializing in Computer Science & Engineering. With a strong foundation in multiple programming languages and a keen interest in software development, I'm constantly working on projects that challenge and enhance my skills. My experience ranges from Android development to data analysis, showcasing my versatility as a developer.
              </p>
            </div>

            <div className="card mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Technical Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map(({ name, icon: Icon }) => (
                  <div key={name} className="px-3 py-2 rounded-lg bg-purple-400/20 text-purple-400 flex items-center justify-center space-x-2">
                    <Icon className="w-5 h-5" />
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Education</h2>
              <div className="text-gray-300">
                <p className="font-semibold">Bachelor of Technology in Computer Science and Engineering</p>
                <p className="text-gray-400">Currently Pursuing</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Featured Projects</h2>
          <div className="grid grid-cols-1 gap-6">
            <motion.div
              className="slide-up card"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400"
                    alt="Robot Project"
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold mb-2 text-purple-400">Obstacle Avoidance Robot</h3>
                  <p className="text-gray-400 mb-4">An intelligent robot system designed to navigate and avoid obstacles autonomously using advanced sensors and algorithms.</p>
                  <a 
                    href="https://github.com/PoojithReddy33/Obstacle_Avoidance_Robot.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition-colors duration-300"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    View Project
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="certifications" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              className="slide-up card"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex flex-col gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400"
                  alt="SlashMark IT Internship"
                  className="rounded-lg w-full h-48 object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-purple-400">SlashMark IT Internship</h3>
                  <p className="text-gray-400 mb-4">Completed internship program at SlashMark IT</p>
                  <a 
                    href="https://drive.google.com/file/d/1KjNJuIUqVO-doZoXbVXns8y-BXCAZgeT/view?usp=drivesdk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 inline-flex items-center"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="slide-up card"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex flex-col gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&q=80&w=400"
                  alt="Java Certification"
                  className="rounded-lg w-full h-48 object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-purple-400">Java Certification</h3>
                  <p className="text-gray-400 mb-4">Advanced Java Programming Certification</p>
                  <a 
                    href="https://drive.google.com/file/d/1hkxQsBNVwDp3TxIBhMUm_GyUIaXTjW2I/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 inline-flex items-center"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;