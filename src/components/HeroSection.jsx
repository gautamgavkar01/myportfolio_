import { ArrowDown } from "lucide-react";
import userPhoto from "../assets/myphoto.png";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-8 md:gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                {" "}
                Gautam
              </span>
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                {" "}
                Gavkar
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground opacity-0 animate-fade-in-delay-2">
              @Software Engineer at Expansive Solutions
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
              I craft powerful web applications using modern technologies like
              Java, Spring Boot, React.js, and AI. Specializing in full-stack
              development, I focus on creating solutions that are scalable,
              intelligent, and user-friendly.
            </p>
            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>
            </div>
          </div>
          {/* User Photo - Right Side */}
          <div className="flex-1 flex justify-center md:justify-end items-center mt-8 md:mt-0">
            <img
              src={userPhoto}
              alt="Gautam Gavkar portrait"
              className="w-56 h-80 md:w-72 md:h-[26rem] object-cover rounded-xl shadow-2xl border-4 border-primary/30 bg-background"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
