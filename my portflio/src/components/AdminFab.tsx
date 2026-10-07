import React from 'react';
import { Plus } from 'lucide-react';

interface AdminFabProps {
  currentUserEmail: string;
  onOpenAddModal: () => void;
}

export const AdminFab: React.FC<AdminFabProps> = ({ currentUserEmail, onOpenAddModal }) => {
  // Strict conditional check as requested:
  // If the active user's email is exactly "mahmoudrofa5656@gmail.com", display a prominent "Add" floating action button.
  // If the email does not match, this button must remain hidden.
  const isAdmin = currentUserEmail.trim().toLowerCase() === "mahmoudrofa5656@gmail.com";

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 group">
      <button
        onClick={onOpenAddModal}
        aria-label="Add new engineering project (Admin)"
        className="flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-950/50 hover:shadow-emerald-500/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
      >
        <div className="p-0.5 rounded-full bg-neutral-950/10">
          <Plus className="w-5 h-5 stroke-[2.5]" />
        </div>
        <span className="font-semibold pr-1">Add Project</span>
      </button>

      {/* Discreet tooltip showing authenticated admin state */}
      <div className="pointer-events-none absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <div className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-750 text-[11px] font-mono text-emerald-400 whitespace-nowrap shadow-xl">
          Admin Authenticated: {currentUserEmail}
        </div>
      </div>
    </div>
  );
};
