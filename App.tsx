import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Cpu, 
  FileCode, 
  Mail, 
  Github, 
  Linkedin, 
  ExternalLink,
  Database,
  Layers,
  Globe,
  Flame,
  Zap,
  Microscope,
  Terminal,
  Activity,
  ArrowRight,
  MapPin,
  Calendar,
  Award,
  Settings2,
  PenTool,
  Bot,
  Sparkles,
  Grid3X3
} from "lucide-react";

// Data Preservation
const projects = [
  {
    id: "scc",
    title: "Chloride-Induced Stress Corrosion Cracking (SCC) in 304L Stainless Steel",
    description: "Industry-linked project with BASF Petronas. Developed experimental setup for elevated-temperature chloride environments and SEM/EDS characterization.",
    labNotes: "Fun fact: 10wt% of FeCl3 will melt over your 304L thermocouple. Also, when a solution becomes calm enough at high temperature, the next second it will turn into a volcano.",
    tags: ["SolidWorks", "SEM/EDS", "Metallurgy", "Experimental Setup"],
    category: "Final Year Project",
    image: "/FYP Project/SCC.jpg",
    gallery: [
      { url: "/FYP Project/SCC.jpg", caption: "Stress Corrosion Cracking Analysis" },
      { url: "/FYP Project/C-ring.jpg", caption: "C-ring Specimen Setup" },
      { url: "/FYP Project/Apparatus.jpg", caption: "Experimental Apparatus" }
    ]
  },
  {
    id: "heat",
    title: "Innovative Hybrid Concentrated-Evacuated Heat Collector",
    description: (
      <span>
        Group Project in developing an innovative hybrid solar collector based on <strong>Concentrated Solar Power</strong> and <strong>Evacuated Tube Collector</strong>.
      </span>
    ),
    labNotes: "The universe definitely has a sense of humor. Every time we set up the prototype for testing, it started to rain. The moment we packed everything up and stopped, the sun would come out to mock us.",
    tags: ["Solar Thermal", "Optical Concentration", "Renewable Energy"],
    category: "Thermal Systems",
    image: "/Solar Project/Water result.jpg",
    gallery: [
      { url: "/Solar Project/hex assembly.mp4", caption: "HEX ASSEMBLY: Full Assembly of the Hybrid Collector System" },
      { url: "/Solar Project/BOM Video.mp4", caption: "WORKING VIDEO: Operational Testing and Flow Visualization" },
      { url: "/Solar Project/Water result.jpg", caption: "WATER RESULT: Result of Prototype" },
      { url: "/Solar Project/idp1.jpg", caption: "IDP 1: Picture with Project" },
      { url: "/Solar Project/idp2.jpg", caption: "IDP 2: Poster Presentation" },
      { url: "/Solar Project/BOM2.jpg", caption: "BOM 2: Components and workflow Diagram" }
    ]
  },
  {
    id: "temp",
    title: "Intelligent Home Temperature-Controlled System",
    description: "Group Project in designed a temperature-responsive system using integrated sensors and motor drivers for automated climate control in residential environments.",
    labNotes: "We used a candle for the heat sensor. The temperature definitely rose, but the sensor decided to quit on us after a few minutes—turns out it didn't like being that close to an actual flame!",
    tags: ["Arduino", "Sensors", "Automation"],
    category: "Robotics",
    image: "/Electrical/Electrical.jpg",
    gallery: [
      { url: "/Electrical/Electrical.jpg", caption: "Prototype with Arduino Diagram and LabView" }
    ]
  },
  {
    id: "fluid",
    title: "Fluid Flow Analysis System",
    description: "Group Project of developing C++ program to analyze fluid dynamics parameters such as pressure loss and head loss across  various piping .",
    labNotes: "I chose Fluid Dynamics mostly because I thought 'Reynold Number' sounded like a cool nickname. Turns out the coding part was way more turbulent than the name!",
    tags: ["C++", "Fluid Mechanics", "Simulation"],
    category: "Computing",
    image: "/Fluid flow/C++.jpg",
    gallery: [
      { url: "/Fluid flow/C++.jpg", caption: "C++ code of program" }
    ]
  },
  {
    id: "turbine",
    title: "Rotating Water Turbine Model",
    description: "From scrape to a model , from static to dynamics.",
    labNotes: "After final submission, I went back to 'rescue' the prototype from the uni, but it had completely vanished. I still think it's out there somewhere... probably in a scrap pile.",
    tags: ["Mechanical Design", "Dynamics", "Hydraulics"],
    category: "Fluid Power",
    image: "/Metal/metal (2).jpg",
    gallery: [
      { url: "/Metal/metal (2).jpg", caption: "METAL (2): Initial Metal Scrape Component Preparation" },
      { url: "/Metal/Water Turbine.mp4", caption: "WATER TURBINE: Rotating Turbine Model Testing Session" }
    ]
  },
  {
    id: "gear",
    title: "Gear Failure Simulation",
    description: "Solidworks Simulation of Gear under Loading Condition.",
    labNotes: "Pro-tip: Why spend hours drawing your own gear from scratch when GrabCAD exists? Save your sanity and just download the model!",
    tags: ["ANSYS", "Stress Analysis", "Failure Prediction"],
    category: "Simulation",
    image: "/Gear/S2161079_KIG2017_GEAR_page-0001.jpg",
    gallery: [
      { url: "/Gear/S2161079_KIG2017_GEAR_page-0001.jpg", caption: "GEAR: Stress Distribution Analysis on Tooth Loading" }
    ]
  },
  {
    id: "heat-calc",
    title: "Numerical Calculation Program of Heat Transfer",
    description: "Implementation of Numerical Euler and Runge-Kutta 4 (RK4) methods to solve non-linear heat transfer differential equations.",
    labNotes: "Let's be honest, nobody actually has 'fun' coding in MATLAB. It’s more like a character-building exercise in matrix-induced frustration.",
    tags: ["Numerical Methods", "MATLAB", "Thermodynamics"],
    category: "Computational",
    image: "/Numerical/Euler.jpg",
    gallery: [
      { url: "/Numerical/Euler.jpg", caption: "EULER: Numerical Solution using Euler's Method" },
      { url: "/Numerical/RK4.jpg", caption: "RK4: Precision Comparison using RK4 Algorithm" }
    ]
  },
  {
    id: "portfolio",
    title: "This Portfolio",
    description: "Currently you are viewing my last project - as of now.",
    labNotes: "Every line of code in this portfolio was refined with precision, or at least a very strong cup of coffee.",
    tags: ["React", "Vite", "Tailwind", "Motion"],
    category: "Digital Design",
    image: "",
    gallery: []
  }
];

