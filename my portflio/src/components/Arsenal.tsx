import React, { useState } from 'react';
import { SkillItem } from '../types';
import { Terminal, Cpu, Search, CheckCircle } from 'lucide-react';

interface ArsenalProps {
  skills: SkillItem[];
}

export const Arsenal: React.FC<ArsenalProps> = ({ skills }) => {
  const [activeTab, setActiveTab] = useState<'All' | 'Software & AI' | 'Hardware & Embedded Systems'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSkills = skills.filter((item) => {
    const matchesCategory = activeTab === 'All' || item.category === activeTab;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.typicalUses.some(u => u.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="arsenal" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-neutral-900">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl space-y-3">
          <div className="text-xs font-mono tracking-wider text-cyan-400">
            TECHNICAL ARSENAL
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Dual-Discipline Mastery
          </h2>
          <p className="text-base text-neutral-400 leading-relaxed">
            Bridging bare-metal microcontroller registers, analog sensor signals, and low-level firmware with higher-order neural networks and automated logic pipelines.
          </p>
        </div>

        {/* Search input */}
        <div className="w-full md:w-72 relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
          <input
            type="text"
            placeholder="Search skills, modules..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs rounded-lg bg-neutral-900/80 border border-neutral-800 text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-cyan-500/60"
          />
        </div>
      </div>

      {/* Filter Tabs (Interactive Segmented Control) */}
      <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-900/60 border border-neutral-800/80 rounded-lg max-w-md mb-10">
        <button
          onClick={() => setActiveTab('All')}
          className={`flex-1 min-w-[80px] py-1.5 px-3 text-xs font-medium rounded-md transition-colors whitespace-nowrap text-center ${
            activeTab === 'All'
              ? 'bg-neutral-800 text-white shadow-sm'
              : 'text-neutral-400 hover:text-neutral-200'
          }`}
        >
          All Skills ({skills.length})
        </button>
        <button
          onClick={() => setActiveTab('Software & AI')}
          className={`flex-1 min-w-[110px] py-1.5 px-3 text-xs font-medium rounded-md transition-colors whitespace-nowrap text-center ${
            activeTab === 'Software & AI'
              ? 'bg-neutral-800 text-white shadow-sm'
              : 'text-neutral-400 hover:text-neutral-200'
          }`}
        >
          Software & AI
        </button>
        <button
          onClick={() => setActiveTab('Hardware & Embedded Systems')}
          className={`flex-1 min-w-[130px] py-1.5 px-3 text-xs font-medium rounded-md transition-colors whitespace-nowrap text-center ${
            activeTab === 'Hardware & Embedded Systems'
              ? 'bg-neutral-800 text-white shadow-sm'
              : 'text-neutral-400 hover:text-neutral-200'
          }`}
        >
          Hardware & Embedded
        </button>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredSkills.map((skill) => {
          const isHardware = skill.category === 'Hardware & Embedded Systems';
          return (
            <div
              key={skill.name}
              className="p-5 rounded-xl bg-neutral-900/40 border border-neutral-850 hover:border-neutral-750 transition-all duration-200 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Header row with unboxed discipline label */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {isHardware ? (
                      <Cpu className="w-4 h-4 text-cyan-400" />
                    ) : (
                      <Terminal className="w-4 h-4 text-emerald-400" />
                    )}
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {skill.name}
                    </h3>
                  </div>

                  <span className="text-[11px] font-mono text-neutral-400">
                    {skill.proficiency}
                  </span>
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Typical Applications / Key uses (Clean unboxed text list) */}
              <div className="pt-3 border-t border-neutral-800/60 space-y-1.5">
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block">
                  APPLICATIONS & PROTOCOLS:
                </span>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-neutral-300">
                  {skill.typicalUses.map((use, i) => (
                    <React.Fragment key={use}>
                      <span className="text-neutral-300">{use}</span>
                      {i < skill.typicalUses.length - 1 && (
                        <span className="text-neutral-600" aria-hidden="true">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredSkills.length === 0 && (
        <div className="text-center py-12 text-sm text-neutral-500">
          No skills found matching &ldquo;{searchQuery}&rdquo;. Try another search term.
        </div>
      )}
    </section>
  );
};
