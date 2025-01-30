import { SanityLive } from "@/sanity/lib/live";
import { DisableDraftMode } from "@/app/components/DisableDraftMode";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
import React from "react";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-pastel-green/40 min-h-screen">
      {children}
      <SanityLive />
      {(await draftMode()).isEnabled && (
        <>
          <DisableDraftMode />
          <VisualEditing />
        </>
      )}
    </div>
  );
}
