import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Github, Linkedin, ExternalLink, Send, MessageSquare } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kulkarnimayuri210@gmail.com",
      link: "mailto:kulkarnimayuri210@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7620700252",
      link: "tel:+917620700252",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Sangli, Maharashtra, India",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/myukulkarni",
      username: "@myukulkarni",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com/in/mayuri-kulkarni",
      username: "Mayuri Kulkarni",
    },
    {
      icon: ExternalLink,
      label: "Portfolio",
      url: "https://myukulkarni.github.io",
      username: "myukulkarni.github.io",
    },
  ];

  return (
    <section className="scroll-section relative overflow-y-auto bg-background">
      <div className="min-h-screen flex flex-col justify-center px-8 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-4">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Open to new opportunities and collaborations. Feel free to reach out!
            </p>
          </div>

          {/* Main CTA Card */}
          <Card className="p-8 mb-12 bg-gradient-to-br from-primary/10 via-primary/5 to-background border-2 border-primary/20 hover:border-primary/40 transition-all">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-full bg-primary/20">
                  <MessageSquare className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">Ready to collaborate?</h3>
                  <p className="text-muted-foreground">Let's discuss your next project</p>
                </div>
              </div>
              <Button size="lg" className="group px-8 py-6 text-lg">
                <a href="mailto:kulkarnimayuri210@gmail.com" className="flex items-center gap-2">
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Send Email
                </a>
              </Button>
            </div>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Contact Cards */}
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <Card 
                  key={idx} 
                  className="p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300 group border-2 hover:border-primary/30"
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide">{info.label}</p>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-base font-medium hover:text-primary transition-colors break-all"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-base font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Connect on Social</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Card className="p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 hover:border-primary/30">
                      <div className="flex flex-col items-center gap-4 text-center">
                        <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-muted-foreground mb-1 uppercase tracking-wide">{social.label}</p>
                          <p className="text-base font-medium group-hover:text-primary transition-colors">{social.username}</p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                    </Card>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer note */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground font-mono text-sm">
              <code className="text-primary">{'// '}</code>
              <code>Available for freelance opportunities</code>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
