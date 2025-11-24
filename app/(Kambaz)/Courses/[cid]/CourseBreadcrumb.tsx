"use client";
import React from "react";
import { usePathname } from "next/navigation";

export default function CourseBreadcrumb({ course }: { course: { name: string } | undefined }) {
  const pathname = usePathname();
  const pathSegments = pathname?.split("/") || [];
  const section = pathSegments[pathSegments.length - 1] || "";
  const formattedSection = section.charAt(0).toUpperCase() + section.slice(1);

  return (
    <span> &gt; {formattedSection} </span>
  );
}