const experiences = [
  {
    id: "abbott",
    company: "Abbott Penang",
    role: "Automated Test Engineering (ATE) Intern",
    period: "Jul 2025 – Oct 2025",
    desc: "Class III medical devices. Validated cloned automated test stations and performed root-cause analysis on station failures.",
    details: "Focusing on the production of Class III medical devices, I assisted in the process of validation and qualification of cloned automated test stations. ",
    image: "/Abbott Intern 1.jpg",
    gallery: [
      { url: "/Abbott Intern 2.jpg", caption: "Presentation sessions about the validation project at the end of Internship." },
      { url: "/Abbott Intern 3.jpg", caption: "Group photo of with UM's lecturer and ATE's Manager during Internship." },
      { url: "/Abbott Intern 4.jpg", caption: "Abbott Penang - ATE Device Member Group Photo." },
      { url: "/Abbott Intern 5.jpg", caption: "Abbott's Team Building 2025" }
    ],
    icon: <Activity className="w-5 h-5 text-primary" />,
    tags: ["ATE Validation", "Root Cause Analysis"],
    responsibilities: [
      "Assisted in process of validation and qualification of cloned automated test stations for a new medical devices for production used.",
      "Undergo root-cause analysis sessions with senior engineers during the validation process.",
      
    ]
  },
  {
    id: "ehime",
    company: "Ehime University, Japan",
    role: "Mobility Research Assistant",
    period: "Jul 2024 - Sep 2024",
    desc: "Researched Micro-Meso Scale Ignition and PET Rocket Nozzles. Formulated fuel-air mixtures.",
    details: (
      <span>
        As an international mobility research assistant that funded by JASSO's scholarship ,  I took part in researching in energy and combustion sector - 
        <strong> Micro-Meso Combustion</strong>, <strong>Continuous Wave Combustion</strong> and 
        <strong> PET Rocket Nozzle R&D</strong>.
      </span>
    ),
    image: "/ceremony (1).jpg",
    gallery: [
      { url: "/combustion.jpg", caption: "Micro-Meso Scale Ignition Research" },
      { url: "/Educational.jpg", caption: "Assist in Ehime University Open Day for secondary school student to build their interest on engineering field." },
      { url: "/rocket_nozzle.mp4", caption: "PET Rocket Nozzle performance testing" },
      { url: "/UM x Ehime.jpg", caption: "UM x Ehime University Mobility Program" },
      { url: "/UM Group photo.jpg", caption: "University of Malaya Student Group Photo" },
      { url: "/Iseki Company Visit.jpg", caption: "Industrial Visit to Iseki Company" }
    ],
    icon: <Flame className="w-5 h-5 text-primary" />,
    tags: ["Ignition Research", "Rocket Nozzles", "Formula Development"],
    responsibilities: [
      "Assist in capturing micro-to-meso scale ignition characteristics by high speed camera.",
      "Assist in preparing carbon hydrocarbon formulations accordings handbooks.",
      "Assist in Nozzle Testing set-up."
    ]
  },
  {
    id: "waikato",
    company: "University Waikato, New Zealand",
    role: "International Mobility Student",
    period: "Jul 2023 - Oct 2023",
    desc: "Explored sustainable agriculture technology and smart irrigation solutions.",
    details: "Engaged in cross-border engineering research at the University of Waikato, focusing on New Zealand's advanced ag-tech sector. Project work involved evaluating automated irrigation systems and sustainable farming technologies designed for high-efficiency resource management in modern agriculture.",
    image: "/UOW.jpg",
    gallery: [
      { url: "/exchange.jpg", caption: "International Mobility Program at the University of Waikato" },
      { url: "/uow2.jpg", caption: "Mobility students exploration and research activities" },
      { url: "/Farewell Completers 2023B trimester.jpg", caption: "Farewell session for Trimester 2023B mobility completers" },
      { url: "/tech 2 (1).mp4", caption: "Research on automated agriculture technology and irrigation systems in New Zealand" }
    ],
    icon: <Globe className="w-5 h-5 text-primary" />,
    tags: ["Ag-Tech", "Automation", "Cross-Border Research"],
    responsibilities: [
      "Researched automated irrigation and sustainable agriculture technologies.",
      "Explored engineering solutions for ag-tech integration in New Zealand.",
      "Participated in international research collaboration at the University of Waikato."
    ]
  }
];

