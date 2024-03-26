"use client"
import Image from "next/image";
import { Sports, Collection } from './sections'
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className='relative dark:bg-dark dark:text-white'>
      <ThemeToggle />
      <section className="padding border-6 border">
        <Sports />
      </section>
      <section className="padding">
        <Collection />
      </section>
    </main>
  );
}
