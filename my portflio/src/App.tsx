/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Spotlight } from './components/Spotlight';
import { Arsenal } from './components/Arsenal';
import { ProjectsGallery } from './components/ProjectsGallery';
import { Contact } from './components/Contact';
import { ProjectModal } from './components/ProjectModal';
import { AddProjectModal } from './components/AddProjectModal';
import { AdminFab } from './components/AdminFab';
import {
  FEATURED_PROJECTS,
  EDUCATION_DATA,
  SKILLS_DATA,
  GALLERY_PROJECTS
} from './data/portfolioData';
import { Project } from './types';

// ============================================================================
// ADMIN TOGGLE CONFIGURATION (As requested by the user):
// Change this email or use the interactive toggle button in the navbar/footer
// to test the conditional visibility of the Admin "Add" Floating Action Button.
// When set to "mahmoudrofa5656@gmail.com", the button is visible.
// ============================================================================
export const currentUserEmail = "mahmoudrofa5656@gmail.com";

export default function App() {
  // We initialize activeEmail with currentUserEmail, and allow interactive testing
  const [activeUserEmail, setActiveUserEmail] = useState<string>(currentUserEmail);
  const [galleryProjects, setGalleryProjects] = useState<Project[]>(GALLERY_PROJECTS);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const isAdmin = activeUserEmail.trim().toLowerCase() === "mahmoudrofa5656@gmail.com";

  const handleToggleAdmin = () => {
    if (isAdmin) {
      setActiveUserEmail("guest@example.com");
      showToast("Switched to Guest mode (Admin FAB hidden)");
    } else {
      setActiveUserEmail("mahmoudrofa5656@gmail.com");
      showToast("Switched to Admin mode (Admin FAB active)");
    }
  };

  const handleAddProject = (newProject: Project) => {
    setGalleryProjects(prev => [newProject, ...prev]);
    showToast(`Project "${newProject.title}" added to gallery!`);
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-[#0a0b0e] text-neutral-100 selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 px-4 py-2.5 rounded-lg bg-neutral-900 border border-neutral-700 text-xs font-mono text-neutral-200 shadow-xl animate-in fade-in slide-in-from-top-2">
          {toastMessage}
        </div>
      )}

      {/* Top Bar Navigation (3-Zone Contract) */}
      <Navbar 
        isAdmin={isAdmin} 
        onToggleAdmin={handleToggleAdmin} 
      />

      {/* Main Single-Page Content with Vertical Flow */}
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Spotlight Section (Featured Projects & DECI Education) */}
        <Spotlight
          projects={FEATURED_PROJECTS}
          education={EDUCATION_DATA}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 3. Technical Arsenal (Skills Matrix) */}
        <Arsenal skills={SKILLS_DATA} />

        {/* 4. Projects Gallery */}
        <ProjectsGallery
          projects={galleryProjects}
          onSelectProject={(project) => setSelectedProject(project)}
          isAdmin={isAdmin}
          onOpenAddModal={() => setIsAddModalOpen(true)}
        />

        {/* 5. Contact Section */}
        <Contact isAdmin={isAdmin} />
      </main>

      {/* 6. Admin Dynamic Feature: Floating Action Button (Only if email matches) */}
      <AdminFab
        currentUserEmail={activeUserEmail}
        onOpenAddModal={() => setIsAddModalOpen(true)}
      />

      {/* Project Architecture & Spec Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Admin Add New Project Modal */}
      <AddProjectModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddProject={handleAddProject}
      />
    </div>
  );
}
