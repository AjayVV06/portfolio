import Image from "next/image";
import Link from "next/link";
import { Mail, Globe, Phone, Briefcase } from "lucide-react";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a1121] text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-6 md:px-12 pt-24 pb-20 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Side: Glowing Image */}
        <div className="flex-1 flex justify-center relative">
          {/* Glowing Background Blob */}
          <div className="absolute w-[300px] h-[300px] bg-blue-500/30 rounded-full blur-3xl shadow-[0_0_100px_50px_rgba(59,130,246,0.2)]"></div>
          
          {/* Main Image Container */}
          <div className="relative z-10 w-[300px] h-[350px] md:w-[350px] md:h-[420px] rounded-[40px] rounded-bl-[120px] rounded-tr-[120px] border-b-4 border-blue-500 bg-[#0f172a] overflow-hidden flex items-end justify-center shadow-2xl">
            {/* The image tag points to the public folder */}
            <Image 
              src="/profile-new.png" 
              alt="Ajay | AIML Engineer" 
              width={350}
              height={420}
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Side: Text & Bio */}
        <div className="flex-1 space-y-6">
          <p className="text-lg text-slate-300 font-medium">Hello, I'm</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
            Ajay
          </h1>
          <h2 className="text-2xl text-blue-400 font-semibold">
            And I'm an AIML Engineer |
          </h2>
          <p className="text-sm md:text-base text-slate-400 leading-relaxed max-w-lg">
            I specialize in developing machine learning, deep learning, and computer vision applications using Python, OpenCV, TensorFlow, and YOLOv8 to build intelligent, scalable solutions.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 pt-2">
            <Link href="#" className="p-2 bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-white rounded-md transition-colors"><Mail size={20} /></Link>
            <Link href="#" className="p-2 bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-white rounded-md transition-colors"><Globe size={20} /></Link>
            <Link href="#" className="p-2 bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-white rounded-md transition-colors"><Phone size={20} /></Link>
            <Link href="#" className="p-2 bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-white rounded-md transition-colors"><Briefcase size={20} /></Link>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 pt-4">
            <button className="px-8 py-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/30">
              Hire Me
            </button>
            <button className="px-8 py-3 bg-transparent border border-blue-500 text-blue-400 font-medium rounded-md hover:bg-blue-500/10 transition-colors">
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="container mx-auto px-6 md:px-12 py-12 border-t border-slate-800/50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:divide-x divide-slate-700">
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-4xl font-bold text-white mb-2">2+</h3>
            <p className="text-xs text-slate-400 uppercase tracking-wider">Years of<br/>Study</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-4xl font-bold text-white mb-2">5+</h3>
            <p className="text-xs text-slate-400 uppercase tracking-wider">Projects<br/>Completed</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-4xl font-bold text-white mb-2">8+</h3>
            <p className="text-xs text-slate-400 uppercase tracking-wider">Technologies<br/>Mastered</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-4xl font-bold text-white mb-2">100%</h3>
            <p className="text-xs text-slate-400 uppercase tracking-wider">Code<br/>Quality</p>
          </div>
        </div>
      </section>
    </main>
  );
}