import { Gamepad2, Menu } from 'lucide-react';
import PixelCanvas from './components/PixelCanvas';
import Hero from './components/Hero';
import Courses from './components/Courses';

function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(147,51,234,0.3)]">
            <Gamepad2 className="w-5 h-5 text-white" />
          </div>
          <span className="font-black text-2xl tracking-tighter text-white font-sans">
            PIXEL<span className="text-purple-500">FORGE</span>
          </span>
        </div>
        <nav className="hidden md:flex gap-10 text-sm font-medium tracking-widest uppercase opacity-70">
          <a href="#cursos" className="hover:text-purple-400 transition-colors">Masterclasses</a>
          <a href="#sobre" className="hover:text-purple-400 transition-colors">Bootcamps</a>
          <a href="#comunidade" className="hover:text-purple-400 transition-colors">Community</a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center justify-center px-6 py-2 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-purple-400 transition-all cursor-pointer">
            ENTER FORGE
          </button>
          <button className="md:hidden text-gray-300 hover:text-white cursor-pointer">
            <Menu />
          </button>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-black/40 border-t border-white/5 py-6 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex gap-8 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
          <span>© {new Date().getFullYear()} PIXEL FORGE STUDIOS</span>
          <a href="#" className="hover:text-white transition-colors">TERMS</a>
          <a href="#" className="hover:text-white transition-colors">PRIVACY</a>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-[10px] font-bold text-purple-400 uppercase tracking-widest">PARTNERED WITH:</div>
          <div className="flex gap-4 opacity-40">
            <span className="text-xs font-black italic">EPIC GAMES</span>
            <span className="text-xs font-black italic">UNITY</span>
            <span className="text-xs font-black italic">NVIDIA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen selection:bg-purple-500/30">
      <PixelCanvas />
      <div className="relative z-10 flex flex-col">
        <Header />
        <main>
          <Hero />
          <Courses />
        </main>
        <Footer />
      </div>
    </div>
  );
}
