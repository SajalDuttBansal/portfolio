"use client";

import { personalInfo, socialLinks } from "@/lib/data";
import { Mail } from "lucide-react";
import RetroWindow from "../retro-window";

export default function Contact() {
    return (
        <section id="contact" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl sm:text-5xl font-bold mb-12 font-mono">
                    Contact
                </h2>

                <RetroWindow filename="connect.me" className="max-w-7xl m-auto">
                    <div className="space-y-6 p-6">
                        <div>
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <Mail className="w-6 h-6" />
                                Let's Connect
                            </h3>
                            <p className="text-lg leading-relaxed">
                                Feel free to reach out for projects, collaborations, or just to say hello!
                            </p>
                        </div>

                        <div className="border-t-4 border-dashed border-foreground pt-6">
                            <div className="grid sm:grid-cols-3 gap-4">
                                <a className="border-2 border-foreground p-4 text-center rounded"
                                    href={`mailto:${personalInfo.email}`}>
                                    <div className="text-sm font-mono">{personalInfo.email}</div>
                                </a>
                                <div className="flex gap-4">
                                    {socialLinks.map((link) => {

                                        if (link.label == "Email") return;

                                        const Icon = link.icon;
                                        return (
                                            <a
                                                key={link.label}
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="retro-button p-3 hover:scale-110 transition-transform"
                                                aria-label={link.label}
                                            >
                                                <Icon className="w-6 h-6" />
                                            </a>
                                        );
                                    })}
                                </div>

                            </div>
                        </div>
                    </div>
                </RetroWindow>
            </div>
        </section>
    );
}
