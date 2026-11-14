export interface SiteConfig {
  name: string;
  tagline: string;
  title: string;
  description: string;
  statusText: string;
  message: string;
  year: number;
}

export const siteConfig: SiteConfig = {
  name: "Seva Project",
  tagline: "Dedicated to Service & Community",
  title: "Website Under Construction | Seva Project",
  description:
    "We are currently crafting a new digital home for Seva Project. Stay tuned for our upcoming launch.",
  statusText: "In Active Development",
  message:
    "Our website is currently under construction as we build an experience dedicated to empowering our community. We are working hard behind the scenes to launch soon.",
  year: new Date().getFullYear(),
};
