import type { Metadata } from "next";
import { UnderConstruction } from "@/components/construction/UnderConstruction";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Newsletter | ${siteConfig.orgFullName}`,
  description: `Newsletter page for ${siteConfig.orgFullName} ${siteConfig.subName} - Website Under Construction.`,
};

export default function NewsletterPage() {
  return <UnderConstruction brandName="Newsletter" />;
}
