import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone,
  User, 
  GraduationCap, 
  Wrench, 
  Briefcase, 
  Code,
  Globe,
  Database,
  Layout,
  BookOpen,
  ArrowUpRight,
  ShieldCheck,
  Zap
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('profil');
  const [loaded, setLoaded] = useState(false);

useEffect(() => {
  const id = requestAnimationFrame(() => {
    setLoaded(true);
  });
  return () => cancelAnimationFrame(id);
}, []);

  const sections = {
    profil: <ProfilContent />,
    proyek: <ProyekContent />,
    keahlian: <KeahlianContent />,
    pendidikan: <PendidikanContent />
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#a0a0a0] font-light selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* Cinematic Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-900/10 blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/10 blur-[150px] animate-pulse" style={{ animationDelay: '3s' }}></div>
        {/* Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      <div className={`relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row min-h-screen transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Left Sidebar - Fixed Info */}
        <aside className="w-full lg:w-[400px] p-8 lg:p-16 flex flex-col border-r border-white/5 bg-black/20 backdrop-blur-md">
          <div className="sticky top-16 space-y-12">
            
            {/* Identity */}
            <div className="space-y-6">
              <div className="relative inline-block">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-4xl font-bold text-white shadow-2xl">
                  RA
                </div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full border-4 border-[#050505] flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tight text-white leading-tight">
                  Rio Alghani <br />
                  <span className="text-[#666]">Pratama</span>
                </h1>
                <p className="text-sm tracking-[0.3em] uppercase text-blue-400 font-bold">
                  Sistem Informasi
                </p>
              </div>
            </div>

            {/* Navigation Menus */}
            <nav className="flex flex-col space-y-4">
              {Object.keys(sections).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`group flex items-center gap-4 text-left transition-all duration-300 ${activeTab === key ? 'text-white translate-x-4' : 'hover:text-white hover:translate-x-2'}`}
                >
                  <span className={`h-px transition-all duration-500 bg-white ${activeTab === key ? 'w-12' : 'w-4 group-hover:w-8'}`}></span>
                  <span className="text-xs uppercase tracking-[0.4em] font-black">{key}</span>
                </button>
              ))}
            </nav>

            {/* Contacts Footer */}
            <div className="pt-12 space-y-4 border-t border-white/5">
              <SidebarContact icon={<Globe size={16}/>} label="github" href="https://github.com/Rioalghanipratama" />
              <SidebarContact icon={<Mail size={16}/>} label="email" href="mailto:pratamagaming94@gmail.com" />
              <SidebarContact icon={<Phone size={16}/>} label="whatsapp" href="https://wa.me/6281390148362" />
            </div>
          </div>
        </aside>

        {/* Right Content Area */}
        <main className="flex-1 p-8 lg:p-24 overflow-y-auto">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
            {sections[activeTab]}
          </div>
        </main>
      </div>
    </div>
  );
}

// --- Page Components ---

function ProfilContent() {
  return (
    <div className="space-y-16">
      <header className="space-y-8">
        <h2 className="text-5xl lg:text-7xl font-bold text-white tracking-tighter leading-none">
          Membangun masa depan lewat <span className="text-blue-500 italic">data</span> & <span className="text-white/40">logika.</span>
        </h2>
        <p className="text-xl leading-relaxed text-[#888] font-light">
          Berbasis di Indonesia, saya mengkhususkan diri dalam pengembangan sistem informasi modern. Menggabungkan arsitektur database yang kuat dengan antarmuka web yang intuitif.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <StatBox icon={<ShieldCheck className="text-emerald-500"/>} title="Fokus" desc="Arsitektur Sistem" />
        <StatBox icon={<Zap className="text-yellow-500"/>} title="Metode" desc="Agile Development" />
      </div>
    </div>
  );
}

