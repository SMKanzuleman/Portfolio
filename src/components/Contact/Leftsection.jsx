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
      <ContactCard
        icon={FaGithub}
        title="GitHub"
        content="SMKanzulEman"
        link="https://github.com/SMKanzulEman/"
      />
      <ContactCard
        icon={FaLinkedin}
        title="LinkedIn"
        content="Syed kanzulEman"
        link="https://linkedin.com/in/syedkanzuleman/"
      />
    </div>
  );
};

export default Leftsection;

