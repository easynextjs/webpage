"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle, Copy, Github } from "lucide-react";
import React, { useState } from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex">
      <div className="flex flex-col p-5 md:p-8 space-y-4">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tighter !leading-tight text-left">
          Easiest way to start
          <br /> Next.js project
          <br /> with Cursor
        </h1>
        <p className="text-lg text-muted-foreground">
          Get Pro-created Next.js bootstrap just in seconds
        </p>
        <div className="flex items-center gap-2">
          <Button
            variant="secondary"
            size="lg"
            className="gap-2 w-fit rounded-full px-5 border border-black"
          >
            npm i -g @easynext/cli <Copy className="w-4 h-4" />
          </Button>
          <Button
            asChild
            size="lg"
            className="gap-2 w-fit rounded-full px-5 border border-black"
          >
            <a href="https://github.com/easynextjs">
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </Button>
        </div>
        <Section />
      </div>
    </div>
  );
}

function Section() {
  const [isExpanded, setIsExpanded] = useState(false);

  const items = [
    { href: "https://nextjs.org/", label: "Next.js" },
    { href: "https://ui.shadcn.com/", label: "shadcn/ui" },
    { href: "https://tailwindcss.com/", label: "Tailwind CSS" },
    { href: "https://www.framer.com/motion/", label: "framer-motion" },
    { href: "https://zod.dev/", label: "zod" },
    { href: "https://date-fns.org/", label: "date-fns" },
    { href: "https://ts-pattern.dev/", label: "ts-pattern" },
    { href: "https://es-toolkit.dev/", label: "es-toolkit" },
    { href: "https://zustand.docs.pmnd.rs/", label: "zustand" },
    { href: "https://supabase.com/", label: "supabase" },
    { href: "https://react-hook-form.com/", label: "react-hook-form" },
  ];

  const visibleItems = isExpanded ? items : items.slice(0, 5);

  return (
    <div className="flex flex-col py-5 md:py-8 space-y-2 opacity-75">
      <p className="font-semibold">What&apos;s Included</p>
      <div className="flex flex-col space-y-1 text-muted-foreground">
        {visibleItems.map((item) => (
          <SectionItem key={item.href} href={item.href}>
            {item.label}
          </SectionItem>
        ))}
        {!isExpanded && items.length > 5 && (
          <Button
            variant="ghost"
            className="w-fit text-muted-foreground hover:text-foreground"
            onClick={() => setIsExpanded(true)}
          >
            + {items.length - 5} more
          </Button>
        )}
      </div>
    </div>
  );
}

function SectionItem({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      className="flex items-center gap-2 underline"
      target="_blank"
    >
      <CheckCircle className="w-4 h-4" />
      <p>{children}</p>
    </a>
  );
}
