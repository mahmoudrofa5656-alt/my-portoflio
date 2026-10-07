import React, { useState } from 'react';
import { Project } from '../types';
import { X, Plus, Sparkles } from 'lucide-react';

interface AddProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProject: (project: Project) => void;
}

export const AddProjectModal: React.FC<AddProjectModalProps> = ({
  isOpen,
  onClose,
  onAddProject
}) => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [category, setCategory] = useState<Project['category']>('Hardware & Robotics');
  const [description, setDescription] = useState('');
  const [longDescription, setLongDescription] = useState('');
  const [tagsInput, setTagsInput] = useState('');
  const [hardwareInput, setHardwareInput] = useState('');
  const [softwareInput, setSoftwareInput] = useState('');
  const [highlightsInput, setHighlightsInput] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    const newProject: Project = {
      id: `custom-proj-${Date.now()}`,
      title: title.trim(),
      subtitle: subtitle.trim() || 'Custom Engineered Prototype',
      category,
      description: description.trim(),
      longDescription: longDescription.trim() || description.trim(),
      tags: tagsInput ? tagsInput.split(',').map(t => t.trim()).filter(Boolean) : ['Custom Hardware', 'Engineering'],
      hardware: hardwareInput ? hardwareInput.split('\n').map(h => h.trim()).filter(Boolean) : [],
      software: softwareInput ? softwareInput.split('\n').map(s => s.trim()).filter(Boolean) : [],
      keyHighlights: highlightsInput ? highlightsInput.split('\n').map(hl => hl.trim()).filter(Boolean) : ['Engineered by Mahmoud'],
      metricsOrOutcome: 'Admin Added Prototype'
    };

    onAddProject(newProject);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-neutral-950 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden text-neutral-100 my-8 animate-in fade-in zoom-in-95"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between p-6 border-b border-neutral-800 bg-neutral-900/50">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <h2 className="text-lg font-bold text-white">Add New Engineering Project</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          <div className="space-y-1">
            <label className="text-xs font-mono text-neutral-300">PROJECT TITLE *</label>
            <input
              type="text"
              required
              placeholder="e.g. Quadruped Bipedal Explorer Robot"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-lg bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-mono text-neutral-300">SUBTITLE / TECH HOOK</label>
              <input
                type="text"
                placeholder="e.g. Inverse kinematics built with ESP32 & PCA9685"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-lg bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-mono text-neutral-300">CATEGORY *</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as Project['category'])}
                className="w-full px-3 py-2 text-sm rounded-lg bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-cyan-500"
              >
                <option value="Hardware & Robotics">Hardware & Robotics</option>
                <option value="Software & AI">Software & AI</option>
                <option value="Assistive Tech">Assistive Tech</option>
                <option value="Automation">Automation</option>
              </select>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-mono text-neutral-300">BRIEF DESCRIPTION *</label>
            <textarea
              required
              rows={2}
              placeholder="Short summary displayed on the card..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-lg bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-mono text-neutral-300">DETAILED SYSTEM ARCHITECTURE</label>
            <textarea
              rows={3}
              placeholder="Full system overview, telemetry flow, sensor calibration..."
              value={longDescription}
              onChange={(e) => setLongDescription(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-lg bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-mono text-neutral-300">TAGS (COMMA SEPARATED)</label>
            <input
              type="text"
              placeholder="ESP32, C++, Robotics, L298N"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-lg bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-mono text-neutral-300">HARDWARE COMPONENTS (1 PER LINE)</label>
              <textarea
                rows={3}
                placeholder="ESP32 Dual-Core MCU&#10;PCA9685 PWM Board&#10;L298N Driver"
                value={hardwareInput}
                onChange={(e) => setHardwareInput(e.target.value)}
                className="w-full px-3 py-2 text-xs font-mono rounded-lg bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-mono text-neutral-300">SOFTWARE STACK (1 PER LINE)</label>
              <textarea
                rows={3}
                placeholder="Embedded C++ / FreeRTOS&#10;Python Telemetry GUI&#10;PWM Kinematics"
                value={softwareInput}
                onChange={(e) => setSoftwareInput(e.target.value)}
                className="w-full px-3 py-2 text-xs font-mono rounded-lg bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-mono text-neutral-300">KEY HIGHLIGHTS (1 PER LINE)</label>
            <textarea
              rows={2}
              placeholder="Under 50ms latency response&#10;Custom battery management circuit"
              value={highlightsInput}
              onChange={(e) => setHighlightsInput(e.target.value)}
              className="w-full px-3 py-2 text-xs font-mono rounded-lg bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div className="pt-4 flex items-center justify-end gap-3 border-t border-neutral-800">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-xs font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 transition-colors shadow-sm flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              <span>Save & Publish to Gallery</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
