"use client";

import { projects } from "@/lib/data";
import { ExternalLink, GithubIcon } from "lucide-react";
import Image from "next/image";
import RetroWindow from "../retro-window";

export default function Projects() {
    return (
        <section id="projects" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl sm:text-5xl font-bold mb-12 font-mono">
                    Projects
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <RetroWindow filename={project.filename} className="max-w-4xl m-auto" key={project.id}>
                            <div className="p-0">
                                <div className="relative h-48 overflow-hidden border-b-4 border-foreground">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
                                    />
                                </div>

                                <div className="p-6 space-y-4">
                                    <h3 className="text-2xl font-bold">{project.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 border-2 border-foreground text-xs font-mono rounded-xl"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex justify-between">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            className="retro-button inline-flex items-center gap-2 px-4 py-2 font-mono text-sm hover:scale-105 transition-transform"
                                        >
                                            Open Project
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                        <a
                                            href={project.code}
                                            target="_blank"
                                            className="retro-button inline-flex items-center gap-2 px-4 py-2 font-mono text-sm hover:scale-105 transition-transform"
                                        >
                                            Github
                                            <GithubIcon className="w-4 h-4" />
                                        </a>

                                    </div>

                                </div>
                            </div>
                        </RetroWindow>



                    ))}
                </div>
            </div>
        </section>
    );
}
