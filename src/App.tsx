import { useState } from "react";

/* ─────────────────────────────────────────────
   NAVBAR
───────────────────────────────────────────── */
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center text-white font-black text-xs border-2 border-yellow-400">
              18
            </div>
          </div>
          <span className="text-yellow-400 font-black text-xl tracking-wider ml-1 uppercase" style={{ fontFamily: "Impact, Arial Black, sans-serif", textShadow: "0 0 10px rgba(255,200,0,0.4)" }}>
            B<span className="text-red-500">Ö</span>T
            <span className="text-white">LEAGUE</span>
          </span>
        </div>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-white">
          {["Events", "Programs", "Community", "Ranks"].map((item, i) => (
            <a key={item} href="#" className={`hover:text-yellow-400 transition-colors pb-0.5 ${i === 0 ? "border-b-2 border-red-500 text-white" : ""}`}>
              {item}
            </a>
          ))}
        </div>

        {/* Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button className="text-sm font-bold text-white border border-white/40 px-5 py-1.5 rounded hover:border-white transition-all">
            LOGIN
          </button>
          <button className="text-sm font-black text-white bg-red-600 px-5 py-1.5 rounded hover:bg-red-500 transition-all uppercase tracking-wide">
            REGISTER NOW
          </button>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-black border-t border-white/10 px-4 pb-4 pt-2 flex flex-col gap-3 text-sm text-white">
          {["Events", "Programs", "Community", "Ranks"].map((item) => (
            <a key={item} href="#" className="hover:text-yellow-400 py-1">{item}</a>
          ))}
          <button className="mt-1 w-full bg-red-600 text-white font-black py-2 rounded uppercase">REGISTER NOW</button>
        </div>
      )}
    </nav>
  );
}

/* ─────────────────────────────────────────────
   HERO
───────────────────────────────────────────── */
function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-14"
      style={{ background: "linear-gradient(to right, #000000 35%, #1a0505 65%, #0d0010 100%)" }}
    >
      {/* Arena image placeholder — dark gradient bg with dramatic lighting feel */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 70% 50%, rgba(180,30,30,0.18) 0%, rgba(80,20,180,0.10) 40%, rgba(0,0,0,0.0) 70%)",
        }}
      />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Live badge */}
      <div className="absolute top-20 right-6 flex items-center gap-2 bg-black/70 px-3 py-1.5 rounded text-xs font-bold">
        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
        <span className="text-red-400">LIVE</span>
        <span className="text-white/60">: Episode 14 · Bengaluru Regionals</span>
        <span className="text-yellow-400 font-black cursor-pointer hover:underline">WATCH LIVE</span>
      </div>

      {/* Robots visual area (right side artistic element) */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 flex items-center justify-center overflow-hidden">
        {/* Arena floor */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{ background: "linear-gradient(to top, rgba(100,20,0,0.3), transparent)" }}
        />
        {/* Spotlight circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #ff4400, transparent 70%)" }} />
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #4444ff, transparent 70%)" }} />

        {/* Robot placeholder cards */}
        <div className="relative flex items-end gap-4 pb-16">
          {/* Robot 1 */}
          <div className="relative">
            <div
              className="w-36 h-24 rounded-lg flex items-end justify-center"
              style={{
                background: "linear-gradient(135deg, #1a3a6a 0%, #0a1a40 100%)",
                boxShadow: "0 0 30px rgba(30,100,255,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
                transform: "perspective(400px) rotateY(-5deg)",
              }}
            >
              <div className="text-center pb-2">
                <div className="text-blue-300 font-black text-xs tracking-widest">ARES</div>
                <div className="w-16 h-6 rounded bg-blue-800/60 mx-auto mt-1 flex items-center justify-center">
                  <div className="w-12 h-3 rounded-sm bg-blue-400/40" />
                </div>
              </div>
              {/* Wheel details */}
              <div className="absolute bottom-0 left-2 right-2 flex justify-between">
                <div className="w-5 h-5 rounded-full border-2 border-blue-400/50 bg-blue-900" />
                <div className="w-5 h-5 rounded-full border-2 border-blue-400/50 bg-blue-900" />
              </div>
            </div>
            <div className="text-center text-blue-300 text-[10px] font-bold mt-1 tracking-widest">ARES</div>
          </div>

          {/* Sparks */}
          <div className="flex flex-col items-center gap-1 pb-8">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-0.5 h-3 bg-yellow-400 opacity-80"
                style={{ transform: `rotate(${(i - 2) * 20}deg)`, animationDelay: `${i * 0.1}s` }} />
            ))}
          </div>

          {/* Robot 2 */}
          <div className="relative">
            <div
              className="w-32 h-20 rounded-lg flex items-end justify-center"
              style={{
                background: "linear-gradient(135deg, #2a1a0a 0%, #1a0a00 100%)",
                boxShadow: "0 0 30px rgba(200,100,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
                transform: "perspective(400px) rotateY(5deg)",
              }}
            >
              <div className="absolute bottom-0 left-0 right-0 flex justify-between px-1">
                <div className="w-7 h-5 rounded bg-gray-700/80 border border-gray-600" />
                <div className="w-7 h-5 rounded bg-gray-700/80 border border-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Left content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-xl">
          <h1
            className="text-5xl md:text-6xl font-black text-white leading-[1.05] uppercase"
            style={{ fontFamily: "Impact, Arial Black, sans-serif", letterSpacing: "0.02em" }}
          >
            INDIA'S ULTIMATE<br />
            ROBOTICS ARENA
          </h1>
          <p className="mt-4 text-gray-300 text-base font-medium">
            Build.Compete.Rank.The National<br />Ecosystem for Robotics Arena
          </p>
          <div className="mt-8 flex gap-4">
            <button className="bg-red-600 text-white font-black text-sm px-7 py-3 rounded uppercase tracking-wider hover:bg-red-500 transition-all">
              CREATE ACCOUNT
            </button>
            <button className="bg-transparent text-white font-black text-sm px-7 py-3 rounded uppercase tracking-wider border border-white/40 hover:border-white transition-all">
              EXPLORE EVENTS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   COMPETITIONS & EVENTS
