"use client";

import { Monitor, Menu, X, Sun, Moon, User, User2 } from "lucide-react";
// import ThemeToggle from "./ThemeToggle";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { navLinks } from "@/lib/data";


export default function Navbar() {
    const { theme, setTheme } = useTheme()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="sticky top-0 z-50 bg-background border-b-3 border-foreground"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <a className="flex items-center gap-2 cursor-pointer" href="/">
                        <div className="retro-logo border-3 border-foreground p-2 rounded-xl">
                            <User2 className="w-6 h-6" />
                        </div>
                        <span className="font-bold text-xl hidden sm:block font-mono">
                            SAJAL.DEV
                        </span>
                    </a>

                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="retro-nav-link px-4 py-2 font-mono text-sm hover:bg-foreground hover:text-background transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-2">
                        {/* <ThemeToggle /> */}
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="hover:bg-primary/10 hover:text-primary transition-all duration-300 hidden lg:flex"
                        >
                            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100" />
                        </Button>

                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden retro-button p-2"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? (
                                <X className="w-5 h-5" />
                            ) : (
                                <Menu className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden border-t-4 border-foreground overflow-hidden"
                    >
                        <div className="px-4 py-4 space-y-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block retro-nav-link px-4 py-3 font-mono text-sm hover:bg-foreground hover:text-background transition-colors border-2 border-foreground"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
