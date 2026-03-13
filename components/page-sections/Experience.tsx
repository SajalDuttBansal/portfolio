"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experience } from "@/lib/data";
import { ChevronDown, ExternalLink, Calendar, MapPin } from "lucide-react";

export default function Experience() {
    const [expandedProject, setExpandedProject] = useState<string | null>(null);

    const toggleProject = (jobId: number, projectName: string) => {
        const key = `${jobId}-${projectName}`;
        setExpandedProject(expandedProject === key ? null : key);
    };

    return (
        <section id="experience" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl sm:text-5xl font-bold mb-12 font-mono">
                    Experience
                </h2>

                <div className="max-w-7xl m-auto">
                    <div className="space-y-6 ">
                        {experience.map((job) => (
                            <motion.div
                                key={job.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                whileHover={{
                                    scale: 1.02,
                                    boxShadow: "8px 8px 0px rgba(0,0,0,0.2)",
                                }}
                                viewport={{ once: true }}
                                className="border-4 border-foreground bg-background rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]"
                            >
                                <div className="p-6 space-y-4">
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                                        <div>
                                            <h3 className="text-2xl font-bold">
                                                {job.role}{" "}
                                                <span className="text-muted-foreground">—</span>{" "}
                                                {job.company}
                                            </h3>
                                            <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" />
                                                    {job.duration}
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <MapPin className="w-4 h-4" />
                                                    {job.location}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-3 mt-6">
                                        {job.projects.map((project) => {
                                            const projectKey = `${job.id}-${project.name}`;
                                            const isExpanded = expandedProject === projectKey;

                                            return (
                                                <div
                                                    key={project.name}
                                                    className="border-2 border-foreground bg-background rounded-xl"
                                                >
                                                    <button
                                                        onClick={() => toggleProject(job.id, project.name)}
                                                        className="w-full p-4 flex items-start justify-between gap-4 hover:bg-muted/50 transition-colors text-left"
                                                    >
                                                        <div className="flex-1 min-w-0">
                                                            <div className="flex items-start gap-3">
                                                                <h4 className="font-bold text-lg">
                                                                    {project.name}
                                                                </h4>
                                                                <a
                                                                    href={project.link}
                                                                    onClick={(e) => e.stopPropagation()}
                                                                    className="shrink-0 hover:scale-110 transition-transform"
                                                                >
                                                                    <ExternalLink className="w-4 h-4" />
                                                                </a>
                                                            </div>
                                                            <p className="text-sm text-muted-foreground mt-1">
                                                                {project.description}
                                                            </p>
                                                            <div className="flex flex-wrap gap-2 mt-3">
                                                                {project.tech.map((tech) => (
                                                                    <span
                                                                        key={tech}
                                                                        className="px-2 py-1 text-xs border border-foreground font-mono rounded-xl"
                                                                    >
                                                                        {tech}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                        <motion.div
                                                            animate={{ rotate: isExpanded ? 180 : 0 }}
                                                            transition={{ duration: 0.3 }}
                                                            className="shrink-0"
                                                        >
                                                            <ChevronDown className="w-5 h-5" />
                                                        </motion.div>
                                                    </button>

                                                    <AnimatePresence>
                                                        {isExpanded && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: "auto", opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                transition={{ duration: 0.3 }}
                                                                className="overflow-hidden border-t-2 border-foreground"
                                                            >
                                                                <div className="p-4 bg-white/10">
                                                                    <p className="text-sm leading-relaxed mb-4">
                                                                        {project.fullDescription}
                                                                    </p>
                                                                    <a
                                                                        href={project.link}
                                                                        className="retro-button inline-flex items-center gap-2 px-4 py-2 text-sm font-mono hover:scale-105 transition-transform"
                                                                    >
                                                                        View Project
                                                                        <ExternalLink className="w-4 h-4" />
                                                                    </a>
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
