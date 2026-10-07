import React from 'react';
import { ArrowDown, Cpu, Code2, Sparkles, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="top" className="relative min-h-[85vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
      {/* Subtle background ambient mesh */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-30"
      >
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-cyan-900/40 via-neutral-900/20 to-neutral-950 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Subtle Discipline Kicker (unboxed clean text) */}
        <div className="flex items-center justify-center gap-2 text-xs font-mono tracking-wider text-neutral-400">
          <span>EMBEDDED SYSTEMS</span>
          <span aria-hidden="true">/</span>
          <span>ROBOTICS</span>
          <span aria-hidden="true">/</span>
          <span>APPLIED AI</span>
        </div>

        {/* Main Headline */}
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white" style={{ textWrap: 'balance' }}>
            Hi, I am Mahmoud
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-neutral-300 tracking-tight" style={{ textWrap: 'balance' }}>
            Hardware and Software Engineer
          </p>
        </div>

        {/* Concise Manifesto / Bio - No mention of age */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-neutral-400 leading-relaxed" style={{ textWrap: 'balance' }}>
          Bridging the physical and computational realms. I engineer autonomous robotics, sensor-driven assistive technologies, and machine learning software that solve tangible human challenges.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href="#spotlight"
            className="px-6 py-3.5 text-sm font-semibold text-neutral-950 bg-white rounded-lg hover:bg-neutral-200 transition-all duration-200 shadow-sm flex items-center gap-2 group"
          >
            <span>View My Work</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#contact"
            className="px-6 py-3.5 text-sm font-medium text-neutral-300 hover:text-white bg-neutral-900/80 hover:bg-neutral-800/80 border border-neutral-800 rounded-lg transition-all duration-200 flex items-center gap-2"
          >
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Quick Engineering Focus highlights (clean unboxed rows, no pills) */}
        <div className="pt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-left border-t border-neutral-900">
          <div className="space-y-1.5 p-4 rounded-lg bg-neutral-900/30 border border-neutral-800/50">
            <div className="flex items-center gap-2 text-neutral-200 font-semibold text-sm">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>Embedded Hardware</span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              ESP32 & Arduino architecture, motor drivers, I2C/SPI sensor arrays, and custom telemetry circuits.
            </p>
          </div>

          <div className="space-y-1.5 p-4 rounded-lg bg-neutral-900/30 border border-neutral-800/50">
            <div className="flex items-center gap-2 text-neutral-200 font-semibold text-sm">
              <Code2 className="w-4 h-4 text-cyan-400" />
              <span>Applied AI & Vision</span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              TensorFlow/Keras neural models, edge machine learning, real-time gesture decoding, and object recognition.
            </p>
          </div>

          <div className="space-y-1.5 p-4 rounded-lg bg-neutral-900/30 border border-neutral-800/50">
            <div className="flex items-center gap-2 text-neutral-200 font-semibold text-sm">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Intelligent Automation</span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              n8n visual workflow orchestration, autonomous robot state machines, and assistive communication systems.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-10 flex justify-center">
          <a
            href="#spotlight"
            aria-label="Scroll to featured spotlight"
            className="p-2 text-neutral-500 hover:text-neutral-300 transition-colors animate-bounce"
          >
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
