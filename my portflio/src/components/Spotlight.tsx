import React, { useState } from 'react';
import { Project, EducationItem } from '../types';
import { ArrowUpRight, GraduationCap, Layers, Eye, Cpu, CheckCircle2 } from 'lucide-react';

interface SpotlightProps {
  projects: Project[];
  education: EducationItem;
  onSelectProject: (project: Project) => void;
}

export const Spotlight: React.FC<SpotlightProps> = ({ projects, education, onSelectProject }) => {
  const [activeImageFallback, setActiveImageFallback] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setActiveImageFallback(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section id="spotlight" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-neutral-900">
      {/* Section Header */}
      <div className="max-w-3xl mb-16 space-y-3">
        <div className="text-xs font-mono tracking-wider text-cyan-400">
          SPOTLIGHT
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          Featured Engineering & Education
        </h2>
        <p className="text-base text-neutral-400 leading-relaxed">
          High-impact engineering breakthroughs presented at international forums alongside rigorous training in artificial intelligence and cloud architectures.
        </p>
      </div>

      {/* Featured Projects Grid */}
      <div className="space-y-16">
        {projects.map((proj, idx) => (
          <div
            key={proj.id}
            className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 hover:border-neutral-700/80 transition-all duration-300"
          >
            {/* Visual media container (7 cols on desktop) */}
            <div className={`lg:col-span-7 overflow-hidden rounded-xl bg-neutral-950 border border-neutral-800 relative aspect-video ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
              {proj.image && !activeImageFallback[proj.id] ? (
                <img
                  src={proj.image}
                  alt={proj.title}
                  referrerPolicy="no-referrer"
                  onError={() => handleImageError(proj.id)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-neutral-900/80 text-center">
                  <Cpu className="w-12 h-12 text-cyan-400/80 mb-3" />
                  <span className="text-sm font-semibold text-neutral-200">{proj.title}</span>
                  <span className="text-xs text-neutral-500 mt-1">{proj.subtitle}</span>
                </div>
              )}

              {/* Discreet category badge */}
              <div className="absolute top-4 left-4 bg-neutral-950/80 backdrop-blur-md px-3 py-1 rounded text-xs font-mono text-cyan-300 border border-neutral-800">
                {proj.category}
              </div>
            </div>

            {/* Content summary (5 cols on desktop) */}
            <div className={`lg:col-span-5 space-y-5 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
              <div className="space-y-2">
                <div className="text-xs font-mono text-neutral-400">
                  {proj.metricsOrOutcome || 'Featured Flagship Project'}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {proj.title}
                </h3>
                <p className="text-sm text-cyan-400/90 font-medium">
                  {proj.subtitle}
                </p>
              </div>

              <p className="text-sm text-neutral-300 leading-relaxed">
                {proj.description}
              </p>

              {/* Unboxed Metadata / Tech specs */}
              <div className="pt-2 border-t border-neutral-800/80">
                <div className="text-xs font-mono text-neutral-400 mb-2">KEY STACK:</div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-300">
                  {proj.tags.map((tag, tIdx) => (
                    <React.Fragment key={tag}>
                      <span className="font-medium text-neutral-200">{tag}</span>
                      {tIdx < proj.tags.length - 1 && <span className="text-neutral-600" aria-hidden="true">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => onSelectProject(proj)}
                  className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-lg bg-neutral-100 text-neutral-950 hover:bg-white transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect System Architecture</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Education & Training Spotlight: Egypt's Digital Cubs Initiative (DECI) */}
      <div id="education" className="mt-20 p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-neutral-900/60 via-neutral-900/30 to-neutral-950 border border-neutral-800 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-800/80 pb-6">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <GraduationCap className="w-4 h-4" />
              <span>EDUCATION & SPECIALIZED TRAINING</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {education.institution}
            </h3>
            <p className="text-sm text-neutral-400 font-medium">
              {education.initiative} · {education.focus}
            </p>
          </div>

          <div className="shrink-0 text-left md:text-right">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 px-3 py-1 rounded bg-emerald-950/40 border border-emerald-800/40">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Specialized Cohort Graduate</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-4">
            <p className="text-sm text-neutral-300 leading-relaxed">
              {education.description}
            </p>
            <div className="p-4 rounded-lg bg-neutral-950/60 border border-neutral-850 space-y-2">
              <span className="text-xs font-mono text-neutral-400 block">CORE PILLARS:</span>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Applied Neural Architectures, High-Efficiency Cloud Pipelines, Edge AI Integration, and Rigorous Engineering Problem Solving.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-3">
            <span className="text-xs font-mono text-neutral-400 block">KEY CURRICULAR COMPETENCIES:</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {education.competencies.map((comp) => (
                <div key={comp} className="flex items-start gap-2.5 p-3 rounded-lg bg-neutral-950/40 border border-neutral-800/60 text-xs text-neutral-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                  <span className="leading-snug">{comp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
