export type PortfolioLink = {
  label: string;
  href: string;
};

export type PortfolioHighlight = {
  label: string;
  value: string;
};

export type FocusArea = {
  title: string;
  body: string;
};

export type FeaturedProject = {
  name: string;
  summary: string;
  status: string;
  href: string;
  tags: string[];
};

export type CapabilityGroup = {
  title: string;
  items: string[];
};

export type PortfolioContent = {
  eyebrow: string;
  title: string;
  intro: string;
  links: PortfolioLink[];
  highlights: PortfolioHighlight[];
  focusAreas: FocusArea[];
  featuredProjects: FeaturedProject[];
  capabilityGroups: CapabilityGroup[];
};
