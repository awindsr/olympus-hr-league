"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactFormSection() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-primary p-10 md:p-14 rounded-[3rem] shadow-2xl"
        >
            <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-black/60">First Name</label>
                        <input
                            type="text"
                            placeholder="John"
                            className="w-full bg-transparent border-b-2 border-black/10 focus:border-black py-2 outline-none placeholder:text-black/30 font-bold transition-colors"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-black/60">Last Name</label>
                        <input
                            type="text"
                            placeholder="Doe"
                            className="w-full bg-transparent border-b-2 border-black/10 focus:border-black py-2 outline-none placeholder:text-black/30 font-bold transition-colors"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-black/60">Email Address</label>
                        <input
                            type="email"
                            placeholder="you@email.com"
                            className="w-full bg-transparent border-b-2 border-black/10 focus:border-black py-2 outline-none placeholder:text-black/30 font-bold transition-colors"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-black/60">Phone Number</label>
                        <input
                            type="tel"
                            placeholder="+91 00000 00000"
                            className="w-full bg-transparent border-b-2 border-black/10 focus:border-black py-2 outline-none placeholder:text-black/30 font-bold transition-colors"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-black/60">College / Organization</label>
                    <input
                        type="text"
                        placeholder="Your Institution"
                        className="w-full bg-transparent border-b-2 border-black/10 focus:border-black py-2 outline-none placeholder:text-black/30 font-bold transition-colors"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-black/60">Tell us about your interest</label>
                    <textarea
                        rows={2}
                        placeholder="How would you like to contribute or what are you looking to gain?"
                        className="w-full bg-transparent border-b-2 border-black/10 focus:border-black py-2 outline-none placeholder:text-black/30 font-bold transition-colors resize-none"
                    />
                </div>

                <div className="space-y-4">
                    <p className="text-xs font-black uppercase tracking-widest text-black/60">How can we help?</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            "Participant Registration",
                            "Partnership / Sponsorship",
                            "Speaking Slot",
                            "Volunteer Opportunities",
                            "µLearn HR Interest Group",
                            "Other Inquiry"
                        ].map((item) => (
                            <label key={item} className="flex items-center gap-3 group cursor-pointer">
                                <div className="w-5 h-5 rounded border-2 border-black/20 group-hover:border-black flex items-center justify-center transition-colors">
                                    <div className="w-2 h-2 bg-black rounded-sm opacity-0 group-has-checked:opacity-100 transition-opacity" />
                                </div>
                                <input type="checkbox" className="hidden" />
                                <span className="font-bold text-sm tracking-tight">{item}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <Button size="xl" className="w-full rounded-2xl h-16 text-lg font-black bg-black text-white hover:bg-black/90 group mt-4">
                    Let's get started!
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
            </form>
        </motion.div>
    );
}
