import { motion } from "framer-motion";
import { ArrowRight, Check, ClipboardList, HeartPulse, Layers3, Sparkles, Timer, UserRound } from "lucide-react";
import { ClinicalHoursLogo } from "@/components/ClinicalHoursLogo";
import { useNavigate } from "react-router";

const features = [
  { icon: ClipboardList, title: "Experience tracking", text: "Keep every clinic, shadowing, research, and service experience in one calm home." },
  { icon: Timer, title: "Hour tracking", text: "Log sessions in minutes and let Clinical Hours calculate totals accurately." },
  { icon: Sparkles, title: "Reflection journal", text: "Capture what you noticed, learned, and how each experience shaped you." },
  { icon: Layers3, title: "Professional summary", text: "Turn your real experience into an application-ready snapshot whenever you need it." },
];

export default function Landing() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen overflow-hidden bg-[#edf8f7] text-[#18364a]">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <button onClick={() => navigate("/")} className="flex items-center gap-3 text-left">
          <ClinicalHoursLogo />
        </button>
        <div className="flex items-center gap-3"><button onClick={() => navigate("/auth")} className="hidden rounded-xl px-4 py-2 text-sm font-semibold text-[#2f6178] sm:block">Sign in</button><button onClick={() => navigate("/auth?mode=signup")} className="clay-button rounded-xl bg-[#2f7da7] px-5 py-3 text-sm font-bold text-white">Get started <ArrowRight className="ml-1 inline size-4" /></button></div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 pb-24 pt-12 lg:grid-cols-[1.02fr_.98fr] lg:px-10 lg:pt-20">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="max-w-xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#d7efea] px-4 py-2 text-xs font-bold text-[#28756e] clay-soft"><span className="size-2 rounded-full bg-[#55ad91]" /> Made for the next generation of healthcare leaders</div>
            <h1 className="text-5xl font-black leading-[1.04] tracking-[-.045em] text-[#16384d] sm:text-7xl">Your healthcare journey, <span className="text-[#2f7da7]">organized.</span></h1>
            <p className="mt-7 max-w-lg text-lg leading-8 text-[#5c7d8b]">Track clinical hours, shadowing, volunteering, research, and healthcare experiences in one place.</p>
            <div className="mt-9 flex flex-wrap gap-3"><button onClick={() => navigate("/auth?mode=signup")} className="clay-button rounded-2xl bg-[#2f7da7] px-6 py-4 font-bold text-white">Start tracking free <ArrowRight className="ml-2 inline size-4" /></button><a href="#features" className="rounded-2xl bg-white/65 px-6 py-4 font-bold text-[#37677b] clay-soft">Explore features</a></div>
            <div className="mt-8 flex flex-wrap gap-5 text-sm text-[#638392]"><span><Check className="mr-1 inline size-4 text-[#4ca88b]" /> No subscriptions</span><span><Check className="mr-1 inline size-4 text-[#4ca88b]" /> Stays in your browser</span></div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: .95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .15 }} className="relative">
            <div className="absolute -right-6 -top-10 size-28 rounded-full bg-[#d5f0e7] blur-2xl" /><div className="absolute -bottom-10 -left-10 size-36 rounded-full bg-[#cfe7f4] blur-2xl" />
            <div className="relative rounded-[2.3rem] bg-[#e9f5f4] p-5 clay"><div className="mb-4 flex items-center justify-between"><div><p className="text-xs font-semibold text-[#70909a]">Tuesday, September 19</p><h3 className="mt-1 text-xl font-black">Good morning, Alex <span>✦</span></h3></div><div className="flex size-10 items-center justify-center rounded-full bg-[#cae6e1] text-sm font-bold text-[#27796e]">AM</div></div><div className="grid grid-cols-3 gap-3"><div className="rounded-2xl bg-[#2f7da7] p-4 text-white clay-soft"><p className="text-[10px] font-bold uppercase opacity-75">Total hours</p><p className="mt-2 text-2xl font-black">174.5</p><p className="mt-1 text-[10px] opacity-75">+12.5 this month</p></div><div className="rounded-2xl bg-[#f8dcae] p-4 text-[#705631] clay-soft"><p className="text-[10px] font-bold uppercase opacity-75">Clinical</p><p className="mt-2 text-2xl font-black">106.5</p><p className="mt-1 text-[10px] opacity-75">61% of total</p></div><div className="rounded-2xl bg-[#ccebe0] p-4 text-[#297268] clay-soft"><p className="text-[10px] font-bold uppercase opacity-75">Experiences</p><p className="mt-2 text-2xl font-black">08</p><p className="mt-1 text-[10px] opacity-75">3 active</p></div></div><div className="mt-4 rounded-2xl bg-white/75 p-4 clay-soft"><div className="mb-4 flex items-center justify-between"><span className="font-bold">Hours by category</span><span className="text-xs text-[#7796a1]">This year</span></div><div className="flex h-28 items-end gap-4 px-3">{[["Clinical",78,"#2f7da7"],["Shadowing",58,"#79b5c2"],["Service",42,"#65b795"],["Research",32,"#efb56c"],["Other",24,"#b9cbd4"]].map(([name,height,color]) => <div key={String(name)} className="flex flex-1 flex-col items-center gap-2"><div className="w-full rounded-t-lg" style={{ height: `${Number(height)}%`, backgroundColor: String(color) }} /><span className="text-[9px] text-[#78929d]">{String(name)}</span></div>)}</div></div><div className="mt-4 rounded-2xl bg-white/75 p-4 clay-soft"><div className="flex items-center justify-between"><span className="font-bold">Recent experience</span><span className="text-xs font-semibold text-[#2f7da7]">View all</span></div><div className="mt-4 flex items-center gap-3"><div className="flex size-9 items-center justify-center rounded-xl bg-[#d9eef2] text-[#2f7da7]"><UserRound className="size-4" /></div><div className="flex-1"><p className="text-sm font-bold">Community Health Clinic</p><p className="text-xs text-[#7b96a0]">Clinical Volunteering · Sep 2026</p></div><b className="text-sm text-[#2f7da7]">24.5h</b></div></div></div>
          </motion.div>
        </section>

        <section className="border-y border-[#dbecea] bg-white/45 px-6 py-20 lg:px-10"><div className="mx-auto max-w-7xl"><div className="max-w-xl"><p className="text-sm font-black uppercase tracking-[.18em] text-[#4ca88b]">One organized home</p><h2 className="mt-3 text-4xl font-black tracking-[-.04em] text-[#183d52]">Your best experiences deserve better than scattered notes.</h2><p className="mt-4 leading-7 text-[#688794]">Spreadsheets, notes apps, paper forms, random documents — Clinical Hours turns the mess into a clear, living record of the work you’re proud of.</p></div><div id="features" className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{features.map(({ icon: Icon, title, text }, index) => <div key={title} className="rounded-[1.6rem] bg-[#f4fbfa] p-6 clay-soft"><div className={`mb-5 flex size-12 items-center justify-center rounded-2xl ${index % 2 ? "bg-[#f8dcae] text-[#946f3f]" : "bg-[#d1ece5] text-[#368979]"}`}><Icon className="size-5" /></div><h3 className="font-black text-[#24495c]">{title}</h3><p className="mt-2 text-sm leading-6 text-[#78919b]">{text}</p></div>)}</div></div></section>
        <section className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-20 sm:flex-row sm:items-center lg:px-10"><div><p className="text-sm font-bold text-[#4ca88b]">Your data stays in your browser.</p><h2 className="mt-2 text-3xl font-black tracking-tight">Start building your story today.</h2><p className="mt-2 text-[#6b8793]">Free, private, and designed for the way students actually work.</p></div><button onClick={() => navigate("/auth?mode=signup")} className="clay-button shrink-0 rounded-2xl bg-[#2f7da7] px-7 py-4 font-bold text-white">Create my workspace <ArrowRight className="ml-2 inline size-4" /></button></section>
      </main>
      <footer className="border-t border-[#dbecea] px-6 py-6 text-center text-xs text-[#78919b]">Clinical Hours · Track your experience. Build your future. · Local-first demo</footer>
    </div>
  );
}
