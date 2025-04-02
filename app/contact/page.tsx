"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20">
      <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl orange">
          Contact Us
        </h1>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Steam
        </h2>
        <Button variant="secondary" asChild className="background-orange">
          <Link
            href="https://steamcommunity.com/groups/CerberusStompingGrounds"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Steam Group Link"
          >
            Steam Group
          </Link>
        </Button>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Twitter
        </h2>
        <Button variant="secondary" asChild className="background-orange">
          <Link
            href="https://twitter.com/csg_exile"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Twitter Link"
          >
            Twitter
          </Link>
        </Button>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Email
        </h2>
        <Button variant="secondary" asChild className="background-orange">
          <Link
            href="mailto:developer@csgcommunity.com"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Email Link"
          >
            Email Us
          </Link>
        </Button>
      </div>
    </div>
  );
}
