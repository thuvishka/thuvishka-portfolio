 "use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Code2, Lightbulb, GraduationCap, BriefcaseBusiness, Mic2, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Scene = dynamic(() => import("./Scene"), { ssr: false });

const experience = [
 { role:"Co-Founder", org:"OMIXELO", date:"Sep 2026 — Present", text:"Building OMIXELO with a vision to turn bold ideas into meaningful digital solutions. Contributing across education, technology and software development while working with a passionate team.", tags:["Education","Technology","Software Development"] },
 { role:"Chief Marketing Officer", org:"OMIXELO", date:"Oct 2026 — Present", text:"Developing strategic marketing initiatives, strengthening brand identity and helping drive business growth.", tags:["Strategic Marketing","Brand Identity","Leadership"] },
 { role:"Tutor — PHP Programming", org:"OMIXELO", date:"Sep 2026 — Present", text:"Delivering practical, easy-to-follow lessons for beginners, covering core PHP concepts and hands-on programming.", tags:["PHP","Teaching","Mentoring"] },
 { role:"Teacher", org:"DP Education Coding School", date:"Aug 2026 — Present", text:"Making technology simple, practical and accessible through hands-on learning, creative problem-solving and project-based activities.", tags:["IT Education","Student Mentoring","Project-based Learning"] },
 { role:"Instructor", org:"DP Education Coding School", date:"Jul 2026 — Oct 2026 · Kiribathgoda", text:"Delivered engaging lessons in HTML, CSS, PHP and JavaScript. Created practical learning materials and supported learners with technical development and career preparation.", tags:["HTML","CSS","PHP","JavaScript"] }
];
const skills = ["C","C#","Python","Java","PHP","HTML & CSS","JavaScript","Object-Oriented Programming","Teaching & Mentoring","Strategic Marketing","Problem Solving"];
const projects = [
 {n:"01",name:"HASTHA AI",type:"AI · Accessibility concept",desc:"An AI-powered sign-language experience concept designed to translate gestures into text and speech.",stack:"Computer Vision / AI / Web"},
 {n:"02",name:"OMIXELO",type:"Technology · Education",desc:"A growing initiative connecting technology, software development, STEM education and knowledge sharing.",stack:"Community / Education / Technology"},
 {n:"03",name:"Personal Portfolio",type:"Web · Personal brand",desc:"A personal space to document learning, projects, teaching experience and the next steps in my technology journey.",stack:"Next.js / TypeScript / GSAP"}
];
export default function Portfolio() {
 const root = useRef<HTMLDivElement>(null);
 useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);
  const ctx = gsap.context(() => {
   gsap.from(".hero-copy > *",{y:28,opacity:0,duration:.85,stagger:.12,ease:"power3.out"});
   gsap.from(".hero-portrait",{y:45,opacity:0,scale:.94,duration:1.1,ease:"power3.out",delay:.2});
   gsap.utils.toArray<HTMLElement>(".reveal").forEach(el => gsap.from(el,{y:42,opacity:0,duration:.8,ease:"power2.out",scrollTrigger:{trigger:el,start:"top 86%"}}));
   gsap.to(".orbit-ring",{rotate:360,duration:38,ease:"none",repeat:-1});
  }, root);
  return () => ctx.revert();
 }, []);
 return <main ref={root}>
  <nav className="nav"><a className="brand" href="#home">TD<span>.</span></a><div className="nav-links"><a href="#about">About</a><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#education">Education</a></div><a className="nav-cta" href="#contact">Let's talk <ArrowUpRight size={15}/></a></nav>
  <section className="hero section" id="home">
   <div className="hero-copy">
    <div className="eyebrow"><span className="live-dot"/> OPEN TO LEARNING & OPPORTUNITIES</div>
    <p className="hello">Hello, I'm</p><h1>Thuvishka<br/><em>Dasanayaka.</em></h1>
    <p className="hero-lead">Technology enthusiast. Educator. <span>Curious builder.</span></p>
    <p className="hero-desc">Exploring the evolving world of IT, learning by building, and turning ideas into meaningful digital experiences.</p>
    <div className="hero-actions"><a className="button primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a><a className="text-link" href="#about">More about me <ArrowDown size={15}/></a></div>
    <div className="socials"><a aria-label="LinkedIn" href="https://www.linkedin.com/" target="_blank"><Linkedin/></a><a aria-label="GitHub" href="https://github.com/" target="_blank"><Github/></a><a aria-label="Email" href="mailto:hello@example.com"><Mail/></a></div>
   </div>
   <div className="hero-visual"><div className="glow"></div><div className="orbit-ring"></div><div className="hero-portrait"><Image src="/images/thuvishka.jpeg" alt="Portrait of Thuvishka Dasanayaka" fill priority sizes="(max-width: 800px) 80vw, 440px"/></div><div className="floating-card card-top"><span className="mini-icon"><Code2 size={16}/></span><span><b>Always learning</b><small>Always exploring</small></span></div><div className="floating-card card-bottom"><span className="mini-icon violet"><Sparkles size={16}/></span><span><b>Ideas → Impact</b><small>One step at a time</small></span></div><span className="scroll-note">SCROLL TO EXPLORE</span></div>
  </section>
  <section className="about section" id="about"><div className="section-kicker reveal">01 / ABOUT</div><div className="about-grid"><h2 className="reveal">Curiosity is where<br/><em>everything begins.</em></h2><div className="about-text reveal"><p>I'm passionate about technology and interested in exploring the constantly evolving world of Information Technology. I enjoy learning about software, programming and emerging technologies while developing practical skills through continuous learning and hands-on experience.</p><p>I’m particularly interested in understanding how technology can solve problems, improve experiences and turn ideas into meaningful solutions. I approach every opportunity with curiosity, a willingness to learn and a commitment to continuous improvement.</p><p>As I continue my journey in IT, I’m focused on expanding my technical knowledge, gaining real-world experience and connecting with people who share an interest in technology and innovation.</p><div className="signature">Always learning. Always exploring. Always looking for what’s next.</div></div></div></section>
  <section className="focus section"><div className="section-kicker reveal">WHAT DRIVES ME</div><div className="focus-grid">
   <article className="focus-card reveal"><Code2/><h3>Technology</h3><p>Exploring programming, software and emerging technologies through curiosity and practice.</p></article>
   <article className="focus-card reveal"><Lightbulb/><h3>Problem solving</h3><p>Thinking creatively about challenges and how digital tools can make a real difference.</p></article>
   <article className="focus-card reveal"><GraduationCap/><h3>Knowledge sharing</h3><p>Helping others learn through teaching, mentoring and practical technology education.</p></article>
   <article className="focus-card reveal"><Mic2/><h3>Community</h3><p>Connecting with people, exchanging ideas and participating in technology initiatives.</p></article>
  </div></section>
  <section className="experience section" id="experience"><div className="section-kicker reveal">02 / EXPERIENCE</div><div className="section-heading reveal"><h2>Where I’m <em>growing.</em></h2><p>Learning, teaching and building with people who are moving technology forward.</p></div><div className="timeline">{experience.map((item,i)=><article className="timeline-item reveal" key={item.role+item.org}><div className="timeline-index">0{i+1}</div><div className="timeline-content"><div className="role-line"><h3>{item.role}</h3><span>{item.date}</span></div><h4>{item.org}</h4><p>{item.text}</p><div className="tags">{item.tags.map(t=><span key={t}>{t}</span>)}</div></div></article>)}</div></section>
  <section className="projects section" id="projects"><div className="section-kicker reveal">03 / SELECTED WORK</div><div className="section-heading reveal"><h2>Ideas in <em>motion.</em></h2><p>A few initiatives and concepts that reflect what I’m interested in exploring.</p></div><div className="project-list">{projects.map(p=><article className="project-card reveal" key={p.n}><div className="project-number">{p.n}</div><div className="project-info"><span>{p.type}</span><h3>{p.name}</h3><p>{p.desc}</p><small>{p.stack}</small></div><ArrowUpRight className="project-arrow"/></article>)}</div></section>
  <section className="education section" id="education"><div className="section-kicker reveal">04 / EDUCATION</div><div className="section-heading reveal"><h2>The learning <em>continues.</em></h2></div><div className="education-grid"><article className="education-card reveal"><span className="edu-year">2026 — PRESENT</span><h3>BSc (Hons) in Computer Science</h3><h4>University of Colombo School of Computing</h4><p>Undergraduate · Computer Science</p></article><article className="education-card reveal"><span className="edu-year">G.C.E. ADVANCED LEVEL</span><h3>Physical Science Stream</h3><h4>D. S. Senanayake College</h4><p>Combined Mathematics — A · Physics — B · ICT — A</p><p className="zscore">Z-Score: 2.0545</p></article></div></section>
  <section className="skills section"><div className="section-kicker reveal">CURRENT TOOLKIT</div><div className="skills-wrap reveal">{skills.map(s=><span key={s}>{s}</span>)}</div></section>
  <section className="contact section" id="contact"><div className="contact-inner reveal"><div className="section-kicker">05 / GET IN TOUCH</div><h2>Have an idea?<br/><em>Let’s connect.</em></h2><p>I’m always happy to connect with people who are curious about technology, learning and building useful things.</p><a className="button primary" href="mailto:hello@example.com">Say hello <ArrowUpRight size={17}/></a><div className="contact-social"><a href="https://www.linkedin.com/" target="_blank">LinkedIn <ArrowUpRight size={13}/></a><a href="https://github.com/" target="_blank">GitHub <ArrowUpRight size={13}/></a></div></div><div className="contact-scene"><Scene/></div></section>
  <footer><a className="brand" href="#home">TD<span>.</span></a><span>Designed & built with curiosity by Thuvishka.</span><a href="#home">BACK TO TOP ↑</a></footer>
 </main>;
}