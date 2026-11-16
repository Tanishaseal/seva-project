export interface SiteConfig {
  name: string;
  orgFullName: string;
  subName: string;
  tagline: string;
  founder: string;
  established: string;
  title: string;
  description: string;
  statusText: string;
  message: string;
  year: number;
}

export const siteConfig: SiteConfig = {
  name: "Seva Pratishthan",
  orgFullName: "Dakshin Kalikata Krira O Sanskriti Parishad",
  subName: "(Seva Pratishthan)",
  tagline: "Devoted in Human Service • ESTD. 1974",
  founder: "Sri Ajay Kumar Das (Founder)",
  established: "1974",
  title: "Website Under Construction | Dakshin Kalikata Krira O Sanskriti Parishad",
  description:
    "Official website of Dakshin Kalikata Krira O Sanskriti Parishad (Seva Pratishthan) - Devoted in Human Service since 1974.",
  statusText: "In Active Development",
  message:
    "Our official website is currently under construction as we prepare our digital platform to serve the community. We are working hard behind the scenes to launch soon.",
  year: new Date().getFullYear(),
};
