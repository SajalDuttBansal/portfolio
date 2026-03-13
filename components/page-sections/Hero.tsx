"use client";

import { personalInfo, socialLinks } from "@/lib/data";
import { motion } from "framer-motion";
import { Download, ArrowRight, User, Circle } from "lucide-react";

export default function Hero() {

    const downloadResumeButtonClick = () => {
        console.log("download resume");

    }

    return (
        <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        {/* Intro Section */}
                        <div className="space-y-4">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
                            >
                                Hello.
                                <br />
                                I&apos;m {personalInfo.name.split(" ")[0]}.
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="text-xl sm:text-2xl text-muted-foreground font-mono"
                            >
                                {personalInfo.role}
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                                className="text-lg leading-relaxed max-w-xl"
                            >
                                {personalInfo.bio}
                            </motion.p>
                        </div>

                        {/* Download Resume & project button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="flex flex-wrap gap-4"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={downloadResumeButtonClick}
                                className="border-4 border-black rounded-xl dark:border-white px-8 py-4 font-black text-lg bg-white dark:bg-background shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all inline-flex items-center gap-2"
                            >
                                <Download className="w-6 h-6 font-bold" />
                                Download Resume
                            </motion.button>

                            <a
                                href="#projects"
                                className="retro-button px-6 py-3 font-mono hover:scale-105 transition-transform inline-flex items-center gap-2"
                            >
                                View Projects
                                <ArrowRight className="w-4 h-4" />
                            </a>

                        </motion.div>

                        {/* Quick navigation links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 0.6 }}
                            className="border-t-4 border-dashed border-foreground pt-6"
                        >
                            <div className="grid grid-cols-4 gap-4 max-w-md">
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target="_blank"
                                        className="retro-quick-link border-2 border-foreground p-4 rounded-xl hover:bg-foreground hover:text-background transition-colors text-center"
                                    >
                                        <div className="text-sm font-mono">{link.label}</div>
                                        <ArrowRight className="w-4 h-4 mx-auto mt-2" />
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right animation */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="relative hidden lg:block"
                    >
                        <motion.div
                            animate={{
                                y: [0, -20, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="retro-illustration p-8 bg-background"
                        >

                            <div className="relative">
                                <div className="border-4 border-black dark:border-white rounded-2xl p-8 bg-gray-100 dark:bg-background shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] animate-float">
                                    <div className="space-y-4">
                                        {/* Retro Computer Illustration */}
                                        <div className="w-full aspect-square border-4 border-black dark:border-white rounded-lg bg-white dark:bg-black flex items-center justify-center relative overflow-hidden">
                                            <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-1 p-4">
                                                {[...Array(64)].map((_, i) => (
                                                    <div
                                                        key={i}
                                                        className={`rounded-sm transition-all duration-500 ${[10, 11, 18, 19, 26, 27, 34, 35, 42, 43, 50, 51].includes(i)
                                                            ? 'bg-black dark:bg-white dark:hover:bg-white/50 hover:bg-gray-400'
                                                            : 'bg-gray-200 dark:bg-white/10 dark:hover:bg-white/50 hover:bg-gray-400'
                                                            }`}
                                                        style={{ animationDelay: `${i * 20}ms` }}
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Window Buttons */}
                                        <div className="flex gap-2">
                                            <Circle className="w-6 h-6 fill-black dark:fill-white" />
                                            <Circle className="w-6 h-6 fill-black dark:fill-white" />
                                            <Circle className="w-6 h-6 fill-black dark:fill-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{
                                rotate: [0, 5, 0, -5, 0],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute -bottom-4 -right-4 w-24 h-24 border-4 border-foreground bg-background flex items-center justify-center text-4xl font-bold rounded-xl"
                        >
                            &lt;/&gt;
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
