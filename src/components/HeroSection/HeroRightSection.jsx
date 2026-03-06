import { Code2, Cpu, Globe, Zap } from "lucide-react"; 
import { FaGithub, FaReact, FaJs } from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";


const HeroRightSection = () => {
  return (
    <div className="relative flex  md:items-center lg:items-center justify-center lg:min-h-150 md:min-h-150 min-h-110 z-1 md:mt-10 ">
      <div
        className="absolute lg:top-25 md:top-25 -top-5 lg:-right-10 -right-10 z-10 animate-float text-purple-600 
      style={{ animationDelay: '0s' }}  "
        style={{ animationDelay: "0s" }}
      >
        <IoSparkles size={40} />
      </div>

      <div
        className="relative w-67.5 h-90 group z-0 animate-float"
        style={{ animationDelay: "0s" }}
      >
        <div className="absolute -inset-1 bg-linear-to-b from-violet-600 to-teal-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
        <div className="relative w-full h-full bg-[#0d071a] border border-white/10 rounded-2xl overflow-hidden">
          <img
            src="/hero.jpg"
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroRightSection;
