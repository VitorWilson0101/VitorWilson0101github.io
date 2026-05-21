import { motion } from 'motion/react';
import { Cpu, Gamepad2, MonitorPlay, Code } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: "Advanced C++ Systems",
    desc: "Architect scalable multiplayer mechanics for competitive shooters.",
    icon: MonitorPlay,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "group-hover:border-blue-500/50",
    tag: "Unreal Engine 5",
    tagColor: "text-blue-400",
    status: "48 Hours Left"
  },
  {
    id: 2,
    title: "Shader Magic & FX",
    desc: "Master Niagara and HLSL to create breathtaking environmental effects.",
    icon: Gamepad2,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "group-hover:border-purple-500/50",
    tag: "Technical Art",
    tagColor: "text-purple-400",
    status: "New Release"
  },
  {
    id: 3,
    title: "Engine Architecture & AI",
    desc: "Design deterministic state machines, behavior trees, and pathfinding.",
    icon: Code,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "group-hover:border-blue-500/50",
    tag: "C++ & Custom Engines",
    tagColor: "text-blue-400",
    status: "Filling Fast"
  },
  {
    id: 4,
    title: "Combat Mechanics",
    desc: "Advanced logic for hitboxes, frame data, and satisfying player feedback.",
    icon: Cpu,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "group-hover:border-purple-500/50",
    tag: "Gameplay Code",
    tagColor: "text-purple-400",
    status: "Waitlist Open"
  }
];

export default function Courses() {
  return (
    <section id="cursos" className="py-32 relative z-10 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stats Row instead of Header */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 border border-white/5 rounded-2xl bg-black/40 backdrop-blur-md">
            <div className="text-4xl font-black text-white">120k+</div>
            <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-2">Forgers Joined</div>
          </div>
          <div className="text-center p-6 border border-white/5 rounded-2xl bg-black/40 backdrop-blur-md">
            <div className="text-4xl font-black text-white">4.9</div>
            <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-2">Avg. Student Rating</div>
          </div>
          <div className="text-center p-6 border border-white/5 rounded-2xl bg-black/40 backdrop-blur-md">
            <div className="text-4xl font-black text-white">24</div>
            <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-2">Weeks to Publish</div>
          </div>
          <div className="text-center p-6 border border-white/5 rounded-2xl bg-black/40 backdrop-blur-md">
            <div className="text-4xl font-black text-white">AAA</div>
            <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-2">Mentorship</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, idx) => {
            const Icon = course.icon;
            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`group p-8 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 backdrop-blur-xl cursor-pointer transition-all ${course.border}`}
              >
                <div className="flex justify-between items-start mb-6">
                  <span className={`text-[10px] font-bold ${course.tagColor} uppercase tracking-widest`}>{course.tag}</span>
                  <span className="text-xs text-slate-500 italic">{course.status}</span>
                </div>
                <div className={`w-12 h-12 mb-6 flex items-center justify-center rounded-xl bg-black/40 shadow-[0_0_15px_rgba(255,255,255,0.05)] ${course.color} transition-transform group-hover:scale-110`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{course.title}</h3>
                <p className="text-sm text-slate-400 font-light leading-relaxed max-w-sm">{course.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
