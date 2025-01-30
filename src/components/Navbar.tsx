"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-black text-white">
      {/* Clerk Authentication Buttons on the left */}
      <div className="flex items-center">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>

      {/* Logo and Navigation Links on the right */}
      <div className="flex items-center gap-4">
        {/* Logo */}
        {/*<Link href="/">
          <Image
            src="/M2.png" // Path to your logo in the `public` folder
            alt="معين"
            width={100} // Adjust the width as needed
            height={50} // Adjust the height as needed
            className="object-contain" // Ensure the logo scales properly
          />
        </Link>*/}

        {/* Navigation Links */}
        <Link
          href="/about"
          className="text-lg font-semibold border border-transparent hover:border-white px-4 py-2 rounded transition-all"
        >
          عين
        </Link>
        <Link
          href="/contact"
          className="text-lg font-semibold border border-transparent hover:border-white px-4 py-2 rounded transition-all"
        >
          الرئيسية
        </Link>
      </div>
    </nav>
  );
}