const skillCategories = [
  {
    name: "Design & Simulation",
    items: [
      { name: "SolidWorks", level: "Intermediate", icon: <Database className="w-4 h-4" /> },
      { name: "ANSYS", level: "Advanced", icon: <Layers className="w-4 h-4" /> },
      { name: "Simulink", level: "Intermediate", icon: <Zap className="w-4 h-4" /> }
    ]
  },
  {
    name: "Code & Analysis",
    items: [
      { name: "C++", level: "Advanced", icon: <Terminal className="w-4 h-4" /> },
      { name: "MATLAB", level: "Intermediate", icon: <FileCode className="w-4 h-4" /> },
      { name: "Power BI", level: "Advanced", icon: <Activity className="w-4 h-4" /> }
    ]
  },
  {
    name: "Systems & Control",
    items: [
      { name: "Arduino", level: "Intermediate", icon: <Cpu className="w-4 h-4" /> },
      { name: "LabVIEW", level: "Intermediate", icon: <Microscope className="w-4 h-4" /> }
    ]
  },
  {
    name: "Productivity",
    items: [
      { name: "Microsoft Office", level: "Expert", icon: <Settings2 className="w-4 h-4" /> },
      { name: "Word, PPT, Excel, etc.", level: "Expert", icon: <PenTool className="w-4 h-4" /> }
    ]
  },
  {
    name: "AI Tools",
    items: [
      { name: "ChatGPT, Gemini", level: "Expert", icon: <Bot className="w-4 h-4" /> },
      { name: "Claude, Bing", level: "Expert", icon: <Sparkles className="w-4 h-4" /> }
    ]
  }
];

