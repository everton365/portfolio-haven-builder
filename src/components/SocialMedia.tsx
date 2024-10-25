import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { Card } from "./ui/card";

const SocialMedia = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-8 h-8" />,
      url: "https://linkedin.com",
      color: "hover:text-[#0077B5]"
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-8 h-8" />,
      url: "https://twitter.com",
      color: "hover:text-[#1DA1F2]"
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-8 h-8" />,
      url: "https://instagram.com",
      color: "hover:text-[#E4405F]"
    },
    {
      name: "Facebook",
      icon: <Facebook className="w-8 h-8" />,
      url: "https://facebook.com",
      color: "hover:text-[#1877F2]"
    },
    {
      name: "YouTube",
      icon: <Youtube className="w-8 h-8" />,
      url: "https://youtube.com",
      color: "hover:text-[#FF0000]"
    }
  ];

  return (
    <section id="social" className="py-20 bg-white">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Redes Sociais
        </h2>
        <Card className="p-8 max-w-3xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors duration-300 ${social.color}`}
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SocialMedia;