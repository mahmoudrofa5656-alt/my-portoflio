import React, { useState } from 'react';
import { Project } from '../types';
import { ArrowUpRight, Cpu, Eye, Flame, Bot, Glasses, ShoppingCart, MessageSquare, Plus } from 'lucide-react';

interface ProjectsGalleryProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  isAdmin: boolean;
  onOpenAddModal: () => void;
}

export const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({
  projects,
  onSelectProject,
  isAdmin,
  onOpenAddModal
}) => {
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setFailedImages(prev => ({ ...prev, [id]: true }));
  };

  const categories = ['All', 'Hardware & Robotics', 'Software & AI', 'Assistive Tech', 'Automation'];

  const filtered = filterCategory === 'All'
    ? projects
    : projects.filter(p => p.category === filterCategory);

  const getFallbackIcon = (category: string) => {
    switch (category) {
      case 'Hardware & Robotics':
        return <Bot className="w-10 h-10 text-cyan-400" />;
      case 'Assistive Tech':
        return <Glasses className="w-10 h-10 text-purple-400" />;
      case 'Automation':
        return <MessageSquare className="w-10 h-10 text-amber-400" />;
      default:
        return <ShoppingCart className="w-10 h-10 text-emerald-400" />;
    }
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-neutral-900">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl space-y-3">
          <div className="text-xs font-mono tracking-wider text-cyan-400">
            PROJECTS GALLERY
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Engineered Systems & Prototypes
          </h2>
          <p className="text-base text-neutral-400 leading-relaxed">
            Autonomous emergency robotics, multi-language conversational guides, retail neural vision models, and enterprise automation bots.
          </p>
        </div>

        {/* If Admin, show an inline Add button in addition to the floating button */}
        {isAdmin && (
          <button
            onClick={onOpenAddModal}
            className="self-start md:self-end inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 transition-colors shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>Add Project (Admin)</span>
          </button>
        )}
      </div>

      {/* Category Tabs (Segmented control) */}
      <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-900/60 border border-neutral-800/80 rounded-lg max-w-xl mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilterCategory(cat)}
            className={`py-1.5 px-3 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
              filterCategory === cat
                ? 'bg-neutral-800 text-white shadow-sm'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((proj) => (
          <div
            key={proj.id}
            className="group rounded-xl bg-neutral-900/40 border border-neutral-850 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            <div>
              {/* Media Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-neutral-950 border-b border-neutral-850">
                {proj.image && !failedImages[proj.id] ? (
                  <img
                    src={proj.image}
                    alt={proj.title}
                    referrerPolicy="no-referrer"
                    onError={() => handleImageError(proj.id)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-b from-neutral-900 to-neutral-950 text-center">
                    {getFallbackIcon(proj.category)}
                    <span className="text-xs font-mono text-neutral-400 mt-2">{proj.category}</span>
                  </div>
                )}

                <div className="absolute top-3 left-3 bg-neutral-950/85 backdrop-blur-md px-2.5 py-0.5 rounded text-[11px] font-mono text-neutral-300 border border-neutral-800">
                  {proj.category}
                </div>
              </div>

              {/* Text content */}
              <div className="p-5 space-y-3">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-normal">
                    {proj.subtitle}
                  </p>
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed line-clamp-3">
                  {proj.description}
                </p>

                {/* Unboxed tech stack tags */}
                <div className="pt-2">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-neutral-400">
                    {proj.tags.slice(0, 4).map((tag, tIdx) => (
                      <React.Fragment key={tag}>
                        <span className="text-neutral-300 font-mono">{tag}</span>
                        {tIdx < Math.min(proj.tags.length, 4) - 1 && (
                          <span className="text-neutral-600" aria-hidden="true">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom action button */}
            <div className="p-5 pt-0">
              <button
                onClick={() => onSelectProject(proj)}
                className="w-full py-2.5 px-3 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 text-xs font-semibold text-neutral-200 transition-colors flex items-center justify-center gap-1.5"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>View Architecture & Specs</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
