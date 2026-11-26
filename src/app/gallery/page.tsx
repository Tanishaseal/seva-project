import type { Metadata } from "next";
import { UnderConstruction } from "@/components/construction/UnderConstruction";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Gallery | ${siteConfig.orgFullName}`,
  description: `Gallery page for ${siteConfig.orgFullName} ${siteConfig.subName} - Website Under Construction.`,
};

export default function GalleryPage() {
  return <UnderConstruction brandName="Gallery" />;
}
