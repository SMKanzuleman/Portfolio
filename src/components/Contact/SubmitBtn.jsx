import React from 'react'
import { Send } from "lucide-react";

const SubmitBtn = () => {
  return (
    <button className="group/btn relative mt-2 overflow-hidden flex items-center justify-center gap-2 py-4 rounded-xl bg-linear-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 text-white font-Inter font-bold text-sm transition duration-300  cursor-pointer">
      <Send
        size={18}
        className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-700"
      />
      Send Message
    </button>
  );
}

export default SubmitBtn
