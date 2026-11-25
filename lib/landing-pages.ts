import { SITE_URL } from './business-data'

export interface LandingPageData {
  slug: string
  badge: string
  title: string
  metaTitle: string
  metaDescription: string
  h1: string
  subtitle: string
  image: string
  imageAlt: string
  nearbyAreas: string[]
  highlights: string[]
  startingPrice: string
  guestRange: string
  faq: {
    question: string
    answer: string
  }[]
}

export const LANDING_PAGES: LandingPageData[] = [
  {
    slug: 'caterers-in-karkardooma',
    badge: 'Karkardooma • East Delhi (110092)',
    title: 'Caterers in Karkardooma',
    metaTitle: 'Best Caterers in Karkardooma, East Delhi | Shankar Caterers & Sweets',
    metaDescription:
      'Top-rated North Indian caterers in Karkardooma, East Delhi (110092). Wedding, birthday, housewarming & live chaat counter catering near Karkardooma, AGCR Enclave, Hargovind Enclave & Anand Vihar. Call +91 98180 79174.',
    h1: 'Best North Indian Caterers in Karkardooma, East Delhi',
    subtitle:
      'Located right at Shop No 115, Street No 13, near Shiv Mandir, Karkardooma. Serving fresh, hygienic pure-veg catering and traditional sweets for 30+ years.',
    image: '/images/hero-catering.jpg',
    imageAlt: 'Shankar Caterers & Sweets North Indian catering setup in Karkardooma East Delhi',
    nearbyAreas: [
      'Karkardooma',
      'AGCR Enclave',
      'Hargovind Enclave',
      'Dayanand Vihar',
      'Shreshtha Vihar',
      'Surajmal Vihar',
      'Anand Vihar',
      'Kiran Vihar',
    ],
    highlights: [
      'Direct delivery from our Karkardooma kitchen within minutes',
      'Small 20–40 guest home parties to 1,000+ guest banquet weddings',
      'Live Golgappa, Aloo Tikki, Papdi Chaat & Dahi Bhalla counters',
      'Pure desi ghee North Indian curries, tandoori naan & halwai sweets',
    ],
    startingPrice: '₹350 / plate',
    guestRange: '20 – 1,000+ Guests',
    faq: [
      {
        question: 'Where is Shankar Caterers & Sweets located in Karkardooma?',
        answer:
          'We are located at Shop No 115, Street No 13, near Shiv Mandir, Karkardooma, East Delhi 110092. You can visit us or call +91 98180 79174.',
      },
      {
        question: 'Do you cater in AGCR Enclave, Hargovind Enclave, and Dayanand Vihar?',
        answer:
          'Yes, all these enclaves are within 5–10 minutes of our Karkardooma kitchen, ensuring piping-hot food and punctual setup.',
      },
    ],
  },
  {
    slug: 'caterers-in-preet-vihar',
    badge: 'Preet Vihar & Nirman Vihar',
    title: 'Caterers in Preet Vihar',
    metaTitle: 'Caterers in Preet Vihar & Nirman Vihar | Shankar Caterers & Sweets',
    metaDescription:
      'Trusted pure-veg North Indian caterers in Preet Vihar & Nirman Vihar, East Delhi. Birthday parties, pujas, corporate lunches & wedding catering with live chaat. Call +91 98180 79174.',
    h1: 'Trusted Catering Services in Preet Vihar & Nirman Vihar',
    subtitle:
      'Hygienic North Indian buffet spreads, live Delhi chaat counters, and customized party menus delivered across Preet Vihar, Nirman Vihar, and Swasthya Vihar.',
    image: '/images/gallery-wedding-buffet.jpg',
    imageAlt: 'Wedding and party catering buffet in Preet Vihar East Delhi',
    nearbyAreas: [
      'Preet Vihar',
      'Nirman Vihar',
      'Swasthya Vihar',
      'Laxmi Nagar',
      'Patparganj',
      'I.P. Extension',
    ],
    highlights: [
      'Popular for home birthdays, anniversaries, and griha pravesh in Preet Vihar',
      '100% pure vegetarian & Jain (no onion, no garlic) menu options',
      'Uniformed serving staff, brass chafing dishes & complete cleanup',
      'Transparent per-plate pricing starting at ₹350/plate',
    ],
    startingPrice: '₹350 / plate',
    guestRange: '20 – 800+ Guests',
    faq: [
      {
        question: 'What is the catering cost for a home party in Preet Vihar?',
        answer:
          'Home party catering for 20 to 40 guests in Preet Vihar starts around ₹350 to ₹550 per plate depending on your menu.',
      },
    ],
  },
  {
    slug: 'caterers-in-vivek-vihar',
    badge: 'Vivek Vihar Phase I & II • Jhilmil',
    title: 'Caterers in Vivek Vihar',
    metaTitle: 'Caterers in Vivek Vihar Phase I & II, Jhilmil Colony | Shankar Caterers',
    metaDescription:
      'Best North Indian caterers in Vivek Vihar, Vivek Vihar Phase II, Triveni Apartment & Jhilmil Colony. Wedding, kitty party, birthday & live chaat catering. Call +91 98180 79174.',
    h1: 'Top Caterers in Vivek Vihar Phase I & II, Jhilmil & Triveni Apartment',
    subtitle:
      'Serving families across Vivek Vihar, Ram Vihar, Manak Vihar, Triveni Apartment, and Jhilmil Colony with authentic North Indian taste and pure-ghee sweets.',
    image: '/images/gallery-live-chaat.jpg',
    imageAlt: 'Live chaat counter catering in Vivek Vihar East Delhi',
    nearbyAreas: [
      'Vivek Vihar',
      'Vivek Vihar Phase II',
      'Triveni Apartment',
      'Jhilmil Colony',
      'Ram Vihar',
      'Manak Vihar',
      'Surajmal Vihar',
    ],
    highlights: [
      'Fast setup across Vivek Vihar Phase I & II, DDA flats & Triveni Apartment',
      'Live Golgappa, Aloo Tikki, Dahi Bhalla & Chole Bhature counters',
      'Ideal for kitty parties, mata ki chowki, birthdays, and weddings',
      '30+ years of East Delhi halwai & catering heritage',
    ],
    startingPrice: '₹350 / plate',
    guestRange: '20 – 1,000+ Guests',
    faq: [
      {
        question: 'Do you provide catering inside Triveni Apartment and Jhilmil Colony?',
        answer:
          'Yes! We regularly cater society events, pujas, and home parties in Triveni Apartment, Jhilmil Colony, and Vivek Vihar Phase II.',
      },
    ],
  },
  {
    slug: 'caterers-in-anand-vihar',
    badge: 'Anand Vihar & Surajmal Vihar',
    title: 'Caterers in Anand Vihar',
    metaTitle: 'Caterers in Anand Vihar & Surajmal Vihar | Shankar Caterers & Sweets',
    metaDescription:
      'Premium North Indian catering in Anand Vihar, Surajmal Vihar, Shreshtha Vihar & Dayanand Vihar. Weddings, corporate events, and family gatherings. Call +91 98180 79174.',
    h1: 'North Indian & Wedding Caterers in Anand Vihar & Surajmal Vihar',
    subtitle:
      'From executive corporate lunches near Anand Vihar to grand wedding receptions in Surajmal Vihar and Shreshtha Vihar, we deliver unforgettable taste.',
    image: '/images/menu-thali.jpg',
    imageAlt: 'North Indian vegetarian catering thali in Anand Vihar East Delhi',
    nearbyAreas: [
      'Anand Vihar',
      'Surajmal Vihar',
      'Shreshtha Vihar',
      'Dayanand Vihar',
      'Karkardooma',
      'Kaushambi',
    ],
    highlights: [
      '5 minutes from Anand Vihar & Surajmal Vihar',
      'Corporate lunch boxes, seminar buffets & wedding banquets',
      'Fresh daily ingredients & RO-purified water preparation',
      'Custom per-plate menus for 20 to 1,000+ guests',
    ],
    startingPrice: '₹350 / plate',
    guestRange: '20 – 1,000+ Guests',
    faq: [
      {
        question: 'Do you offer corporate catering near Anand Vihar?',
        answer:
          'Yes, we provide both buffet setups and neatly packed executive thalis for offices and seminars in Anand Vihar and Karkardooma.',
      },
    ],
  },
  {
    slug: 'caterers-in-shahdara',
    badge: 'Shahdara • Vishwas Nagar • Mansarovar Park',
    title: 'Caterers in Shahdara',
    metaTitle: 'Caterers in Shahdara, Vishwas Nagar, Jwala Nagar & Mansarovar Park',
    metaDescription:
      'Affordable & hygienic caterers in Shahdara, Bhola Nath Nagar, Mukesh Nagar, Jwala Nagar, Vishwas Nagar, Kasturba Nagar, Ram Nagar, Azad Nagar & Mansarovar Park. Call +91 98180 79174.',
    h1: 'Best Caterers in Shahdara, Vishwas Nagar & Mansarovar Park',
    subtitle:
      'Serving every colony in Shahdara—including Bhola Nath Nagar, Mukesh Nagar, Jwala Nagar, Vishwas Nagar, Kasturba Nagar, Ram Nagar, and Azad Nagar—with 30+ years of trust.',
    image: '/images/menu-chole-bhature.jpg',
    imageAlt: 'Delhi style catering in Shahdara and Vishwas Nagar East Delhi',
    nearbyAreas: [
      'Shahdara',
      'Bhola Nath Nagar',
      'Mukesh Nagar',
      'Jwala Nagar',
      'Vishwas Nagar',
      'Kasturba Nagar',
      'Mansarovar Park',
      'Ram Nagar',
      'Azad Nagar',
    ],
    highlights: [
      'Full coverage across Shahdara, Vishwas Nagar & Mansarovar Park',
      'Budget-friendly packages for 20–40 guests and large wedding banquets',
      'Famous for Delhi Chaat, Shahi Paneer, Dal Makhani & Pure-Ghee Sweets',
      'Punctual arrival and experienced halwai team',
    ],
    startingPrice: '₹350 / plate',
    guestRange: '20 – 1,000+ Guests',
    faq: [
      {
        question: 'Do you deliver catering to Bhola Nath Nagar, Jwala Nagar, and Ram Nagar?',
        answer:
          'Yes, we regularly serve Bhola Nath Nagar, Mukesh Nagar, Jwala Nagar, Vishwas Nagar, Kasturba Nagar, Ram Nagar, Azad Nagar, and Mansarovar Park.',
      },
    ],
  },
  {
    slug: 'caterers-in-laxmi-nagar',
    badge: 'Laxmi Nagar • Krishna Nagar • Jagat Puri',
    title: 'Caterers in Laxmi Nagar & Krishna Nagar',
    metaTitle: 'Caterers in Laxmi Nagar, Krishna Nagar & Jagat Puri | Shankar Caterers',
    metaDescription:
      'Best pure-veg caterers in Laxmi Nagar, Krishna Nagar, Jagat Puri, and Geeta Colony. Birthday party, puja, corporate & wedding catering with prices. Call +91 98180 79174.',
    h1: 'Pure-Veg North Indian Caterers in Laxmi Nagar, Krishna Nagar & Jagat Puri',
    subtitle:
      'Delicious North Indian catering, live chaat stalls, and fresh mithai for homes, offices, and banquet halls across Laxmi Nagar, Krishna Nagar, and Jagat Puri.',
    image: '/images/menu-paneer.jpg',
    imageAlt: 'Shahi Paneer and North Indian catering in Laxmi Nagar and Krishna Nagar',
    nearbyAreas: [
      'Laxmi Nagar',
      'Krishna Nagar',
      'Jagat Puri',
      'Geeta Colony',
      'Nirman Vihar',
      'Preet Vihar',
    ],
    highlights: [
      'Quick service across Laxmi Nagar, Krishna Nagar, and Jagat Puri',
      'Custom menus for birthday parties, pujas, and office gatherings',
      'Hygienic kitchen standards and fresh daily spices',
      'Flexible per-plate pricing starting at ₹350/plate',
    ],
    startingPrice: '₹350 / plate',
    guestRange: '20 – 800+ Guests',
    faq: [
      {
        question: 'Can I book catering for 30 guests in Krishna Nagar or Laxmi Nagar?',
        answer:
          'Yes! Our small gathering package is designed specifically for 20 to 40 guests with full North Indian meal options.',
      },
    ],
  },
  {
    slug: 'caterers-in-vaishali-kaushambi',
    badge: 'Vaishali & Kaushambi • Ghaziabad',
    title: 'Caterers in Vaishali & Kaushambi',
    metaTitle: 'Caterers in Vaishali & Kaushambi, Ghaziabad | Shankar Caterers & Sweets',
    metaDescription:
      'Trusted East Delhi caterers serving Vaishali and Kaushambi (Ghaziabad). Wedding catering, society party catering, birthday parties & live chaat counters. Call +91 98180 79174.',
    h1: 'North Indian Caterers in Vaishali & Kaushambi, Ghaziabad',
    subtitle:
      'Just across the Anand Vihar border—we bring 30+ years of East Delhi catering excellence, live chaat counters, and traditional sweets to Vaishali & Kaushambi.',
    image: '/images/gallery-sweets.jpg',
    imageAlt: 'Indian sweets and wedding catering in Vaishali and Kaushambi Ghaziabad',
    nearbyAreas: ['Vaishali (Ghaziabad)', 'Kaushambi (Ghaziabad)', 'Anand Vihar', 'Patparganj'],
    highlights: [
      'Only 10–15 minutes from our Karkardooma kitchen via Anand Vihar',
      'Ideal for high-rise society parties, birthdays & wedding receptions',
      'Full buffet setup, live tandoor & uniformed hospitality team',
      'Transparent pricing with zero hidden charges',
    ],
    startingPrice: '₹400 / plate',
    guestRange: '25 – 1,000+ Guests',
    faq: [
      {
        question: 'Do you charge extra for catering in Vaishali or Kaushambi?',
        answer:
          'Vaishali and Kaushambi are right next to our Karkardooma kitchen, so our standard East Delhi per-plate packages apply.',
      },
    ],
  },
  {
    slug: 'small-party-catering-20-to-40-guests',
    badge: 'Small Party Cost Guide • 20–40 Guests',
    title: 'Small Party Catering (20–40 Guests)',
    metaTitle: 'Small Catering for 20 to 40 Guests Cost in East Delhi | Shankar Caterers',
    metaDescription:
      'Looking for small party catering for 20 or 40 guests near you with price? Transparent East Delhi packages starting ₹350/plate (₹8,000–₹22,000 total). Call +91 98180 79174.',
    h1: 'Small Party Catering for 20 to 40 Guests in East Delhi (With Price)',
    subtitle:
      'Hosting an intimate birthday, anniversary, or griha pravesh puja at home? Get restaurant-quality North Indian catering without overspending.',
    image: '/images/menu-thali.jpg',
    imageAlt: 'Small party catering for 20 to 40 guests in East Delhi',
    nearbyAreas: ['Karkardooma', 'Preet Vihar', 'Vivek Vihar', 'Laxmi Nagar', 'Shahdara', 'Vaishali'],
    highlights: [
      '20 Guests Estimated Cost: ₹7,500 – ₹11,000 (₹350–₹550 / plate)',
      '40 Guests Estimated Cost: ₹14,000 – ₹22,000 (₹350–₹550 / plate)',
      'Includes 2 starters, Paneer curry, Dal Makhani, Breads, Rice & Gulab Jamun',
      'Delivered hot in insulated containers or served as a neat home buffet',
    ],
    startingPrice: '₹350 / plate',
    guestRange: '20 – 40 Guests',
    faq: [
      {
        question: 'How much will it cost to feed 40 guests in East Delhi?',
        answer:
          'Feeding 40 guests with a complete pure-veg North Indian menu typically costs between ₹14,000 and ₹22,000 (₹350–₹550 per plate) depending on starters and sweets.',
      },
      {
        question: 'Do you take orders for just 20 guests?',
        answer:
          'Yes! We gladly cater small gatherings starting from 20 guests across Karkardooma, Preet Vihar, Vivek Vihar, Shahdara, and nearby areas.',
      },
    ],
  },
  {
    slug: 'wedding-catering-east-delhi',
    badge: 'Weddings & Receptions • 200–1,000+ Guests',
    title: 'Wedding Catering in East Delhi',
    metaTitle: 'Wedding Caterers in East Delhi & Karkardooma | Shankar Caterers & Sweets',
    metaDescription:
      'Experienced wedding caterers in East Delhi with 30+ years heritage. Royal North Indian menus, 4+ live chaat counters, pure-ghee halwai sweets & full banquet hospitality. Call +91 98180 79174.',
    h1: 'Royal Wedding & Reception Catering in East Delhi',
    subtitle:
      'Make your wedding feast unforgettable with 30+ years of East Delhi halwai expertise, gleaming copper buffet setups, live chaat stalls, and pure-ghee mithai.',
    image: '/images/gallery-wedding-buffet.jpg',
    imageAlt: 'Grand Indian wedding catering setup in East Delhi by Shankar Caterers',
    nearbyAreas: ['Karkardooma', 'Anand Vihar', 'Preet Vihar', 'Vivek Vihar', 'Shahdara', 'Delhi NCR'],
    highlights: [
      'Complete wedding, sagai, haldi, mehendi & reception catering',
      '4+ Live Chaat, Tandoor, Mocktail & Dessert Counters',
      'Pure-ghee Jalebi with Rabri, Kaju Katli & Motichoor Ladoo',
      'Packages for 200 to 1,000+ guests starting from ₹750 / plate',
    ],
    startingPrice: '₹750 / plate',
    guestRange: '200 – 1,000+ Guests',
    faq: [
      {
        question: 'How much does wedding catering cost for 200 guests in East Delhi?',
        answer:
          'Wedding catering for 200 guests typically ranges from ₹750 to ₹1,400+ per plate depending on the number of live counters, starters, and mithai items.',
      },
    ],
  },
  {
    slug: 'birthday-party-catering-east-delhi',
    badge: 'Birthday & House Party Catering',
    title: 'Birthday Party Catering',
    metaTitle: 'Birthday Party Caterers Near Me in East Delhi | Shankar Caterers & Sweets',
    metaDescription:
      'Hire the best birthday party caterers in East Delhi, Karkardooma, Preet Vihar & Vivek Vihar. Kid-friendly snacks, live chaat counter & affordable per-plate packages. Call +91 98180 79174.',
    h1: 'Birthday Party & Celebration Catering in East Delhi',
    subtitle:
      'Stress-free, delicious catering for kids’ and adults’ birthday parties—featuring live golgappa & tikki counters, paneer delicacies, and hot gulab jamun.',
    image: '/images/gallery-live-chaat.jpg',
    imageAlt: 'Birthday party live chaat catering in East Delhi',
    nearbyAreas: ['Karkardooma', 'Preet Vihar', 'Vivek Vihar', 'Laxmi Nagar', 'Krishna Nagar', 'Vaishali'],
    highlights: [
      'Customizable menus for 20 to 200+ birthday guests',
      'Popular live chaat & snack counters loved by kids and elders',
      'Packages starting at ₹350 / plate with zero cleanup stress',
      'Punctual delivery across East Delhi & Ghaziabad border',
    ],
    startingPrice: '₹350 / plate',
    guestRange: '20 – 200+ Guests',
    faq: [
      {
        question: 'Can we add a live golgappa and aloo tikki counter for a birthday party?',
        answer:
          'Yes! Live chaat counters are our most popular add-on for birthday parties in East Delhi.',
      },
    ],
  },
]

export function getLandingPageBySlug(slug: string): LandingPageData | undefined {
  return LANDING_PAGES.find((p) => p.slug === slug)
}

export function getLandingPageUrl(slug: string): string {
  return `${SITE_URL}/${slug}`
}
