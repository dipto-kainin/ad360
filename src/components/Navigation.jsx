"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Navigation() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <header className="sticky top-0 z-50 p-5 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src="https://drbgg29kvmub6.cloudfront.net/assets/ad360/Ad360_Header.svg"
                        alt="Ad360 Logo"
                        width={150}
                        height={60}
                    />
                </Link>

                <nav className="hidden md:flex items-center space-x-6 gap-5">
                    <Link href="/" className="text-2xl font-medium">
                        Home
                    </Link>
                    <Link href="/about" className="text-2xl font-medium">
                        About
                    </Link>
                    <Link href="/pricing" className="text-2xl font-medium">
                        Pricing
                    </Link>
                    <Link href="/faq" className="text-2xl font-medium">
                        FAQ
                    </Link>
                    <Link href="/blogs" className="text-2xl font-medium">
                        Blogs
                    </Link>
                </nav>
                <Button
                    asChild
                    className="hidden md:flex bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-600 hover:to-blue-800 text-white font-bold p-6 rounded-full"
                >
                    <Link href="/demo">Book a Demo</Link>
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </Button>

                {isOpen && (
                    <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden">
                        <nav className="container flex flex-col space-y-4 py-4">
                            <Link href="/" className="text-sm font-medium">
                                Home
                            </Link>
                            <Link href="/about" className="text-sm font-medium">
                                About
                            </Link>
                            <Link
                                href="/pricing"
                                className="text-sm font-medium"
                            >
                                Pricing
                            </Link>
                            <Link href="/faq" className="text-sm font-medium">
                                FAQ
                            </Link>
                            <Link href="/blogs" className="text-sm font-medium">
                                Blogs
                            </Link>
                            <Button
                                asChild
                                className="bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-600 hover:to-blue-800 text-white font-bold p-6 rounded-full"
                            >
                                <Link href="/demo">Book a Demo</Link>
                            </Button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