function ProyekContent() {
  return (
    <div className="space-y-12">
      <SectionHeader title="Karya Terpilih" subtitle="01" />
      <div className="space-y-24">
        <a 
          href="https://forma-pos.vercel.app/" 
          target="_blank" 
          rel="noreferrer" 
          className="group block cursor-pointer"
        >
          <div className="relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 aspect-video mb-8 transition-all duration-500 group-hover:border-blue-500/30">
            {/* Visual Placeholder for Forma POS */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-500/10 to-transparent">
              <span className="text-white/10 font-black text-8xl italic tracking-tighter uppercase group-hover:scale-110 transition-transform duration-700">FORMA</span>
            </div>
            
            {/* Project Badges */}
            <div className="absolute bottom-8 left-8">
               <div className="flex gap-2">
                 {['Next.js', 'Tailwind', 'Vercel'].map(t => (
                   <span key={t} className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-lg text-[10px] font-bold text-white/50 border border-white/5 uppercase tracking-widest">
                     {t}
                   </span>
                 ))}
               </div>
            </div>
          </div>
          
          <div className="flex justify-between items-end">
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">FORMA - Point of Sale</h3>
              <p className="text-[#888]">Platform POS (Kasir) modern yang dirancang untuk kecepatan, akurasi, dan skalabilitas bisnis retail.</p>
            </div>
            <ArrowUpRight className="text-white/20 group-hover:text-white group-hover:-translate-y-2 transition-all" size={32} />
          </div>
        </a>
      </div>
    </div>
  );
}

function KeahlianContent() {
  return (
    <div className="space-y-16">
      <SectionHeader title="Keahlian Teknik" subtitle="02" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
        <SkillGroup title="Frontend" skills={['HTML5', 'CSS3', 'JavaScript', 'React JS', 'Tailwind CSS']} />
        <SkillGroup title="Backend" skills={['PHP', 'MySQL', 'Database Design', 'REST API']} />
        <SkillGroup title="Tools" skills={['Git & Github', 'UI/UX Basics', 'Office', 'Vercel']} />
      </div>
    </div>
  );
}

function PendidikanContent() {
  return (
    <div className="space-y-16">
      <SectionHeader title="Riwayat Akademis" subtitle="03" />
      <div className="space-y-12">
        <EduItem 
          school="Universitas Komputama Majenang" 
          degree="S1 Sistem Informasi" 
          period="2024 — Sekarang" 
          current 
        />
        <EduItem 
          school="SMK Darussalam Karangpucung" 
          degree="Sekolah Menengah Kejuruan" 
          period="2020 — 2023" 
        />
      </div>
    </div>
  );
}

// --- Reusable UI Atoms ---

function SidebarContact({ icon, label, href }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="flex items-center gap-3 group text-[#666] hover:text-white transition-colors">
      <div className="p-2 bg-white/5 rounded-lg group-hover:bg-blue-500/20 transition-colors">{icon}</div>
      <span className="text-[10px] uppercase tracking-[0.3em] font-bold">{label}</span>
    </a>
  );
}

function SectionHeader({ title, subtitle }) {
  return (
    <div className="flex items-baseline gap-4 mb-12">
      <span className="text-sm font-black text-blue-500 tracking-tighter">{subtitle}</span>
      <h3 className="text-4xl font-bold text-white tracking-tight uppercase">{title}</h3>
    </div>
  );
}

function StatBox({ icon, title, desc }) {
  return (
    <div className="p-8 rounded-[2rem] bg-white/5 border border-white/5 hover:border-white/10 transition-all group">
      <div className="mb-4 transition-transform group-hover:scale-110 duration-500">{icon}</div>
      <h4 className="text-white font-bold text-lg">{title}</h4>
      <p className="text-sm text-[#666]">{desc}</p>
    </div>
  );
}

function SkillGroup({ title, skills }) {
  return (
    <div className="space-y-6">
      <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white/30 border-b border-white/5 pb-2">{title}</h4>
      <div className="flex flex-wrap gap-3">
        {skills.map(s => (
          <span key={s} className="text-sm text-white hover:text-blue-400 cursor-default transition-colors">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function EduItem({ school, degree, period, current }) {
  return (
    <div className="relative pl-8 border-l border-white/5 group">
      <div className={`absolute -left-1 top-0 w-2 h-2 rounded-full ${current ? 'bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 'bg-white/20'}`}></div>
      <div className="space-y-1">
        <span className="text-[10px] font-bold text-blue-500 tracking-widest uppercase">{period}</span>
        <h4 className="text-xl font-bold text-white">{school}</h4>
        <p className="text-[#666] text-sm">{degree}</p>
      </div>
    </div>
  );
}