"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

import Image from "next/image"

const navigation = [
    { name: "Home", href: "/" },
    { name: "Diensten", href: "/#diensten" }, // Anchor to section for now, later maybe a page
    { name: "Aanpak", href: "/aanpak" },
    { name: "Tarieven", href: "/tarieven" },
    { name: "Over ons", href: "/over-naareuropa" }, // Mapped to About
]

export function Header() {
    const pathname = usePathname()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center space-x-2 font-bold text-lg tracking-tight group">
                    <div className="relative w-10 h-10 flex items-center justify-center">
                        <img 
                            src="/logo.png" 
                            alt="Naar Europa Logo" 
                            className="w-full h-full object-contain transition-transform group-hover:scale-110"
                        />
                    </div>
                    <div className="flex items-center">
                        <span className="text-primary text-xl">Naar</span>
                        <span className="ml-1 text-xl">Europa</span>
                    </div>
                </Link>
                <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                    {navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "transition-colors hover:text-foreground/80",
                                pathname === item.href ? "text-foreground" : "text-foreground/60"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Button asChild size="sm">
                        <Link href="/contact">Plan een intake</Link>
                    </Button>
                </nav>
                <div className="flex items-center md:hidden">
                    <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </Button>
                </div>
            </div>
            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden border-t p-4 bg-background">
                    <div className="flex flex-col space-y-4">
                        {navigation.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-sm font-medium text-foreground/70 hover:text-foreground"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Button asChild className="w-full">
                            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Plan een intake</Link>
                        </Button>
                    </div>
                </div>
            )}
        </header>
    )
}
