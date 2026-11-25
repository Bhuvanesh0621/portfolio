import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Download,
  Printer,
  ExternalLink,
  Mail,
  MessageCircle,
  Linkedin,
  Github,
  Award,
  BookOpen,
  Code2,
  FolderGit2,
  CheckCircle2,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { profile } = PORTFOLIO_DATA;

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl max-h-[92vh] bg-[#0E1117] border border-white/15 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col z-10"
          >
            {/* Modal Top Control Bar */}
            <div className="h-14 bg-[#141822] border-b border-white/10 px-4 sm:px-6 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse" />
                <span className="text-xs sm:text-sm font-mono font-semibold text-white tracking-wide">
                  Bhuvanesh_Kumar_Resume.pdf
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                {/* Print Button */}
                <button
                  type="button"
                  onClick={handlePrint}
                  className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-neutral-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Print or Save as PDF"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Print</span>
                </button>

                {/* Direct Download PDF Button */}
                <a
                  href={profile.resumeUrl}
                  download="Bhuvanesh_Kumar_Resume.pdf"
                  className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white text-xs font-mono font-semibold flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(168,85,247,0.3)] cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={onClose}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Body: ATS-Formatted Document Sheet */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-[#0A0D14] text-neutral-200 font-sans selection:bg-purple-500 selection:text-white">
              <div className="max-w-3xl mx-auto bg-[#0F141F] border border-white/10 rounded-xl p-6 sm:p-10 shadow-2xl relative">
                
                {/* Header Band */}
                <div className="border-b border-purple-500/30 pb-6 mb-6">
                  <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                    Bhuvanesh Kumar M
                  </h1>
                  <p className="text-sm sm:text-base font-semibold text-purple-400 uppercase tracking-widest mt-1">
                    Software Developer | AI &amp; Web Technologies
                  </p>

                  <div className="mt-3 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-neutral-300 font-mono">
                    <a
                      href={profile.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 hover:text-emerald-300 transition-colors text-emerald-400 font-semibold"
                      title="Chat on WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{profile.displayPhone || '+91 99411 35545'} (WhatsApp)</span>
                    </a>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-purple-400" />
                      {profile.email}
                    </span>
                    <span>•</span>
                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-purple-300 transition-colors"
                    >
                      linkedin.com/in/bhuvaneshkumar0621
                    </a>
                    <span>•</span>
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-purple-300 transition-colors"
                    >
                      github.com/Bhuvanesh0621
                    </a>
                    <span>•</span>
                    <span>Chennai, Tamil Nadu, India</span>
                  </div>
                </div>

                {/* 1. PROFESSIONAL SUMMARY */}
                <div className="mb-6">
                  <h2 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-purple-300 border-b border-white/10 pb-1 mb-2.5">
                    Professional Summary
                  </h2>
                  <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-normal">
                    Passionate B.Tech Information Technology student at Sri Muthukumaran Institute of Technology with a strong foundation in software engineering, database management, and emerging web technologies. Proven track record of architecting practical, AI-driven applications including SmartPark.AI and BillBrain. Eager to contribute to software engineering teams through innovative problem solving, clean code architecture, and continuous learning.
                  </p>
                </div>

                {/* 2. TECHNICAL EXPERTISE */}
                <div className="mb-6">
                  <h2 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-purple-300 border-b border-white/10 pb-1 mb-2.5">
                    Technical Expertise
                  </h2>
                  <div className="space-y-2 text-sm sm:text-base text-neutral-200 font-normal">
                    <div>
                      <strong className="text-white font-semibold">Programming Languages: </strong>
                      <span>C, Python, Java, JavaScript (ES6+), TypeScript</span>
                    </div>
                    <div>
                      <strong className="text-white font-semibold">Frontend &amp; UI: </strong>
                      <span>HTML5, CSS3, React, Tailwind CSS, Vite, Responsive Web Design</span>
                    </div>
                    <div>
                      <strong className="text-white font-semibold">Backend &amp; APIs: </strong>
                      <span>Node.js, Express.js, RESTful APIs, JSON, WebSockets</span>
                    </div>
                    <div>
                      <strong className="text-white font-semibold">Databases &amp; Tools: </strong>
                      <span>MySQL, PostgreSQL, Git, GitHub, VS Code, Cloudflare Pages, Linux Fundamentals</span>
                    </div>
                    <div>
                      <strong className="text-white font-semibold">AI &amp; Data Concepts: </strong>
                      <span>Google Gemini AI API Integration, OCR (Tesseract.js), Exploratory Data Analysis (Pandas, NumPy)</span>
                    </div>
                  </div>
                </div>

                {/* 3. FEATURED SOFTWARE PROJECTS */}
                <div className="mb-6">
                  <h2 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-purple-300 border-b border-white/10 pb-1 mb-3">
                    Featured Software Projects
                  </h2>

                  {/* Project 1 */}
                  <div className="mb-5">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <h3 className="text-base font-bold text-white">
                        SmartPark.AI — AI-Based Smart Parking Management System
                      </h3>
                      <span className="text-xs sm:text-sm font-mono text-purple-400 font-medium">
                        React, TypeScript, Tailwind, Gemini AI, OCR
                      </span>
                    </div>
                    <ul className="mt-2 list-disc list-inside text-sm text-neutral-300 space-y-1.5 leading-relaxed">
                      <li>Architected a full-stack parking management system featuring real-time multi-level slot allocation telemetry across floors.</li>
                      <li>Integrated Google Gemini AI for conversational voice/text slot queries and Tesseract.js OCR for license plate recognition.</li>
                      <li>Implemented interactive bay selection, dynamic demand pricing algorithms, and simulated digital checkout workflows.</li>
                    </ul>
                  </div>

                  {/* Project 2 */}
                  <div className="mb-5">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <h3 className="text-base font-bold text-white">
                        BillBrain — AI-Driven Payment &amp; Subscription Intelligence
                      </h3>
                      <span className="text-xs sm:text-sm font-mono text-purple-400 font-medium">
                        React, TypeScript, Node.js, NLP, Chart.js
                      </span>
                    </div>
                    <ul className="mt-2 list-disc list-inside text-sm text-neutral-300 space-y-1.5 leading-relaxed">
                      <li>Developed a personal finance intelligence dashboard delivering automated recurring bill tracking and spend analytics.</li>
                      <li>Engineered natural-language expense search and multi-modal expense capture with Tamil and Tanglish voice logging support.</li>
                      <li>Created predictive category expenditure forecasting models to identify hidden subscriptions and prevent overdrafts.</li>
                    </ul>
                  </div>

                  {/* Project 3 */}
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <h3 className="text-base font-bold text-white">
                        EBPL Data Science &amp; Predictive Analytics Pipeline
                      </h3>
                      <span className="text-xs sm:text-sm font-mono text-purple-400 font-medium">
                        Python, Pandas, NumPy, Data Modeling
                      </span>
                    </div>
                    <ul className="mt-2 list-disc list-inside text-sm text-neutral-300 space-y-1.5 leading-relaxed">
                      <li>Built exploratory data analytics pipelines in Python to extract statistical insights and model predictive data trends.</li>
                    </ul>
                  </div>
                </div>

                {/* 4. EDUCATION */}
                <div className="mb-6">
                  <h2 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-purple-300 border-b border-white/10 pb-1 mb-3">
                    Education
                  </h2>

                  <div className="mb-4">
                    <div className="flex justify-between items-baseline text-sm">
                      <div>
                        <strong className="text-white text-base font-bold">Sri Muthukumaran Institute of Technology</strong>
                        <span className="text-neutral-400 ml-2">— Chennai, Tamil Nadu</span>
                      </div>
                      <span className="font-mono text-purple-400 font-medium text-xs sm:text-sm">2023 – 2027</span>
                    </div>
                    <p className="text-sm text-neutral-200 mt-1">
                      Bachelor of Technology (B.Tech) in Information Technology
                    </p>
                    <p className="text-xs sm:text-sm text-neutral-400 font-mono mt-1">
                      Key Coursework: Data Structures &amp; Algorithms, Object-Oriented Programming (Java), DBMS, Web Tech, Operating Systems.
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline text-sm">
                      <div>
                        <strong className="text-white text-base font-bold">Sivanthi Matriculation Higher Secondary School</strong>
                        <span className="text-neutral-400 ml-2">— Chennai, Tamil Nadu</span>
                      </div>
                      <span className="font-mono text-purple-400 font-medium text-xs sm:text-sm">2023</span>
                    </div>
                    <p className="text-sm text-neutral-200 mt-1">
                      Higher Secondary Certificate (State Board of Tamil Nadu) — Mathematics, Physics, Chemistry, Biology
                    </p>
                  </div>
                </div>

                {/* 5. CERTIFICATIONS */}
                <div>
                  <h2 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-purple-300 border-b border-white/10 pb-1 mb-2.5">
                    Certifications &amp; Credentials
                  </h2>
                  <div className="space-y-2 text-sm text-neutral-300">
                    <div className="flex items-start gap-2.5">
                      <Award className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white font-semibold">NPTEL Online Certification — Programming in Java: </strong>
                        <span>Elite Certificate (Score: 64%) issued by IIT Kharagpur and Ministry of Education, Govt. of India.</span>
                        <a
                          href="/certificates/nptel-programming-in-java-certificate.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-2 inline-flex items-center gap-1 text-xs text-purple-400 hover:text-purple-300 font-mono underline underline-offset-2"
                        >
                          [View Verified Certificate]
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white font-semibold">Open Source &amp; GitHub Contributor: </strong>
                        <span>Active repository management and software development on GitHub (@Bhuvanesh0621).</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
