import React from 'react'
import SubmitBtn from './SubmitBtn';

const FormBody = () => {
  return (
    <form className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label className="font-Inter text-xs font-semibold text-purple-300 ml-1 uppercase tracking-wider">
          Email Address
        </label>
        <input
          type="email"
          placeholder="xyz@example.com"
          className="w-full bg-purple-900/10 border border-purple-900/40 rounded-xl py-4 px-5 text-white font-Inter placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500/40 transition duration-300"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-Inter text-xs font-semibold text-purple-300 ml-1 uppercase tracking-wider">
          Your Message
        </label>
        <textarea
          name="query"
          placeholder="How can I help you?"
          rows={5}
          className="w-full bg-purple-900/10 border border-purple-900/40 rounded-xl py-4 px-5 text-white font-Inter placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500/40 transition duration-300 resize-none"
        ></textarea>
        <SubmitBtn />
      </div>
    </form>
  );
}

export default FormBody