───────────────────────────────────────────── */
function BracketTeam({ name = "" }: { name?: string }) {
  return (
    <div className="bg-[#2a2a2a] rounded px-3 py-1.5 text-gray-300 text-xs font-medium w-28 truncate">
      {name || ""}
    </div>
  );
}

function CompetitionsSection() {
  return (
    <section className="bg-[#0d0d0d] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-black text-white uppercase mb-10 tracking-wider"
          style={{ fontFamily: "Impact, Arial Black, sans-serif" }}>
          COMPETITIONS &amp; EVENTS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* LIVE NOW */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-red-500 font-black text-xs uppercase tracking-widest">LIVE NOW</span>
            </div>
            <div className="bg-[#1a1a1a] border border-white/10 rounded-xl p-5">
              <div className="flex items-center justify-between mb-1">
                <div>
                  <p className="text-white font-black text-lg">Bengaluru Regionals</p>
                  <p className="text-gray-500 text-xs">Lorem Ipsum</p>
                </div>
                <span className="bg-red-600/20 text-red-400 border border-red-600/40 text-[10px] font-bold px-2 py-0.5 rounded">
                  Ongoing
                </span>
              </div>
              <div className="mt-5 border-t border-white/5 pt-4">
                {/* Tournament bracket */}
                <div className="flex gap-3 items-center">
                  {/* Round 1 */}
                  <div className="flex flex-col gap-3">
                    <BracketTeam />
                    <BracketTeam />
                    <BracketTeam />
                    <BracketTeam />
                  </div>
                  {/* Connectors */}
                  <div className="flex flex-col justify-around h-[100px]">
                    <div className="w-3 border-t border-r border-b border-red-600/60 h-[46px] rounded-r" />
                    <div className="w-3 border-t border-r border-b border-red-600/60 h-[46px] rounded-r" />
                  </div>
                  {/* Round 2 */}
                  <div className="flex flex-col justify-around gap-6">
                    <BracketTeam />
                    <BracketTeam />
                  </div>
                  {/* Connector */}
                  <div className="w-3 border-t border-r border-b border-red-600/60 h-[72px] rounded-r" />
                  {/* Final */}
                  <BracketTeam />
                </div>
              </div>
            </div>
          </div>

          {/* UPCOMING */}
          <div>
            <p className="text-white font-black text-xs uppercase tracking-widest mb-4">UPCOMING</p>
            <div className="flex flex-col gap-4">
              {[
                { city: "Mumbai", date: "11/11/25", loc: "BKC", cat: "Lorem" },
                { city: "Delhi", date: "11/11/25", loc: "BKC", cat: "Lorem" },
              ].map((ev, i) => (
                <div key={i} className="bg-[#1a1a1a] border border-white/10 rounded-xl p-4">
                  <p className="text-white font-black text-base mb-3">Event in {ev.city}</p>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div>
                      <p className="text-gray-500 text-[10px]">Date</p>
                      <p className="text-white text-xs font-semibold">{ev.date}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-[10px]">Location</p>
                      <p className="text-white text-xs font-semibold">{ev.loc}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-[10px]">Category</p>
                      <p className="text-white text-xs font-semibold">{ev.cat}</p>
                    </div>
                  </div>
                  <button className="w-full bg-red-600 text-white font-black text-xs py-2.5 rounded uppercase tracking-widest hover:bg-red-500 transition-all">
                    REGISTER
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* PAST RESULTS */}
          <div>
            <p className="text-white font-black text-xs uppercase tracking-widest mb-4">PAST RESULTS</p>
            <div className="flex flex-col gap-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-[#1a1a1a] border border-white/10 rounded-xl p-4">
                  <p className="text-white font-black text-base">Bengaluru Regionals</p>
                  <p className="text-gray-500 text-xs mt-1">Lorem Ipsum</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PATH TO THE LEAGUE
───────────────────────────────────────────── */
function PathSection() {
  const steps = [
    { icon: "⚙️", step: "STEP 1", label: "BUILD YOUR\nTEAM" },
    { icon: "🏛️", step: "STEP 2", label: "COMPETE ACROSS\nINDIA" },
    { icon: "🏆", step: "STEP 3", label: "EARN NATIONAL\nRANKING & VALUE" },
    { icon: "👥", step: "STEP 4", label: "JOIN THE\nLEAGUE" },
  ];

  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-red-500 font-black text-xs uppercase tracking-[0.3em] mb-3">USER JOURNEY</p>
        <h2
          className="text-4xl font-black text-white uppercase tracking-wider mb-3"
          style={{ fontFamily: "Impact, Arial Black, sans-serif" }}
        >
          YOUR PATH TO THE LEAGUE
        </h2>
        <p className="text-gray-500 text-sm mb-16">Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>

        <div className="relative flex justify-center items-start gap-0">
          {/* Connector line behind circles */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-blue-700/80"
            style={{ zIndex: 0 }} />

          {steps.map((s, i) => (
            <div key={i} className="relative flex flex-col items-center flex-1 max-w-[180px]" style={{ zIndex: 1 }}>
              {/* Circle */}
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center text-3xl mb-4"
                style={{
                  background: "radial-gradient(circle, #1a1a1a 60%, #111 100%)",
                  border: "2px solid #2244aa",
                  boxShadow: "0 0 0 4px rgba(30,60,180,0.2), 0 0 20px rgba(30,60,180,0.3)",
                }}
              >
                {s.icon}
              </div>
              <p className="text-red-500 font-black text-[11px] tracking-widest mb-2">{s.step}</p>
              <p className="text-white font-black text-sm uppercase text-center leading-tight whitespace-pre-line"
                style={{ fontFamily: "Impact, Arial Black, sans-serif" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   WHAT IS BOTLEAGUE
───────────────────────────────────────────── */
function WhatIsSection() {
  const items = [
    { n: "1.", title: "STRUCTURED EVENTS", desc: '"From one-off events to a year-round competitive season."' },
    { n: "2.", title: "DIGITAL IDENTITY", desc: '"Your professional robotics legacy, tracked and verified."' },
    { n: "3.", title: "NATIONAL RANKING", desc: '"Benchmark your skills against the best engineers in India."' },
    { n: "4.", title: "CAREER PATHWAY", desc: '"Turning arena victories into real-world industry opportunities."' },
  ];

  return (
    <section className="bg-[#111] py-20">
      <div className="max-w-7xl mx-auto px-6 flex gap-10">
        <div className="flex-1">
          <h2
            className="text-4xl font-black text-white uppercase mb-10 tracking-wider"
            style={{ fontFamily: "Impact, Arial Black, sans-serif" }}
          >
            WHAT IS BOTLEAGUE?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {items.map((item, i) => (
              <div key={i}>
                <p className="text-red-500 font-black text-xl mb-1">{item.n}</p>
                <h3 className="text-white font-black text-base uppercase tracking-wide mb-2"
                  style={{ fontFamily: "Impact, Arial Black, sans-serif" }}>
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Right side: circuit/gear illustration */}
        <div className="hidden md:flex items-center justify-center w-56 flex-shrink-0">
          <div className="relative w-48 h-48 opacity-30">
            {/* Decorative circuit art */}
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <circle cx="100" cy="100" r="40" stroke="white" strokeWidth="1.5" />
              <circle cx="100" cy="100" r="28" stroke="white" strokeWidth="1" />
              <circle cx="60" cy="60" r="16" stroke="white" strokeWidth="1.5" />
              <circle cx="140" cy="60" r="12" stroke="white" strokeWidth="1.5" />
              <circle cx="60" cy="140" r="18" stroke="white" strokeWidth="1.5" />
              <circle cx="140" cy="140" r="14" stroke="white" strokeWidth="1" />
              <line x1="76" y1="100" x2="44" y2="100" stroke="white" strokeWidth="1" />
              <line x1="124" y1="100" x2="156" y2="100" stroke="white" strokeWidth="1" />
              <line x1="100" y1="76" x2="100" y2="44" stroke="white" strokeWidth="1" />
              <line x1="100" y1="124" x2="100" y2="156" stroke="white" strokeWidth="1" />
              <rect x="90" y="90" width="20" height="20" stroke="white" strokeWidth="1" />
              <text x="96" y="104" fill="white" fontSize="8" fontWeight="bold">A+</text>
              <circle cx="44" cy="100" r="4" fill="white" opacity="0.6" />
              <circle cx="156" cy="100" r="4" fill="white" opacity="0.6" />
              <circle cx="100" cy="44" r="4" fill="white" opacity="0.6" />
              <circle cx="100" cy="156" r="4" fill="white" opacity="0.6" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   CATEGORIES
───────────────────────────────────────────── */
function CategoriesSection() {
  const cats = [
    {
      icon: (
        <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
          <circle cx="20" cy="20" r="18" stroke="#f5c518" strokeWidth="2" />
          <circle cx="20" cy="20" r="10" stroke="#f5c518" strokeWidth="2" />
          <circle cx="20" cy="20" r="4" fill="#f5c518" />
          <path d="M20 2 L20 8 M20 32 L20 38 M2 20 L8 20 M32 20 L38 20" stroke="#f5c518" strokeWidth="2" />
        </svg>
      ),
      label: "MINI\nMAKERS", desc: "Where Creativity Meets Logic.", active: true
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
          <circle cx="20" cy="14" r="8" stroke="#f5c518" strokeWidth="2" />
          <path d="M10 36 C10 28 30 28 30 36" stroke="#f5c518" strokeWidth="2" />
          <path d="M14 10 L20 6 L26 10" stroke="#f5c518" strokeWidth="1.5" />
          <circle cx="20" cy="6" r="2" fill="#f5c518" />
        </svg>
      ),
      label: "JUNIOR\nINNOVATORS", desc: "Engineering & Strategy Fundamentals.", active: false
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
          <circle cx="20" cy="14" r="7" stroke="#f5c518" strokeWidth="2" />
          <path d="M10 36 C10 28 30 28 30 36" stroke="#f5c518" strokeWidth="2" />
          <circle cx="28" cy="10" r="5" stroke="#f5c518" strokeWidth="1.5" />
          <path d="M26 8 L30 8 M28 6 L28 10 M26 12 L30 12" stroke="#f5c518" strokeWidth="1.2" />
        </svg>
      ),
      label: "YOUNG\nENGINEERS", desc: "Advanced Wireless & Autonomous Control.", active: false
    },
    {
      icon: (
        <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
          <circle cx="20" cy="14" r="8" stroke="#f5c518" strokeWidth="2" />
          <circle cx="20" cy="14" r="3" fill="#f5c518" />
          <path d="M10 36 C10 28 30 28 30 36" stroke="#f5c518" strokeWidth="2" />
          <circle cx="30" cy="18" r="6" stroke="#f5c518" strokeWidth="1.5" />
          <path d="M28 16 L32 16 M30 14 L30 18 M28 20 L32 20" stroke="#f5c518" strokeWidth="1" />
        </svg>
      ),
      label: "ROBO\nMINDS", desc: "Elite Professional Sports & Robotics.", active: false
    },
  ];

  return (
    <section className="bg-[#0d0d0d] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="text-4xl font-black text-white uppercase mb-8 tracking-wider"
          style={{ fontFamily: "Impact, Arial Black, sans-serif" }}
        >
          CATEGORIES
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {cats.map((c, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 flex flex-col justify-between min-h-[200px] cursor-pointer transition-all group
                ${c.active
                  ? "bg-[#2a2000] border-2 border-yellow-500/60"
                  : "bg-[#1a1a1a] border border-white/10 hover:border-yellow-500/30"}`}
            >
              <div className="mb-4">{c.icon}</div>
              <div>
                <h3
                  className="text-white font-black text-lg uppercase leading-tight whitespace-pre-line mb-2"
                  style={{ fontFamily: "Impact, Arial Black, sans-serif" }}
                >
                  {c.label}
                </h3>
                <p className="text-gray-400 text-xs mb-4">{c.desc}</p>
                <button className="text-red-500 font-black text-xs uppercase tracking-wider hover:text-red-400 transition-colors flex items-center gap-1">
                  LEARN MORE <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   COMPETITION DISCIPLINES
───────────────────────────────────────────── */
const DISCIPLINE_BG: Record<string, string> = {
  "Robo Race": "linear-gradient(135deg, #1a1000 0%, #0d0800 100%)",
  "Line Follower": "linear-gradient(135deg, #0a1a0a 0%, #0a1400 100%)",
  "RC Racing": "linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)",
  "FPV Drone Racing & Aeromodelling": "linear-gradient(135deg, #0a0a1a 0%, #050510 100%)",
  "Robo Hockey": "linear-gradient(135deg, #0a001a 0%, #060010 100%)",
  "Robo War": "linear-gradient(135deg, #001a0a 0%, #000d06 100%)",
};

const DISC_EMOJIS: Record<string, string> = {
  "Robo Race": "🤖",
  "Line Follower": "🦾",
  "RC Racing": "🚗",
  "FPV Drone Racing & Aeromodelling": "🚁",
  "Robo Hockey": "🏒",
  "Robo War": "⚔️",
};

function DisciplinesSection() {
  const row1 = ["Robo Race", "Line Follower", "RC Racing", "FPV Drone Racing & Aeromodelling"];
  const row2 = ["Robo Hockey", "Robo War"];

  return (
    <section
      className="py-16"
      style={{ background: "radial-gradient(ellipse at 70% 80%, rgba(0,60,20,0.15) 0%, #080808 60%)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-red-500 font-black text-xs uppercase tracking-widest mb-1">SPORTS</p>
        <h2
          className="text-4xl font-black text-white uppercase mb-8 tracking-wider"
          style={{ fontFamily: "Impact, Arial Black, sans-serif" }}
        >
          COMPETITION DISCIPLINES
        </h2>

        {/* Row 1 — 4 cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
          {row1.map((name, i) => (
            <DisciplineCard key={i} name={name} highlighted={false} />
          ))}
        </div>

        {/* Row 2 — 2 cards + circuit art */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {row2.map((name, i) => (
            <DisciplineCard key={i} name={name} highlighted={name === "Robo War"} />
          ))}
          {/* Circuit art */}
          <div className="col-span-0 md:col-span-2 hidden md:flex items-center justify-center opacity-20">
            <svg viewBox="0 0 400 200" className="w-full h-full" fill="none">
              <rect x="10" y="10" width="380" height="180" rx="4" stroke="lime" strokeWidth="0.5" />
              {[40, 80, 120, 160, 200, 240, 280, 320, 360].map((x) => (
                <line key={x} x1={x} y1="10" x2={x} y2="190" stroke="lime" strokeWidth="0.3" opacity="0.5" />
              ))}
              {[40, 80, 120, 160].map((y) => (
                <line key={y} x1="10" y1={y} x2="390" y2={y} stroke="lime" strokeWidth="0.3" opacity="0.5" />
              ))}
              {[60, 120, 180, 240, 300].map((x) => (
                <circle key={x} cx={x} cy={100} r="3" fill="lime" opacity="0.6" />
              ))}
              <path d="M20 100 L60 100 L80 60 L120 60 L140 100 L200 100 L220 140 L260 140 L280 100 L380 100" stroke="lime" strokeWidth="1" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

function DisciplineCard({ name, highlighted }: { name: string; highlighted: boolean }) {
  return (
    <div
      className={`relative rounded-xl overflow-hidden h-44 flex flex-col justify-end p-4 cursor-pointer transition-all group
        ${highlighted ? "border-2 border-green-500" : "border border-white/10 hover:border-white/30"}`}
      style={{ background: DISCIPLINE_BG[name] || "#111" }}
    >
      {/* BG emoji decoration */}
      <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-10 group-hover:opacity-20 transition-all select-none">
        {DISC_EMOJIS[name]}
      </div>
      {/* Gradient overlay */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%)" }} />
      <p className="relative z-10 text-white font-bold text-sm">{name}</p>
    </div>
  );
}

/* ─────────────────────────────────────────────
   WHY REGISTER — LEAGUE ADVANTAGE
───────────────────────────────────────────── */
function WhyRegisterSection() {
  const advantages = [
    {
      icon: (
        <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
          <circle cx="16" cy="16" r="12" stroke="#ef4444" strokeWidth="1.5" />
          <path d="M16 8 L18 13 L24 13 L19 17 L21 23 L16 19 L11 23 L13 17 L8 13 L14 13 Z" fill="#ef4444" />
        </svg>
      ),
      title: "NATIONAL RECOGNITION",
      desc: '"Benchmark your skills on India\'s official robotics leaderboard."',
    },
    {
      icon: (
        <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
          <path d="M6 10 L26 10 L22 24 L10 24 Z" stroke="#ef4444" strokeWidth="1.5" />
          <path d="M16 6 L18 10 M14 6 L12 10" stroke="#ef4444" strokeWidth="1.5" />
        </svg>
      ),
      title: "FAIR JUDGING",
      desc: '"Compete with confidence under standardized, expert-led evaluation."',
    },
    {
      icon: (
        <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
          <rect x="4" y="12" width="24" height="16" rx="2" stroke="#ef4444" strokeWidth="1.5" />
          <path d="M10 12 V10 C10 7 22 7 22 10 V12" stroke="#ef4444" strokeWidth="1.5" />
          <rect x="13" y="18" width="6" height="4" rx="1" stroke="#ef4444" strokeWidth="1" />
        </svg>
      ),
      title: "CAREER OPS",
      desc: '"Bridge the gap between arena victories and top-tier tech placements."',
    },
    {
      icon: (
        <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none">
          <path d="M16 4 L16 12 M16 20 L16 28 M10 8 L20 16 L10 24" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      title: "HIGH - ENERGY ECO",
      desc: '"Join a nationwide community of elite innovators and robotics athletes."',
    },
  ];

  const leaderboard = [
    { rank: "01", name: "Player Name", pts: 508754, top: true },
    { rank: "02", name: "Player Name", pts: 22000 },
    { rank: "03", name: "Player Name", pts: 20030 },
    { rank: "04", name: "Player Name", pts: 19500 },
    { rank: "05", name: "Player Name", pts: 15060 },
    { rank: "06", name: "Player Name", pts: 13865 },
    { rank: "07", name: "Player Name", pts: 10954 },
    { rank: "08", name: "Player Name", pts: 9057 },
  ];

  return (
    <section className="bg-[#0a0a0a] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-red-500 font-black text-xs uppercase tracking-widest mb-1">WHY REGISTER ?</p>
        <h2
          className="text-4xl font-black text-white uppercase mb-10 tracking-wider"
          style={{ fontFamily: "Impact, Arial Black, sans-serif" }}
        >
          THE LEAGUE ADVANTAGE
        </h2>
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left: advantages */}
          <div className="flex-1 flex flex-col gap-7">
            {advantages.map((a, i) => (
              <div key={i} className="flex items-start gap-5">
                <div className="flex-shrink-0 mt-0.5">{a.icon}</div>
                <div>
                  <h3 className="text-white font-black text-base uppercase tracking-wide mb-1"
                    style={{ fontFamily: "Impact, Arial Black, sans-serif" }}>
                    {a.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: leaderboard card */}
          <div className="flex-shrink-0 w-full md:w-72">
            <div
              className="rounded-2xl p-5 border border-white/10"
              style={{
                background: "linear-gradient(160deg, #0d1a2a 0%, #0a0f1a 100%)",
                boxShadow: "inset 0 0 60px rgba(0,100,200,0.05)",
              }}
            >
              {/* Circuit dots decoration */}
              <div className="flex justify-between mb-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-400/40" />
                ))}
              </div>
              <p className="text-white font-black text-center text-xs uppercase tracking-widest mb-4">LEADERBOARD</p>

              {/* Top player */}
              <div className="text-center mb-5">
                <div className="w-14 h-14 rounded-full bg-yellow-500/20 border-2 border-yellow-500/50 flex items-center justify-center mx-auto mb-2">
                  <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
                    <circle cx="20" cy="16" r="8" stroke="#f5c518" strokeWidth="2" />
                    <path d="M6 38 C6 28 34 28 34 38" stroke="#f5c518" strokeWidth="2" />
                    <path d="M28 8 L32 4 L30 9 L36 8 L32 12 L34 18 L28 14 Z" fill="#f5c518" />
                  </svg>
                </div>
                <p className="text-gray-400 text-[10px] mb-1">#01 · Player Name</p>
                <p className="text-yellow-400 font-black text-3xl tracking-wider">508754</p>
              </div>

              {/* Other rows */}
              <div className="space-y-2">
                {leaderboard.slice(1).map((p, i) => (
                  <div key={i} className="flex items-center gap-2 bg-[#0d1a2a]/80 rounded-lg px-3 py-2 border border-white/5">
                    <span className="text-gray-500 text-[10px] font-bold w-4">{p.rank}</span>
                    <div className="w-6 h-6 rounded-full bg-pink-500/20 border border-pink-500/30 flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 20 20" className="w-3 h-3" fill="none">
                        <circle cx="10" cy="8" r="4" stroke="#ec4899" strokeWidth="1.5" />
                        <path d="M3 19 C3 14 17 14 17 19" stroke="#ec4899" strokeWidth="1.5" />
                      </svg>
                    </div>
                    <span className="text-white text-xs flex-1">{p.name}</span>
                    <span className="text-gray-400 text-[10px]">{p.pts.toLocaleString()}</span>
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-blue-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   JOIN THE ECOSYSTEM
───────────────────────────────────────────── */
function JoinSection() {
  const roles = ["BECOME IN JUDGE", "VOLUNTEER", "COMMUNITY MEMBER"];

  return (
    <section className="bg-[#050505] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="text-4xl font-black text-white uppercase mb-10 tracking-wider"
          style={{ fontFamily: "Impact, Arial Black, sans-serif" }}
        >
          JOIN THE ECOSYSTEM
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {roles.map((role, i) => (
            <div key={i} className="bg-[#141414] border border-white/10 rounded-2xl p-6">
              <h3
                className="text-white font-black text-sm uppercase tracking-widest mb-5"
                style={{ fontFamily: "Impact, Arial Black, sans-serif" }}
              >
                {role}
              </h3>
              <div className="flex flex-col gap-3 mb-5">
                {["Name", "Location", "Enroll"].map((field) => (
                  <input
                    key={field}
                    type="text"
                    placeholder={field}
                    className="w-full bg-[#1e1e1e] border border-white/10 text-gray-400 text-sm px-4 py-2.5 rounded-lg focus:outline-none focus:border-red-500/50 placeholder-gray-600 transition-colors"
                  />
                ))}
              </div>
              <button className="w-full bg-red-600 text-white font-black text-sm py-3 rounded-lg uppercase tracking-widest hover:bg-red-500 transition-all">
                SIGN UP
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SPONSORS
───────────────────────────────────────────── */
function SponsorsSection() {
  const sponsors = [
    { name: "NIT DELHI", highlighted: false },
    { name: "INDIAN BIT", highlighted: false },
    { name: "NIT SILCHAR", highlighted: true },
    { name: "ROBO COMPANY", highlighted: false },
    { name: "IIT BOMBAY", highlighted: false },
    { name: "ROBO COMPANY", highlighted: false },
  ];

  return (
    <section className="bg-[#050505] pt-4 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="text-white font-black text-xl uppercase tracking-widest mb-8"
          style={{ fontFamily: "Impact, Arial Black, sans-serif" }}
        >
          SPONSORS
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 mb-12">
          {sponsors.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-2 group cursor-pointer">
              <div
                className={`w-16 h-16 rounded-lg flex items-center justify-center transition-all
                  ${s.highlighted
                    ? "border-2 border-green-500 bg-black"
                    : "border border-white/15 bg-[#111] group-hover:border-white/30"}`}
              >
                <svg viewBox="0 0 48 48" className="w-10 h-10 opacity-60 group-hover:opacity-90 transition-all" fill="none">
                  <circle cx="24" cy="24" r="18" stroke="white" strokeWidth="1.5" />
                  <circle cx="24" cy="24" r="8" stroke="white" strokeWidth="1" />
                  <path d="M6 24 L18 24 M30 24 L42 24 M24 6 L24 18 M24 30 L24 42" stroke="white" strokeWidth="1" />
                  <path d="M10 10 L16 16 M32 32 L38 38 M10 38 L16 32 M32 16 L38 10" stroke="white" strokeWidth="0.8" />
                </svg>
              </div>
              <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wide text-center group-hover:text-white transition-colors">
                {s.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────── */
function Footer() {
  const leftLinks = ["The Arena", "Episodes", "National Rankings", "Programs", "Rulebooks"];
  const rightLinks = ["Join the Team", "Sponsorships", "Help Center", "Contact Us", "Legal"];

  return (
    <footer className="bg-[#050505] border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-widest mb-5">QUICK LINKS</h4>
            <div className="flex gap-12">
              <div className="flex flex-col gap-2">
                {leftLinks.map((l) => (
                  <a key={l} href="#" className="text-gray-400 text-sm hover:text-white transition-colors">{l}</a>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                {rightLinks.map((l) => (
                  <a key={l} href="#" className="text-gray-400 text-sm hover:text-white transition-colors">{l}</a>
                ))}
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-widest mb-5">SOCIAL MEDIA</h4>
            <div className="flex gap-4">
              {/* YouTube */}
              <a href="#" className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-red-500 hover:text-red-500 transition-all">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-pink-500 hover:text-pink-500 transition-all">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.2 4.8 1.7 5 5 .1 1.3.1 1.6.1 4.8 0 3.2 0 3.6-.1 4.8-.2 3.3-1.7 4.8-5 5-1.3.1-1.6.1-4.9.1-3.2 0-3.6 0-4.8-.1-3.3-.2-4.8-1.7-5-5C2.2 15.6 2.2 15.3 2.2 12c0-3.2 0-3.6.1-4.8.2-3.3 1.7-4.8 5-5 1.2-.1 1.6-.1 4.7-.1zM12 0C8.7 0 8.3 0 7.1.1 2.7.3.3 2.7.1 7.1 0 8.3 0 8.7 0 12c0 3.3 0 3.7.1 4.9.2 4.4 2.6 6.8 7 7C8.3 24 8.7 24 12 24c3.3 0 3.7 0 4.9-.1 4.4-.2 6.8-2.6 7-7 .1-1.2.1-1.6.1-4.9 0-3.3 0-3.7-.1-4.9C23.7 2.7 21.3.3 16.9.1 15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4A6.2 6.2 0 0 0 12 5.8zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.8a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z" />
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-blue-500 hover:text-blue-500 transition-all">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M24 12.1C24 5.4 18.6 0 12 0S0 5.4 0 12.1C0 18.1 4.4 23.1 10.1 24v-8.4H7.1v-3.5h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-1.9.9-1.9 1.9v2.2h3.3l-.5 3.5h-2.7V24C19.6 23.1 24 18.1 24 12.1z" />
                </svg>
              </a>
              {/* Twitter/X */}
              <a href="#" className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-sky-400 hover:text-sky-400 transition-all">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M18.2 2h3.5L14.2 10.5 23 22h-7L10.9 15 4.4 22H.9l8-9L.5 2h7.2l4.6 6.1L18.2 2zM17 20h1.9L7.1 4H5L17 20z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────
   APP ROOT
───────────────────────────────────────────── */
export default function App() {
  return (
    <div className="min-h-screen bg-black" style={{ fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif" }}>
      <Navbar />
      <main>
        <Hero />
        <CompetitionsSection />
        <PathSection />
        <WhatIsSection />
        <CategoriesSection />
        <DisciplinesSection />
        <WhyRegisterSection />
        <JoinSection />
        <SponsorsSection />
      </main>
      <Footer />
    </div>
  );
}
