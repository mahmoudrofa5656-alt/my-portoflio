import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, Cpu, Code2, CheckCircle2, ShieldCheck, Sparkles, Layers } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl my-8 bg-neutral-950 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden text-neutral-100 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header bar */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-800 bg-neutral-900/50">
          <div className="space-y-1">
            <span className="text-xs font-mono text-cyan-400">
              {project.category} · SPECIFICATION & ARCHITECTURE
            </span>
            <h2 id="modal-title" className="text-2xl font-bold tracking-tight text-white">
              {project.title}
            </h2>
            <p className="text-xs text-neutral-400">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
          {/* Main Visual or Overview banner */}
          {project.image && (
            <div className="rounded-xl overflow-hidden aspect-video bg-neutral-900 border border-neutral-800">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Deep Architectural Narrative */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono text-neutral-400 uppercase tracking-wider">
              SYSTEM OVERVIEW & ENGINEERING DESIGN
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Hardware & Software Dual Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-neutral-800/80">
            {/* Hardware Bill of Materials & Circuits */}
            <div className="p-5 rounded-xl bg-neutral-900/40 border border-neutral-850 space-y-3">
              <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold">
                <Cpu className="w-4 h-4" />
                <span>Hardware Components & Circuits</span>
              </div>
              <ul className="space-y-2 text-xs text-neutral-300">
                {(project.hardware && project.hardware.length > 0) ? (
                  project.hardware.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-cyan-500 font-mono mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))
                ) : (
                  <li className="text-neutral-500 italic">Edge & client device integrated</li>
                )}
              </ul>
            </div>

            {/* Software Stack & Firmware */}
            <div className="p-5 rounded-xl bg-neutral-900/40 border border-neutral-850 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold">
                <Code2 className="w-4 h-4" />
                <span>Software Stack & Firmware</span>
              </div>
              <ul className="space-y-2 text-xs text-neutral-300">
                {(project.software && project.software.length > 0) ? (
                  project.software.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-500 font-mono mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))
                ) : (
                  <li className="text-neutral-500 italic">Embedded state machine & algorithms</li>
                )}
              </ul>
            </div>
          </div>

          {/* Key Engineering Highlights */}
          {project.keyHighlights && project.keyHighlights.length > 0 && (
            <div className="space-y-3 pt-4 border-t border-neutral-800/80">
              <h3 className="text-sm font-mono text-neutral-400 uppercase tracking-wider">
                ENGINEERING HIGHLIGHTS & OUTCOMES
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyHighlights.map((hl, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-lg bg-neutral-900/30 border border-neutral-800/60 text-xs text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags list */}
          <div className="pt-4 border-t border-neutral-800/80 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-neutral-400 mr-2">TAXONOMY:</span>
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs text-neutral-300 font-mono bg-neutral-900 px-2 py-1 rounded border border-neutral-800">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between p-6 border-t border-neutral-800 bg-neutral-900/50">
          <span className="text-xs text-neutral-400 font-mono">
            {project.metricsOrOutcome || 'Verified Physical Prototype'}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium bg-neutral-100 text-neutral-950 rounded-lg hover:bg-white transition-colors"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
