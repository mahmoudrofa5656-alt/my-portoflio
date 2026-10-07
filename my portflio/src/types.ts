export interface Project {
  id: string;
  title: string;
  category: 'Hardware & Robotics' | 'Software & AI' | 'Assistive Tech' | 'Automation';
  subtitle: string;
  description: string;
  longDescription: string;
  image?: string;
  tags: string[];
  hardware?: string[];
  software?: string[];
  keyHighlights: string[];
  metricsOrOutcome?: string;
  featured?: boolean;
}

export interface SkillItem {
  name: string;
  category: 'Software & AI' | 'Hardware & Embedded Systems';
  proficiency: string; // e.g., 'Advanced', 'Specialized', 'Core'
  description: string;
  typicalUses: string[];
}

export interface EducationItem {
  institution: string;
  initiative: string;
  focus: string;
  description: string;
  competencies: string[];
}
