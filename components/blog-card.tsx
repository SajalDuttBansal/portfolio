"use client"
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Circle } from 'lucide-react';

interface BlogCardProps {
    title: string;
    excerpt: string;
    image: string;
    filename: string;
    index: number;
}

export function BlogCard({
    title,
    excerpt,
    image,
    filename,
    index,
}: BlogCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, rotate: -5, scale: 0.8 }}
            whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{
                rotate: 2,
                scale: 1.05,
                zIndex: 10,
                boxShadow: "8px 8px 0px rgba(0,0,0,0.2)",
            }}
            className="retro-window border-4 border-black dark:border-white  shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] overflow-hidden cursor-pointer rounded-xl"
            style={{
                transform: `rotate(${index * -2}deg)`,
            }}
        >
            <div
                className={cn(
                    "retro-window-header bg-foreground text-background px-4 py-2 flex items-center justify-between gap-4",)}
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

            <div className="aspect-video bg-gray-300 dark:bg-gray-700 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover grayscale"
                />
            </div>

            <div className="p-6">
                <h3 className="text-xl font-black mb-2">{title}</h3>
                <p className="text-sm font-medium line-clamp-3">{excerpt}</p>
            </div>
        </motion.div>
    );
}
