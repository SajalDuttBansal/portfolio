"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import RetroWindow from "../retro-window";

const skillCategories = [
    { title: "Frontend", skills: skills.frontend, color: "frontend" },
    { title: "Backend", skills: skills.backend, color: "backend" },
    { title: "Tools", skills: skills.tools, color: "tools" },
];

export default function Skills() {
    return (
        <section id="skills" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl sm:text-5xl font-bold mb-12 font-mono">
                    Skills.set
                </h2>

                <div className="grid lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, idx) => (
                        <RetroWindow
                            key={category.title}
                            filename={`${category.title.toLowerCase()}.json`}
                            className="h-full"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                className="space-y-6 p-6"
                            >
                                <h3 className="text-2xl font-bold mb-6">{category.title}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, skillIdx) => (
                                        <motion.span
                                            key={skill}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            whileHover={{ scale: 1.1 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                delay: idx * 0.1 + skillIdx * 0.05,
                                                duration: 0.3,
                                            }}
                                            className="retro-badge px-4 py-2 border-2 border-foreground font-mono text-sm cursor-pointer hover:bg-foreground hover:text-background transition-colors"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        </RetroWindow>
                    ))}
                </div>
            </div>
        </section>
    );
}
