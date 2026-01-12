"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Trophy, Phone, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const timelineEvents = [
  {
    date: "Dec 24",
    title: "REGISTRATION",
    description: "Applications open",
    status: "completed",
  },
  {
    date: "Dec 24 – Jan 9",
    title: "SUBMISSION",
    description: "Complete challenges",
    status: "active",
  },
  {
    date: "Jan 20",
    title: "DEADLINE",
    description: "Final submissions",
    status: "upcoming",
  },
  {
    date: "Jan 25",
    title: "SHORTLIST",
    description: "Results announced",
    status: "upcoming",
  },
  {
    date: "Feb 2026",
    title: "FINALE",
    description: "Offline experience",
    status: "upcoming",
  },
];

const contacts = [
  { name: "Prapanch J", phone: "+91 94464 47965" },
  { name: "Nandana Vipin", phone: "+91 75599 10963" },
  { name: "Diya Benni", phone: "+91 83010 73978" },
];

export default function DatesContactPageClient() {
  return (
    <div className="flex flex-col">
      {/* Hero - Minimal */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <p className="text-sm text-foreground/50 uppercase tracking-widest mb-6">
              Timeline & Support
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold font-heading text-foreground leading-[0.9] mb-8">
              Important
              <br />
              <span className="text-primary">Dates</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Timeline - Horizontal Numbered Style (Reference 1 & 2) */}
      <section className="py-20 md:py-32 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-sm text-foreground/50 uppercase tracking-widest">
              Event Timeline
            </p>
          </motion.div>

          <div className="space-y-0">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center gap-6 md:gap-12 py-6 border-b border-border group cursor-pointer hover:bg-background/50 transition-colors px-4 -mx-4 ${
                  event.status === 'active' ? 'bg-primary/5' : ''
                }`}
              >
                {/* Number */}
                <span className="text-foreground/30 font-medium text-sm w-6 shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Date Badge */}
                <span className={`px-4 py-2 rounded-full text-sm font-medium shrink-0 ${
                  event.status === 'active' 
                    ? 'bg-primary text-primary-foreground' 
                    : event.status === 'completed'
                    ? 'bg-foreground text-background'
                    : 'bg-muted text-foreground'
                }`}>
                  {event.date}
                </span>

                {/* Title */}
                <h3 className={`text-2xl md:text-3xl lg:text-4xl font-extrabold font-heading flex-1 ${
                  event.status === 'active' ? 'text-foreground' : 'text-foreground/70'
                } group-hover:text-foreground transition-colors`}>
                  {event.title}
                </h3>

                {/* Description */}
                <span className="hidden md:block text-sm text-foreground/50 max-w-xs text-right">
                  {event.description}
                </span>

                {/* Arrow */}
                <ArrowUpRight className="h-5 w-5 text-foreground/30 group-hover:text-primary transition-colors shrink-0" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Section - Large Typography */}
      <section className="py-20 md:py-32 bg-foreground text-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Trophy + Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center mb-8"
              >
                <Trophy className="h-10 w-10 text-primary-foreground" />
              </motion.div>
              <p className="text-background/50 mb-4 uppercase tracking-widest text-sm">
                Recognition
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading mb-6">
                People
                <br />
                <span className="text-primary">Champion</span>
              </h2>
              <p className="text-background/60 text-lg max-w-md">
                A title recognizing exceptional leadership, ethical judgment, 
                and people-first decision making throughout the Olympus journey.
              </p>
            </motion.div>

            {/* Right: Large decorative text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 0.1, x: 0 }}
              viewport={{ once: true }}
              className="hidden lg:block"
            >
              <span 
                className="text-[200px] font-extrabold leading-none text-background select-none"
                style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}
              >
                PC
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section - Card Grid (Reference 5 Style) */}
      <section id="contact" className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-sm text-foreground/50 uppercase tracking-widest mb-4">
              Get In Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-foreground">
              Contact Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {contacts.map((contact, index) => (
              <motion.a
                key={contact.name}
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`rounded-3xl p-8 cursor-pointer transition-all block ${
                  index === 0 ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80'
                }`}
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${
                  index === 0 ? 'bg-primary-foreground/20' : 'bg-foreground/10'
                }`}>
                  <Phone className={`h-6 w-6 ${index === 0 ? 'text-primary-foreground' : 'text-foreground'}`} />
                </div>
                <h3 className="text-xl font-bold font-heading mb-2">
                  {contact.name}
                </h3>
                <p className={`text-lg font-medium ${
                  index === 0 ? 'text-primary-foreground/80' : 'text-primary'
                }`}>
                  {contact.phone}
                </p>
              </motion.a>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-foreground/50 mt-12"
          >
            For general inquiries, contact the HR Interest Group, µLearn
          </motion.p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-foreground mb-6">
              Ready to begin
              <br />
              your journey?
            </h2>
            <p className="text-lg text-foreground/60 mb-10">
              Join us and prove your leadership potential.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="default" size="xl" className="rounded-full px-10">
                <Link href="/program">
                  View Program
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="rounded-full px-10">
                <Link href="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
