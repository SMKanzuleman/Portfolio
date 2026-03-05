import React from "react";
import ContactCard from "./ContactCard";
import { Mail, Phone } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";





const Leftsection = () => {
  return (
    <div className="flex flex-col gap-4">
      <ContactCard
        icon={Mail}
        title="Official Mail"
        content="kanzuleman.works@gmail.com"
      />

      <ContactCard icon={Phone} title="Phone" content="+923290407055" />

      {/* These will show the GOTO icon because we added the 'link' prop */}
      <ContactCard
        icon={FaLinkedin}
        title="GitHub"
        content="SMKanzulEman"
        link="https://github.com/SMKanzulEman/"
      />

      <ContactCard
        icon={FaGithub}
        title="LinkedIn"
        content="Syed kanzulEman"
        link="https://linkedin.com/in/syedkanzuleman/"
      />
    </div>
  );
};

export default Leftsection;

