"use client";

import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { socialLinks, personalInfo } from "@/lib/data";

export default function Footer() {
    return (
        <footer
            id="contact"
            className="border-t-2 border-foreground bg-background py-6"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-2">
                    <p className="text-xs text-muted-foreground font-mono">
                        © {new Date().getFullYear()} {personalInfo.name}. Built with
                        Next.js & ❤️
                    </p>
                </div>
            </div>
        </footer>
    );
}
