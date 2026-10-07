import React, { useState, useEffect } from 'react';
import { Mail, Send, Check, Copy, ArrowUp, ExternalLink, MessageSquare, CheckCircle2, RefreshCw } from 'lucide-react';

interface ContactProps {
  isAdmin?: boolean;
}

interface StoredInquiry {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

export const Contact: React.FC<ContactProps> = ({ isAdmin = false }) => {
  const primaryDisplayEmail = "mahmoud mabrok565622";
  const primaryEmail = "mahmoudrofa5656@gmail.com";
  const secondaryEmail = "mahmoudmabrok565622@gmail.com";

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submittedMessage, setSubmittedMessage] = useState<StoredInquiry | null>(null);
  const [inquiries, setInquiries] = useState<StoredInquiry[]>([]);

  // Load inquiries from localStorage if admin
  useEffect(() => {
    try {
      const saved = localStorage.getItem('mahmoud_portfolio_inquiries');
      if (saved) {
        setInquiries(JSON.parse(saved));
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  const handleCopyEmail = (address: string) => {
    navigator.clipboard.writeText(address);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const getSubjectText = () => {
    return formData.subject.trim()
      ? `[Portfolio Inquiry] ${formData.subject.trim()} - from ${formData.name.trim() || 'Visitor'}`
      : `[Portfolio Inquiry] Engineering Collaboration - from ${formData.name.trim() || 'Visitor'}`;
  };

  const getBodyText = () => {
    return `Hello Mahmoud,\n\nName: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\nSubject: ${formData.subject.trim() || 'Engineering Consultation'}\n\nMessage:\n${formData.message.trim()}\n\n---\nSent via Mahmoud's Engineering Portfolio Website`;
  };

  // Gmail Web Compose URL (works on all devices without requiring native desktop email client)
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(primaryEmail)}&cc=${encodeURIComponent(secondaryEmail)}&su=${encodeURIComponent(getSubjectText())}&body=${encodeURIComponent(getBodyText())}`;

  // Default Mailto URL
  const mailtoUrl = `mailto:${primaryEmail}?cc=${encodeURIComponent(secondaryEmail)}&subject=${encodeURIComponent(getSubjectText())}&body=${encodeURIComponent(getBodyText())}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    const newInquiry: StoredInquiry = {
      id: `inquiry-${Date.now()}`,
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject.trim() || 'Engineering Consultation',
      message: formData.message.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', month: 'short', day: 'numeric' })
    };

    // Save locally for admin viewing
    try {
      const updated = [newInquiry, ...inquiries];
      setInquiries(updated);
      localStorage.setItem('mahmoud_portfolio_inquiries', JSON.stringify(updated));
    } catch {
      // Ignore
    }

    setSubmittedMessage(newInquiry);

    // Automatically trigger the mailto link via an anchor click so it isn't blocked by iframe
    const mailtoLink = document.createElement('a');
    mailtoLink.href = mailtoUrl;
    mailtoLink.target = '_top';
    mailtoLink.rel = 'noopener noreferrer';
    document.body.appendChild(mailtoLink);
    mailtoLink.click();
    document.body.removeChild(mailtoLink);
  };

  const handleCopyFormattedMessage = () => {
    if (!submittedMessage) return;
    const textToCopy = `To: ${primaryEmail}\nSubject: ${submittedMessage.subject}\nFrom: ${submittedMessage.name} <${submittedMessage.email}>\n\nMessage:\n${submittedMessage.message}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2200);
  };

  const handleResetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setSubmittedMessage(null);
  };

  return (
    <footer id="contact" className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-neutral-900">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
        {/* Left Column: Direct Inquiries & Contact Details */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-3">
            <div className="text-xs font-mono tracking-wider text-cyan-400">
              COMMUNICATION & INQUIRIES
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Let&rsquo;s Build Something Resilient
            </h2>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Open to robotics prototyping, embedded hardware firmware development, AI edge deployments, and collaborative engineering initiatives.
            </p>
          </div>

          {/* Email Info Card with Copy */}
          <div className="p-5 rounded-xl bg-neutral-900/40 border border-neutral-850 space-y-4">
            <span className="text-xs font-mono text-neutral-400 block">DIRECT EMAIL ADDRESSES:</span>
            
            {/* Primary Address */}
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-3 p-3 rounded-lg bg-neutral-950 border border-neutral-800">
                <div className="flex items-center gap-2.5 min-w-0">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <div className="truncate">
                    <span className="text-sm font-mono text-neutral-200 block truncate">
                      {primaryEmail}
                    </span>
                    <span className="text-[11px] text-neutral-500 font-mono">
                      {primaryDisplayEmail}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={() => handleCopyEmail(primaryEmail)}
                    className="px-2.5 py-1.5 text-xs rounded bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-mono text-[11px]">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="text-[11px] font-mono">Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${primaryEmail}`}
                    className="p-1.5 text-xs rounded bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 hover:text-white transition-colors"
                    title="Open mail application"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="text-[11px] text-neutral-400 leading-relaxed">
              Click <a href={`mailto:${primaryEmail}`} className="text-cyan-400 hover:underline font-mono">{primaryEmail}</a> or use the form to dispatch an email via Gmail or your mail app.
            </div>
          </div>

          {/* Quick Specifications */}
          <div className="space-y-2 text-xs text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Available for technical consultations & hardware prototypes</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Specialized in ESP32, FreeRTOS, Python, and Edge AI</span>
            </div>
          </div>

          {/* Admin Inquiries Log */}
          {isAdmin && inquiries.length > 0 && (
            <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Admin Inbox ({inquiries.length})</span>
                </span>
                <button
                  onClick={() => {
                    localStorage.removeItem('mahmoud_portfolio_inquiries');
                    setInquiries([]);
                  }}
                  className="text-[10px] text-neutral-500 hover:text-red-400 underline"
                >
                  Clear log
                </button>
              </div>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {inquiries.map((inq) => (
                  <div key={inq.id} className="p-2.5 rounded bg-neutral-950 border border-neutral-850 text-xs space-y-1">
                    <div className="flex items-center justify-between text-neutral-400 text-[10px] font-mono">
                      <span className="text-neutral-200 font-semibold">{inq.name} ({inq.email})</span>
                      <span>{inq.timestamp}</span>
                    </div>
                    <div className="text-neutral-300 font-medium">{inq.subject}</div>
                    <div className="text-neutral-400 text-[11px] line-clamp-2">{inq.message}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Contact Form & Dispatch Hub */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-neutral-900/30 border border-neutral-850">
          {!submittedMessage ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-neutral-300">YOUR NAME *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-neutral-950 border border-neutral-800 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-neutral-300">EMAIL ADDRESS *</label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@organization.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-neutral-950 border border-neutral-800 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-neutral-300">PROJECT SUBJECT</label>
                <input
                  type="text"
                  placeholder="Robotics collaboration, embedded firmware, consultation..."
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-neutral-950 border border-neutral-800 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-neutral-300">MESSAGE *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your hardware prototype, AI pipeline, or goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-neutral-950 border border-neutral-800 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-cyan-500"
                />
              </div>

              {/* Action buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div className="text-[11px] text-neutral-500">
                  Pre-fills to <span className="font-mono text-neutral-400">{primaryEmail}</span>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {/* Direct Gmail Web link button */}
                  {formData.name && formData.message && (
                    <a
                      href={gmailUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 text-xs font-medium rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 transition-colors flex items-center gap-1.5"
                    >
                      <span>Open in Gmail</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <button
                    type="submit"
                    className="px-6 py-2.5 text-xs font-semibold rounded-lg bg-white text-neutral-950 hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </form>
          ) : (
            /* Post-Submit Confirmation & Multi-channel Dispatch Options */
            <div className="space-y-6 animate-in fade-in zoom-in-95 duration-200">
              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/80 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Message Prepared for Mahmoud!</span>
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Your message has been formatted for <span className="font-mono text-emerald-300">{primaryEmail}</span>.
                  Select your preferred method below to finalize transmission:
                </p>
              </div>

              {/* Ready to send buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* 1. Open in Gmail Web */}
                <a
                  href={gmailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-cyan-500/60 hover:bg-neutral-900 transition-all flex items-center justify-between group"
                >
                  <div className="space-y-0.5 text-left">
                    <div className="text-xs font-bold text-white group-hover:text-cyan-300 flex items-center gap-1.5">
                      <Mail className="w-4 h-4 text-cyan-400" />
                      <span>Send via Gmail Web</span>
                    </div>
                    <div className="text-[11px] text-neutral-400">
                      Opens Gmail compose tab pre-filled
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-cyan-300" />
                </a>

                {/* 2. Open in Default Mail Client */}
                <a
                  href={mailtoUrl}
                  className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-cyan-500/60 hover:bg-neutral-900 transition-all flex items-center justify-between group"
                >
                  <div className="space-y-0.5 text-left">
                    <div className="text-xs font-bold text-white group-hover:text-cyan-300 flex items-center gap-1.5">
                      <Send className="w-4 h-4 text-emerald-400" />
                      <span>Default Email App</span>
                    </div>
                    <div className="text-[11px] text-neutral-400">
                      Opens Apple Mail, Outlook, or mobile app
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-cyan-300" />
                </a>
              </div>

              {/* Message Preview & One-Click Copy */}
              <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                    COMPOSED MESSAGE PREVIEW
                  </span>
                  <button
                    onClick={handleCopyFormattedMessage}
                    className="px-2.5 py-1 text-xs rounded bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    {copiedMessage ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-mono text-[11px]">Copied Message!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="text-[11px] font-mono">Copy Message Text</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="text-xs font-mono text-neutral-300 p-3 rounded bg-neutral-900/50 border border-neutral-850 whitespace-pre-line leading-relaxed max-h-40 overflow-y-auto">
                  {getBodyText()}
                </div>
              </div>

              {/* Reset form button */}
              <div className="flex justify-end pt-2">
                <button
                  onClick={handleResetForm}
                  className="text-xs text-neutral-400 hover:text-white underline flex items-center gap-1"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Send another message</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Minimalist Sub-Footer */}
      <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-neutral-300">Mahmoud</span>
          <span aria-hidden="true">·</span>
          <span>Hardware & Software Engineering Portfolio</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={`mailto:${primaryEmail}`}
            className="text-neutral-400 hover:text-neutral-200 transition-colors font-mono"
          >
            {primaryEmail}
          </a>
          <span aria-hidden="true" className="text-neutral-700">|</span>
          <a
            href="#top"
            className="flex items-center gap-1 text-neutral-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
};
