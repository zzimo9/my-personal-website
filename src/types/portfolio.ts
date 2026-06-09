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

export type HeroStat = {
  label: string;
  value: string;
};

export type TickerItem = {
  label: string;
  meta: string;
};

export type MethodStep = {
  number: string;
  title: string;
  body: string;
};

export type PortfolioContent = {
  eyebrow: string;
  title: string;
  intro: string;
  links: PortfolioLink[];
  heroStats: HeroStat[];
  highlights: PortfolioHighlight[];
  tickerItems: TickerItem[];
  focusAreas: FocusArea[];
  featuredProjects: FeaturedProject[];
  methodSteps: MethodStep[];
  capabilityGroups: CapabilityGroup[];
};
