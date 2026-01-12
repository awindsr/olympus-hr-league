"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  Compass,
  Heart,
  Users,
  MessageSquare,
  Star,
  CheckCircle,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FinalePageClient() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Large Stats Style (Reference 2) */}
      <section className="min-h-screen flex flex-col justify-center py-20 md:py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Title */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-sm text-foreground/50 uppercase tracking-widest mb-6">
                Phase Two Experience
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold font-heading text-foreground leading-[0.9] mb-8">
                OFFLINE
                <br />
                <span className="text-primary">FINALE</span>
              </h1>
              <p className="text-lg text-foreground/60 max-w-md mb-10">
                A full-day immersive leadership experience for shortlisted 
                candidates who excel in the online pre-challenge.
              </p>
              <Button asChild variant="default" size="xl" className="rounded-full">
                <Link href="/dates-contact">
                  Check Important Dates
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>

            {/* Right: Stats Grid (Reference 2 Style) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-muted rounded-3xl p-8 flex flex-col"
              >
                <Calendar className="h-8 w-8 text-primary mb-4" />
                <span className="text-4xl md:text-5xl font-extrabold font-heading text-foreground mb-2">
                  FEB
                </span>
                <span className="text-sm text-foreground/50">2026</span>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-primary rounded-3xl p-8 flex flex-col text-primary-foreground"
              >
                <Clock className="h-8 w-8 mb-4" />
                <span className="text-4xl md:text-5xl font-extrabold font-heading mb-2">
                  6+
                </span>
                <span className="text-sm opacity-80">Hours of Activities</span>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-foreground rounded-3xl p-8 flex flex-col text-background col-span-2"
              >
                <MapPin className="h-8 w-8 text-primary mb-4" />
                <span className="text-3xl md:text-4xl font-extrabold font-heading mb-2">
                  Venue TBA
                </span>
                <span className="text-sm opacity-60">Location announced to shortlisted candidates</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Activities - Stats Style Bento Grid */}
      <section className="py-20 md:py-32 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold font-heading text-primary mb-16"
          >
            FINALE ACTIVITIES
          </motion.h2>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* First Row - 2 cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="group border border-background/20 rounded-2xl p-8 hover:border-primary/50 transition-all cursor-pointer relative overflow-hidden"
            >
              <Compass className="absolute -right-4 -bottom-4 h-32 w-32 text-background/5 group-hover:text-primary/10 transition-colors" />
              <span className="text-5xl md:text-6xl font-extrabold font-heading text-primary block mb-4">
                01
              </span>
              <h3 className="text-lg font-bold text-background/90 uppercase tracking-wide mb-2">
                Treasure Hunt
              </h3>
              <p className="text-sm text-background/50">
                Navigate strategic challenges that test teamwork and quick decision-making.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="group border border-background/20 rounded-2xl p-8 hover:border-primary/50 transition-all cursor-pointer relative overflow-hidden"
            >
              <Heart className="absolute -right-4 -bottom-4 h-32 w-32 text-background/5 group-hover:text-primary/10 transition-colors" />
              <span className="text-5xl md:text-6xl font-extrabold font-heading text-primary block mb-4">
                02
              </span>
              <h3 className="text-lg font-bold text-background/90 uppercase tracking-wide mb-2">
                CSR Program
              </h3>
              <p className="text-sm text-background/50">
                Partner with Pratheeksha for a meaningful community service initiative.
              </p>
            </motion.div>

            {/* Right tall card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="group bg-background text-foreground rounded-2xl p-8 hover:shadow-xl transition-all cursor-pointer md:row-span-2 flex flex-col justify-between relative overflow-hidden"
            >
              <MessageSquare className="absolute -right-4 -top-4 h-32 w-32 text-foreground/5 group-hover:text-primary/10 transition-colors" />
              <div>
                <span className="text-6xl md:text-7xl font-extrabold font-heading text-primary block mb-4">
                  04
                </span>
                <h3 className="text-xl font-bold text-foreground uppercase tracking-wide mb-3">
                  Mock Interviews
                </h3>
              </div>
              <p className="text-sm text-foreground/60">
                Face realistic interview scenarios with industry professionals. Demonstrate your communication skills and people-first approach.
              </p>
            </motion.div>

            {/* Bottom wide card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="group border border-background/20 rounded-2xl p-8 hover:border-primary/50 transition-all cursor-pointer md:col-span-2 relative overflow-hidden"
            >
              <Users className="absolute -right-4 -bottom-4 h-32 w-32 text-background/5 group-hover:text-primary/10 transition-colors" />
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                  <span className="text-5xl md:text-6xl font-extrabold font-heading text-primary block mb-4">
                    03
                  </span>
                  <h3 className="text-lg font-bold text-background/90 uppercase tracking-wide mb-2">
                    Team Problem Solving
                  </h3>
                </div>
                <p className="text-sm text-background/50 max-w-sm">
                  Tackle complex organizational challenges with no clear-cut solutions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Evaluation Criteria - Gallery Style with Pastel Boxes */}
      <section className="py-20 md:py-32 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold font-heading text-foreground mb-16"
          >
            Evaluation Criteria
          </motion.h2>

          {/* 8 Box Alternating Grid - 2 rows x 4 cols */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-border">
            {/* Row 1: Empty | Content | Empty | Content */}
            
            {/* Empty Box */}
            <div className="aspect-square bg-muted/30 border-r border-b border-border flex items-end p-6">
              <p className="text-sm font-bold text-foreground uppercase tracking-wide">
                Leadership
              </p>
            </div>

            {/* Content Box - Ethics */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 0.98 }}
              className="aspect-square bg-foreground text-background border-r border-b border-border flex flex-col items-center justify-center p-6 cursor-pointer transition-all"
            >
              <CheckCircle className="h-10 w-10 text-primary mb-4" />
              <p className="text-sm font-bold uppercase tracking-wide text-center">
                Moral Judgment & Ethics
              </p>
            </motion.div>

            {/* Empty Box */}
            <div className="aspect-square bg-muted/30 border-r border-b border-border flex items-end p-6">
              <p className="text-sm font-bold text-foreground uppercase tracking-wide">
                Communication
              </p>
            </div>

            {/* Content Box - Description */}
            <div className="aspect-square bg-muted/50 border-b border-border flex flex-col justify-between p-6">
              <p className="text-xs text-foreground leading-relaxed">
                We evaluate candidates on their ability to lead, communicate clearly, 
                make ethical decisions, and put people first.
              </p>
            </div>

            {/* Row 2: Content | Empty | Content | Empty */}

            {/* Content Box - Decorative Star */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="aspect-square bg-background border-r border-border flex items-center justify-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Star className="h-16 w-16 text-foreground" fill="currentColor" />
              </motion.div>
            </motion.div>

            {/* Empty Box */}
            <div className="aspect-square bg-muted/30 border-r border-border flex items-end p-6">
              <p className="text-sm font-bold text-foreground uppercase tracking-wide">
                People First
              </p>
            </div>

            {/* Content Box - Primary */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 0.98 }}
              className="aspect-square bg-primary text-primary-foreground border-r border-border flex flex-col items-center justify-center p-6 cursor-pointer transition-all"
            >
              <Heart className="h-10 w-10 mb-4" />
              <p className="text-sm font-bold uppercase tracking-wide text-center">
                Building Trust & Empathy
              </p>
            </motion.div>

            {/* Empty Box */}
            <div className="aspect-square bg-muted/30 flex items-end p-6">
              <p className="text-sm font-bold text-foreground uppercase tracking-wide">
                Guide & Inspire
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* People Champion Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="w-24 h-24 rounded-full bg-primary flex items-center justify-center mx-auto mb-8"
            >
              <Trophy className="h-12 w-12 text-primary-foreground" />
            </motion.div>
            <p className="text-foreground/50 mb-4">Top performers earn the title</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading text-primary mb-6">
              People Champion
            </h2>
            <p className="text-lg text-foreground/60 mb-10">
              A recognition for exceptional leadership, ethical judgment, 
              and people-first decision making.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="default" size="xl" className="rounded-full px-10">
                <Link href="/program">
                  View Program
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="rounded-full px-10">
                <Link href="/dates-contact">
                  Registration Info
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