const courseTaken = [
  {
    category: "Semiconductor Industry",
    courses: [
      "KIG4078 Microfabrication and Devices",
      "KIG4071 Electronic Packaging (Collaborated with Micron Malaysia)",
      "KIG2012/2020 Mechatronics I & II"
    ]
  },
  {
    category: "Materials Related",
    courses: [
      "KIG4056 Tribology",
      "KIG4085 Corrosion Engineering",
      "KIG4073 Metal and Alloy Engineering",
      "KIG1011/3010 Engineering Materials I & II"
    ]
  }
];

export default function App() {
  const [selectedProject, setSelectedProject] = useState<any>(projects[0]);
  const [selectedExperience, setSelectedExperience] = useState<typeof experiences[0] | null>(null);
  const [showLabNotes, setShowLabNotes] = useState(false);

  const handleProjectSelect = (project: any) => {
    setSelectedProject(project);
    setShowLabNotes(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/10 overflow-x-hidden blueprint-grid">
      
      {/* Navigation Line Wrapper */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative border-x border-border/60 min-h-screen pb-24 bg-background/80 backdrop-blur-[2px]">
        
        {/* Header / Hero */}
        <header className="pt-24 pb-20 grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-border/60 text-foreground">
          <div className="md:col-span-8 flex flex-col md:flex-row gap-8 md:items-end">
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="w-48 h-64 border-2 border-primary overflow-hidden transition-all duration-500 shrink-0 bg-muted"
            >
               <img src="/profile.jpg" alt="Koh Jie Xian" className="w-full h-full object-cover" />
            </motion.div>
            
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-4 mb-6"
              >
                <div className="h-[1px] w-12 bg-primary"></div>
                <span className="text-xs font-mono tracking-[0.4em] uppercase text-primary font-bold">Mechanical Engineer</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="text-7xl md:text-[8rem] font-extrabold tracking-tighter leading-[0.8] mb-8"
              >
                KOH <br /><span className="text-primary italic">JIE XIAN</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl leading-relaxed"
              >
                Wish to see a moving Gundam with plasma sword in the future. <span className="text-foreground font-medium block mt-2 tracking-widest text-sm uppercase">University Malaya</span>
              </motion.p>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col justify-end gap-12 md:pl-8">
             <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 border border-border bg-card/30">
                    <p className="text-[10px] font-mono uppercase text-muted-foreground mb-1">Current GPA</p>
                    <p className="text-xl font-bold">3.80/4.0</p>
                  </div>
                  <div className="p-4 border border-border bg-card/30">
                    <p className="text-[10px] font-mono uppercase text-muted-foreground mb-1">Status</p>
                    <p className="text-xl font-bold text-primary">Available after August</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                   <a href="mailto:kohjiexian@gmail.com" className="flex items-center justify-between group p-4 bg-primary text-white hover:bg-primary/90 transition-all font-sans font-bold">
                      <span className="uppercase tracking-widest text-sm">Initiate Contact</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                   </a>
                   <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="w-full flex-1 gap-2 uppercase text-[10px] font-bold tracking-widest h-10">
                        <Linkedin className="w-3 h-3" /> LinkedIn
                      </Button>
                      <Button variant="outline" size="sm" className="w-full flex-1 gap-2 uppercase text-[10px] font-bold tracking-widest h-10">
                        <Github className="w-3 h-3" /> GitHub
                      </Button>
                   </div>
                </div>
             </div>
          </div>
        </header>

        {/* Section: Professional Experience */}
        <section className="py-24 grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-border/60 relative overflow-hidden">
           {/* Background Image Texture - COLOR */}
           <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
              <img src="/about_me.jpg" alt="Section Background" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
           </div>
           
           <div className="md:col-span-3 text-foreground relative z-10">
              <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-black font-bold flex items-center gap-3">
                 <span className="h-2 w-2 bg-primary rounded-full"></span>
                 Exp_History
              </h2>
           </div>
           <div className="md:col-span-9 space-y-16 relative z-10">
              {experiences.map((exp, index) => (
                <motion.div 
                   key={exp.id}
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: index * 0.1 }}
                   onClick={() => setSelectedExperience(exp)}
                   className="group relative grid grid-cols-1 lg:grid-cols-10 gap-8 cursor-pointer"
                >
                   <div className="lg:col-span-3">
                      <div className="sticky top-24">
                        <p className="text-xs font-mono text-primary mb-2 font-bold">{exp.period}</p>
                        <h3 className="text-2xl font-bold tracking-tight mb-2 group-hover:text-primary transition-colors">{exp.company}</h3>
                        <p className="text-sm text-black font-bold uppercase tracking-widest">{exp.role}</p>
                      </div>
                   </div>
                   <div className="lg:col-span-7 space-y-6">
                      <div className="aspect-[21/9] overflow-hidden transition-all duration-700 border border-border relative">
                        <img src={exp.image} alt={exp.company} className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000" />
                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="bg-background text-foreground px-4 py-2 text-[10px] font-mono font-bold uppercase tracking-widest">View Experience Gallery</span>
                        </div>
                      </div>
                      <p className="text-lg text-black font-medium leading-relaxed">
                        {exp.details}
                      </p>
                      <div className="flex gap-4 flex-wrap">
                        {exp.tags.map(tag => (
                           <Badge key={tag} variant="outline" className="rounded-none px-4 py-1 text-[10px] font-mono tracking-widest uppercase">
                             {tag.replace(' ', '_')}
                           </Badge>
                        ))}
                      </div>
                   </div>
                </motion.div>
              ))}
           </div>
        </section>

        {/* Section: Engineering Projects */}
        <section className="py-24 border-b border-border/60 relative overflow-hidden">
           {/* Background Image Texture - COLOR and RESTRICTED to top */}
           <div className="absolute top-0 left-0 right-0 h-[450px] z-0 opacity-60 pointer-events-none">
              <img src="/Gundam.jpg" alt="Section Background" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background"></div>
           </div>

          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 relative z-10">
            <div>
               <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-black font-bold flex items-center gap-3 mb-6">
                 <span className="h-2 w-2 bg-primary rounded-full animate-pulse"></span>
                 Project_Portfolio
               </h2>
               <h3 className="text-5xl md:text-7xl font-bold tracking-tighter text-black">Project <br />History.</h3>
            </div>
            <div className="flex gap-2">
               <span className="text-[10px] font-mono text-muted-foreground uppercase">01 / Projects</span>
               <Separator orientation="vertical" className="h-3 mx-2" />
               <span className="text-[10px] font-mono text-primary font-bold uppercase">{projects.length} Total</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border overflow-hidden">
             {projects.map((project, idx) => (
               <motion.div 
                 key={project.id}
                 whileHover={{ y: -5 }}
                 onClick={() => handleProjectSelect(project)}
                 className={`p-8 bg-background cursor-pointer group transition-all relative ${selectedProject.id === project.id ? 'ring-1 ring-inset ring-primary' : ''}`}
               >
                  <div className="absolute top-4 right-4 text-[10px] font-mono text-muted-foreground opacity-40">0{idx+1}</div>
                  <div className="mb-12">
                     <p className="text-[10px] font-mono uppercase text-primary mb-2 font-bold">{project.category}</p>
                     <h4 className="text-xl font-bold tracking-tight leading-tight group-hover:text-primary transition-colors">
                       {project.title.split(' ').slice(0, 6).join(' ')}{project.title.split(' ').length > 6 ? '...' : ''}
                     </h4>
                  </div>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                       {project.tags.slice(0, 2).map(tag => (
                         <span key={tag} className="text-[10px] border border-border px-2 py-0.5 font-mono uppercase text-muted-foreground">{tag}</span>
                       ))}
                    </div>
                    <Button variant="link" className="p-0 text-xs uppercase tracking-widest h-auto gap-2 group-hover:gap-4 transition-all">
                       Technical Info <ArrowRight className="w-3 h-3" />
                    </Button>
                  </div>
               </motion.div>
             ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={selectedProject.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="mt-12 p-8 border border-border bg-card/20 grid grid-cols-1 lg:grid-cols-12 gap-12"
            >
               <div className="lg:col-span-4 space-y-6">
                  <div className="flex items-center gap-3">
                    <Badge className="rounded-none bg-primary">{selectedProject.category}</Badge>
                    <span className="h-[1px] flex-1 bg-border"></span>
                  </div>
                  <h4 className="text-3xl font-bold tracking-tight">{selectedProject.title}</h4>
                  <div className="min-h-[120px]">
                    <AnimatePresence mode="wait">
                      {showLabNotes ? (
                        <motion.div
                          key="lab-notes"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 10 }}
                          className="p-4 border-l-2 border-primary bg-primary/5 italic text-lg font-serif"
                        >
                          <span className="text-xs font-mono uppercase text-primary block mb-2 font-bold tracking-widest">// Engineering Log</span>
                          "{selectedProject.labNotes || "No specific log entries found for this project."}"
                        </motion.div>
                      ) : (
                        <motion.p 
                          key="description"
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          className="text-lg text-muted-foreground font-light leading-relaxed"
                        >
                          {selectedProject.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className="flex gap-4">
                    <Button className="rounded-none gap-2 font-bold uppercase tracking-widest text-[10px]">
                       <ExternalLink className="w-4 h-4" /> System Specs
                    </Button>
                    <Button 
                      variant={showLabNotes ? "default" : "outline"}
                      onClick={() => setShowLabNotes(!showLabNotes)}
                      className="rounded-none gap-2 font-bold uppercase tracking-widest text-[10px]"
                    >
                       <FileCode className="w-4 h-4" /> {showLabNotes ? "Back to Description" : "Lab Notes"}
                    </Button>
                  </div>
               </div>
               
               <div className="lg:col-span-8">
                  {selectedProject.gallery && selectedProject.gallery.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
                      {selectedProject.gallery.map((item, i) => (
                        <div key={i} className="group relative overflow-hidden border border-border bg-muted">
                          {item.url.toLowerCase().endsWith('.mp4') ? (
                            <video 
                              src={item.url} 
                              controls 
                              muted
                              className="w-full aspect-video object-cover"
                            />
                          ) : (
                            <img src={item.url} alt={item.caption} className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105" />
                          )}
                          <div className="absolute bottom-0 inset-x-0 p-3 bg-background/90 backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 border-t border-primary">
                            <p className="text-[10px] font-mono uppercase tracking-widest text-primary">{item.caption}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="aspect-video bg-muted relative overflow-hidden border border-border">
                       {selectedProject.image && <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />}
                    </div>
                  )}
               </div>
            </motion.div>
          </AnimatePresence>
        </section>

        {/* Section: Technical Stack */}
        <section className="py-24 grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-border/60 relative overflow-hidden">
           {/* Background Image Texture */}
           <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
              <img src="/Japan.JPG" alt="Section Background" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
           </div>

           <div className="md:col-span-3 relative z-10">
              <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-black font-bold flex items-center gap-3">
                 <span className="h-2 w-2 bg-primary rounded-full"></span>
                 Tech_Stack
              </h2>
           </div>
           <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-12 text-sm relative z-10">
              {skillCategories.map((cat, i) => (
                <div key={i} className="space-y-8">
                   <h4 className="text-xs font-mono uppercase tracking-[0.2em] border-b border-border pb-4 font-bold text-black">{cat.name}</h4>
                   <div className="space-y-6">
                      {cat.items.map((skill, idx) => (
                        <div key={idx} className="group cursor-default">
                           <div className="flex justify-between items-center mb-3">
                              <div className="flex items-center gap-3 text-black">
                                 <div className="p-2 border border-border group-hover:border-primary group-hover:text-primary transition-colors">
                                    {skill.icon}
                                 </div>
                                 <span className="font-extrabold tracking-tight text-black group-hover:text-primary transition-colors">{skill.name}</span>
                              </div>
                              <span className="text-[10px] font-mono text-black font-bold uppercase">{skill.level}</span>
                           </div>
                           <div className="h-1 bg-muted relative">
                              <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: skill.level === "Expert" ? "100%" : skill.level === "Advanced" ? "85%" : "65%" }}
                                transition={{ duration: 1.5, delay: idx * 0.1 }}
                                className={`absolute inset-y-0 ${cat.name === "AI Tools" ? "bg-red-600" : "bg-blue-900"} transition-colors`}
                              />
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* Section: Courses Taken */}
        <section className="py-24 grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-border/60 relative overflow-hidden">
           {/* Background Image Texture - COLOR */}
           <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
              <img src="/Dean.jpg" alt="Section Background" className="w-full h-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
           </div>

           <div className="md:col-span-3 relative z-10">
              <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-black font-bold flex items-center gap-3">
                 <span className="h-2 w-2 bg-primary rounded-full"></span>
                 Courses_Taken
              </h2>
           </div>
           <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
              {courseTaken.map((group, i) => (
                <div key={i} className="space-y-6">
                  <h4 className="text-xs font-mono uppercase tracking-[0.2em] border-b border-border pb-4 font-bold text-black">{group.category}</h4>
                  <ul className="space-y-4">
                    {group.courses.map((course, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="h-1.5 w-1.5 bg-primary mt-1.5 shrink-0"></span>
                        <span className="text-sm font-bold tracking-tight text-black">{course}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
           </div>
        </section>

        {/* Section: Footer / Contacts */}
        <section className="mt-24 p-12 md:p-24 bg-[#0a0a0a] text-white border border-border shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -mr-32 -mt-32"></div>
           <div className="flex flex-col md:flex-row justify-between items-end gap-12 relative z-10">
              <div className="space-y-6 relative">
                <h2 className="text-7xl md:text-9xl font-black tracking-tighter opacity-10 select-none absolute -bottom-10 left-0 text-white">CONNECT</h2>
                <h3 className="text-4xl font-bold tracking-tight text-white relative z-10">Available for <br />a cup of <br />free latte.</h3>
                <div className="space-y-4 relative z-10">
                  <div className="flex gap-4">
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-3 border border-white/20 hover:bg-primary hover:text-white hover:border-primary transition-all text-white/80">
                       <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="p-3 border border-white/20 hover:bg-primary hover:text-white hover:border-primary transition-all text-white/80">
                       <Github className="w-5 h-5" />
                    </a>
                    <a href="mailto:kohjiexian@gmail.com" className="p-3 border border-white/20 hover:bg-primary hover:text-white hover:border-primary transition-all text-white/80">
                       <Mail className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-sm font-mono text-white/60 hover:text-primary transition-colors">
                    <a href="mailto:kohjiexian@gmail.com">kohjiexian@gmail.com</a>
                  </p>
                </div>
              </div>
              <div className="text-right font-mono text-[10px] text-white/40 uppercase tracking-widest hidden md:block">
                 <p className="mb-2">Lat: 3.1254° N // Long: 101.6541° E</p>
                 <p className="mb-2 text-white/60">University Malaya, KUL</p>
                 <p className="text-primary/80">2026 KOH JIE XIAN Portfolio</p>
              </div>
           </div>
        </section>

      </div>

      {/* Experience Gallery Modal */}
      <AnimatePresence>
        {selectedExperience && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-background/90 backdrop-blur-md"
            onClick={() => setSelectedExperience(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-5xl max-h-[90vh] bg-card border border-border overflow-hidden flex flex-col md:flex-row gap-0"
              onClick={e => e.stopPropagation()}
            >
              <div className="md:w-1/2 p-12 overflow-y-auto custom-scrollbar bg-background">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="mb-8 p-0 h-auto hover:bg-transparent hover:text-primary gap-2 text-[10px] font-mono uppercase tracking-[0.2em]"
                  onClick={() => setSelectedExperience(null)}
                >
                  <ArrowRight className="w-3 h-3 rotate-180" /> Back to Portfolio
                </Button>
                
                <h2 className="text-xs font-mono text-primary mb-4 font-bold tracking-[0.2em] uppercase">{selectedExperience.period}</h2>
                <h3 className="text-5xl font-extrabold tracking-tighter mb-4 leading-none">{selectedExperience.company}</h3>
                <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8">{selectedExperience.role}</p>
                
                <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
                  <p>{selectedExperience.details}</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedExperience.tags.map(tag => (
                      <Badge key={tag} className="rounded-none bg-primary/10 text-primary hover:bg-primary/20 border-none px-3 py-1 text-[10px] font-mono uppercase">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="mt-12 pt-12 border-t border-border">
                  <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold mb-4">Key Responsibilities</h4>
                  <ul className="space-y-4 text-sm font-light">
                    {selectedExperience.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="h-1.5 w-1.5 bg-primary mt-1.5 shrink-0"></span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="md:w-1/2 bg-muted p-6 overflow-y-auto custom-scrollbar">
                <div className="grid grid-cols-1 gap-6">
                  {/* Gallery */}
                  {selectedExperience.gallery.map((item, i) => (
                    <div key={i} className="space-y-3">
                      {item.url.toLowerCase().endsWith('.mp4') ? (
                        <video 
                          src={item.url} 
                          controls 
                          muted
                          className="w-full h-auto border border-border bg-black"
                          poster={selectedExperience.image}
                        />
                      ) : (
                        <img src={item.url} alt={`Gallery ${i}`} className="w-full h-auto border border-border" />
                      )}
                      <p className="text-xs text-muted-foreground font-light leading-relaxed p-2 bg-background/50 border-l border-primary">
                        {item.caption}
                      </p>
                    </div>
                  ))}
                  
                  {selectedExperience.gallery.length === 0 && (
                    <div className="h-48 flex items-center justify-center border border-dashed border-border opacity-50 italic text-sm">
                      Additional media documentation pending.
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Blueprint Corner Marks */}
      <div className="fixed top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-primary/20 pointer-events-none z-50"></div>
      <div className="fixed top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-primary/20 pointer-events-none z-50"></div>
      <div className="fixed bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-primary/20 pointer-events-none z-50"></div>
      <div className="fixed bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-primary/20 pointer-events-none z-50"></div>
    </div>
  );
}
