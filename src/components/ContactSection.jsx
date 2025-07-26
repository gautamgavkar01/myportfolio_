import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white drop-shadow-lg">
          Get In <span className="text-primary text-glow"> Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Contact Info */}
          <div className="space-y-10 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/20 shadow-md">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Email</h4>
                    <a
                      href="mailto:hello@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors text-base"
                    >
                      gautam.gavkar@mitaoe.ac.in
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/20 shadow-md">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Phone</h4>
                    <a
                      href="tel:+11234567890"
                      className="text-muted-foreground hover:text-primary transition-colors text-base"
                    >
                      +91 9356628982
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/20 shadow-md">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Location</h4>
                    <span className="text-muted-foreground hover:text-primary transition-colors text-base cursor-default">
                      Pune, Maharashtra, India
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4 text-white">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/gautam-gavkar-7256a4260"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform text-primary"
                >
                  <Linkedin />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="hover:scale-110 transition-transform text-primary"
                >
                  <Twitter />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="hover:scale-110 transition-transform text-primary"
                >
                  <Instagram />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="hover:scale-110 transition-transform text-primary"
                >
                  <Twitch />
                </a>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="backdrop-blur-lg bg-white/10 dark:bg-black/30 p-6 sm:p-8 rounded-2xl shadow-xl border border-white/10 dark:border-primary/20 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Send a Message
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-white"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background/80 focus:outline-none focus:ring-2 focus:ring-primary text-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 transition"
                  placeholder="Gautam Gavkar..."
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-white"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background/80 focus:outline-none focus:ring-2 focus:ring-primary text-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 transition"
                  placeholder="gautam.gavkar@mitaoe.ac.in"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-white"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background/80 focus:outline-none focus:ring-2 focus:ring-primary text-black dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 resize-none transition"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 text-lg shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
