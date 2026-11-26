import type { Metadata } from "next";
import { UnderConstruction } from "@/components/construction/UnderConstruction";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Contact Us | ${siteConfig.orgFullName}`,
  description: `Contact Us page for ${siteConfig.orgFullName} ${siteConfig.subName} - Website Under Construction.`,
};

export default function ContactPage() {
  return <UnderConstruction brandName="Contact Us" />;
}
