import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface UseCase {
  title: string;
  category: string;
  description: string;
  benefits: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
