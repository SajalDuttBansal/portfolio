"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface RetroWindowProps {
    title?: string;
    filename?: string;
    children: React.ReactNode;
    className?: string;
    headerClassName?: string;
}

export default function RetroWindow({
    title,
    filename,
    children,
    className,
    headerClassName,
}: RetroWindowProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{
                scale: 1.02,
                boxShadow: "8px 8px 0px rgba(0,0,0,0.2)",
            }}
            className={cn(
                "retro-window bg-background border-4 border-foreground rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]",
                className
            )}
        >
            <div
                className={cn(
                    "retro-window-header bg-foreground text-background px-4 py-2 flex items-center justify-between gap-4",
                    headerClassName
                )}
            >
                <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-background border-2 border-background"></div>
                        <div className="w-3 h-3 rounded-full bg-background border-2 border-background"></div>
                        <div className="w-3 h-3 rounded-full bg-background border-2 border-background"></div>
                    </div>
                </div>
                {(title || filename) && (
                    <div className="flex-1 text-center font-mono text-sm truncate">
                        {filename || title}
                    </div>
                )}
                <div className="w-16"></div>
            </div>

            <div className="retro-window-content">{children}</div>
        </motion.div>
    );
}
