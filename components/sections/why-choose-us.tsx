import { CheckCircle, Leaf, Shield, Users, Clock, Wallet } from 'lucide-react'
import { BUSINESS_INFO } from '@/lib/business-data'

const reasons = [
  {
    icon: Leaf,
    title: 'Fresh Daily Ingredients',
    description:
      'Farm-fresh vegetables, pure desi ghee, and aromatic whole spices sourced daily for authentic taste.',
  },
  {
    icon: Shield,
    title: 'Hygienic Preparation',
    description:
      'Strict kitchen sanitation, gloved food handling, and RO-purified water for chaat and cooking.',
  },
  {
    icon: Users,
    title: 'Experienced Halwai & Staff',
    description:
      'Master North Indian chefs and courteous uniformed servers with 30+ years of event expertise.',
  },
  {
    icon: Wallet,
    title: 'Transparent Packages',
    description:
      'Flexible per-plate pricing with zero hidden charges—suited for both intimate and grand budgets.',
  },
  {
    icon: Clock,
    title: 'On-Time Setup & Service',
    description:
      'Punctual arrival, hot buffet counters, and seamless coordination with your venue or home.',
  },
  {
    icon: CheckCircle,
    title: '500+ Happy Celebrations',
    description:
      '5.0-star local reputation across Karkardooma and East Delhi with generations of repeat families.',
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-secondary/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            The Shankar Promise
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            Why East Delhi Trusts Us
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Three decades of consistent taste, hygiene, and warm Indian hospitality
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-7 shadow-sm border border-border hover:shadow-md hover:border-primary/30 transition-all duration-300"
              >
                <div className="mb-4 inline-flex p-3 bg-secondary rounded-xl">
                  <Icon size={22} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {reason.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="mt-14 bg-foreground text-background rounded-2xl p-8 sm:p-10 shadow-xl">
          <div className="grid sm:grid-cols-3 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-background/15">
            <div className="pt-2 sm:pt-0">
              <div className="font-serif text-4xl font-bold text-accent mb-1">
                {BUSINESS_INFO.stats.events}
              </div>
              <p className="text-sm text-background/80">Events Successfully Catered</p>
            </div>
            <div className="pt-6 sm:pt-0">
              <div className="font-serif text-4xl font-bold text-accent mb-1">
                {BUSINESS_INFO.stats.experience}
              </div>
              <p className="text-sm text-background/80">Years of Catering Heritage</p>
            </div>
            <div className="pt-6 sm:pt-0">
              <div className="font-serif text-4xl font-bold text-accent mb-1">
                {BUSINESS_INFO.stats.rating} ★
              </div>
              <p className="text-sm text-background/80">Customer Satisfaction Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
