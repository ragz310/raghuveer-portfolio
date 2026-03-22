import type { ReactNode } from "react";

export type Metric = {
  label: string;
  value: string;
};

export type ExperienceItem = {
  company: string;
  title: string;
  period: string;
  bullets: string[];
};

export type FeaturedProject = {
  title: string;
  description: string;
  tag: string;
  link: string;
};

export type Profile = {
  name: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  summary: string;
  metrics: Metric[];
  highlights: string[];
  experience: ExperienceItem[];
  skills: string[];
  featured: FeaturedProject[];
};

export type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export type ProfileProps = {
  profile: Profile;
};

export type ContainerProps = {
  children: ReactNode;
};