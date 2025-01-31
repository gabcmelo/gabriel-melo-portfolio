"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from 'next/link'

export function HeroContent() {
  return (
    <div className="flex-1 z-100 flex flex-col justify-center items-center gap-6 text-center px-4">
      <h1 className="max-w-4xl text-white text-4xl md:text-5xl lg:text-6xl font-extrabold font-mono transition-all duration-700">
        Software Engineer, Cloud <br />Architecture & IA Development
      </h1>
      <p className="max-w-xl text-gray-300 text-base md:text-lg font-medium font-sans transition-all duration-700">
        I&apos;m Gabriel Melo, a passionate software engineer and solo entrepreneur dedicated to creating innovative solutions.
      </p>
      <div className="flex items-center gap-4 mt-6">
        <Avatar className="w-12 h-12">
          <AvatarImage src="https://github.com/gabcmelo.png" alt="Gabriel Melo" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Button className="text-white text-sm font-bold font-mono hover:bg-gray-700 transition-colors duration-300">
         
          <Link href="https://github.com/gabcmelo"> About Me</Link>
        </Button>
      </div>
    </div>
  );
}
