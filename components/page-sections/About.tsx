"use client";

import { personalInfo } from "@/lib/data";
import { Code as Code2, Sparkles } from "lucide-react";
import RetroWindow from "../retro-window";

export default function About() {
    return (
        <section id="about" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl sm:text-5xl font-bold mb-12 font-mono">
                    About.me
                </h2>

                <RetroWindow filename="about.txt" className="max-w-7xl m-auto">
                    <div className="space-y-6 p-6">
                        <div>
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <Code2 className="w-6 h-6" />
                                Who I Am
                            </h3>
                            <p className="text-lg leading-relaxed">{personalInfo.desc}</p>
                        </div>

                        <div className="border-t-4 border-dashed border-foreground pt-6">
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <Sparkles className="w-6 h-6" />
                                Currently Learning
                            </h3>
                            <p className="text-lg leading-relaxed">
                                {personalInfo.currentlyLearning}
                            </p>
                        </div>

                        <div className="border-t-4 border-dashed border-foreground pt-6">
                            <div className="grid sm:grid-cols-3 gap-4">
                                <div className="border-2 border-foreground p-4 text-center">
                                    <div className="text-3xl font-bold mb-2">1+</div>
                                    <div className="text-sm font-mono">Years Experience</div>
                                </div>
                                <div className="border-2 border-foreground p-4 text-center">
                                    <div className="text-3xl font-bold mb-2">6+</div>
                                    <div className="text-sm font-mono">Projects Completed</div>
                                </div>
                                <div className="border-2 border-foreground p-4 text-center">
                                    <div className="text-3xl font-bold mb-2">10+</div>
                                    <div className="text-sm font-mono">Technologies Learned</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </RetroWindow>
            </div>
        </section>
    );
}
