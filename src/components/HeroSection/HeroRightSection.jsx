import { Code2, Cpu, Globe, Zap } from "lucide-react"; 
import { FaGithub, FaReact, FaJs } from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";


const HeroRightSection = () => {
  return (
    <div className="relative flex items-center justify-center min-h-150 z-1">
      <div
        className="absolute top-25 -right-10 animate-float text-purple-600 
      style={{ animationDelay: '0s' }}  "
        style={{ animationDelay: "0s" }}
      >
        <IoSparkles size={40} />
      </div>
      <div className="absolute -bottom-10 -left-12 animate-float-slow opacity-25 text-blue-900">
        <Zap size={36} strokeWidth={1} />
      </div>
      <div
        className="relative w-67.5 h-90 group z-0 animate-float"
        style={{ animationDelay: "0.1s" }}
      >
        <div className="absolute -inset-1 bg-linear-to-b from-violet-600 to-teal-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
        <div className="relative w-full h-full bg-[#0d071a] border border-white/10 rounded-2xl overflow-hidden">
          <img
            src="/src/assets/hero.jpg"
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroRightSection;
