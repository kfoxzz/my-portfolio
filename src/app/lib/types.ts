export type Position = {
  id: number;
  title: string;
  company: string;
  companyLink: string;
  dates: string;
  items: string[];
};

export type Project = {
  id: number;
  name: string;
  description: string;
  github: string;
  link?: string;
};
