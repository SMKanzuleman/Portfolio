import React from "react";
import { Clipboard, ExternalLink } from "lucide-react";

const ContactCard = ({ icon: Icon, title, content, link }) => {
  const handleClick = () => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    } else { 
      navigator.clipboard.writeText(content);
      alert(`${content} copied!`);
    }
  };

  return (
    <div className="w-80 lg:w-full max-w-112.5 relative flex items-center justify-between gap-4 bg-linear-to-br from-bg1 via-bg2 to-bg3 rounded-2xl p-4 border border-purple-900/30">
      <div className="flex items-center gap-5 overflow-hidden">
        <div className="bg-purple-700/10 rounded-xl p-3 border border-purple-500/20 shrink-0">
          <Icon size={20} className="text-purple-400" />
        </div>

        <div className="flex flex-col min-w-0 flex-1">
          <p className="text-purple-400/60 uppercase text-[10px] font-bold tracking-[0.2em] truncate">
            {title}
          </p>
          <p className="text-gray-200 font-mono tracking-wide truncate">
            {content}
          </p>
        </div>
      </div>

      <div className="shrink-0">
        <button
          onClick={handleClick}
          className="p-3 hover:bg-purple-500/10 rounded-xl transition-all active:scale-90 group"
        >
          {link ? (
            <ExternalLink
              size={18}
              className="text-purple-400 group-hover:text-purple-300"
            />
          ) : (
            <Clipboard
              size={18}
              className="text-purple-400 group-hover:text-purple-300"
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
