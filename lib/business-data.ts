export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, '') || 'https://shankarcaterers.in'

export const BUSINESS_INFO = {
  name: 'Shankar Caterers & Sweets',
  shortName: 'Shankar Caterers',
  tagline: 'Authentic North Indian Catering & Sweets in East Delhi',
  phone: '+91 98180 79174',
  phoneHref: 'tel:+919818079174',
  whatsappHref:
    'https://wa.me/919818079174?text=Hello%20Shankar%20Caterers%20%26%20Sweets%2C%20I%20would%20like%20to%20know%20catering%20prices%20and%20availability.',
  address: {
    streetAddress: 'Shop No 115, Street No 13, near Shiv Mandir, Karkardooma',
    locality: 'Karkardooma',
    region: 'East Delhi',
    city: 'Delhi',
    postalCode: '110092',
    country: 'IN',
    full: 'Shop No 115, Street No 13, near Shiv Mandir, Karkardooma, East Delhi, 110092',
  },
  geo: {
    latitude: 28.6488424,
    longitude: 77.3031802,
  },
  googleMapsUrl:
    'https://www.google.com/maps/place/Shankar+Caterers+%26+Sweets/@28.6488424,77.3031802,17z',
  googleMapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.3631785381126!2d77.3031802!3d28.6488424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb3a7bde7fff%3A0xe8ee976402eef32e!2sShankar%20Caterers%20%26%20Sweets!5e0!3m2!1sen!2sin!4v1772881532032!5m2!1sen!2sin',
  stats: {
    events: '500+',
    experience: '30+',
    rating: '5.0',
  },
  hours: 'Open 7 Days a Week (8:00 AM – 11:00 PM)',
} as const

export const SERVICE_AREAS = [
  'Karkardooma',
  'Anand Vihar',
  'Preet Vihar',
  'Surajmal Vihar',
  'Shreshtha Vihar',
  'Dayanand Vihar',
  'Nirman Vihar',
  'AGCR Enclave',
  'Hargovind Enclave',
  'Manak Vihar',
  'Ram Vihar',
  'Kiran Vihar',
  'Vivek Vihar',
  'Vivek Vihar Phase II',
  'Triveni Apartment',
  'Jhilmil Colony',
  'Mansarovar Park',
  'Jwala Nagar',
  'Vishwas Nagar',
  'Bhola Nath Nagar',
  'Mukesh Nagar',
  'Kasturba Nagar',
  'Ram Nagar',
  'Azad Nagar',
  'Krishna Nagar',
  'Jagat Puri',
  'Laxmi Nagar',
  'Patparganj',
  'Mayur Vihar',
  'Shahdara',
  'Geeta Colony',
  'Vaishali (Ghaziabad)',
  'Kaushambi (Ghaziabad)',
  'East Delhi & Delhi NCR',
] as const

export const AREA_GROUPS = [
  {
    zone: 'Karkardooma & Vihar Enclaves',
    areas: [
      'Karkardooma',
      'Anand Vihar',
      'Surajmal Vihar',
      'Shreshtha Vihar',
      'Dayanand Vihar',
      'AGCR Enclave',
      'Hargovind Enclave',
      'Manak Vihar',
      'Ram Vihar',
      'Kiran Vihar',
    ],
  },
  {
    zone: 'Vivek Vihar, Jhilmil & Shahdara',
    areas: [
      'Vivek Vihar',
      'Vivek Vihar Phase II',
      'Triveni Apartment',
      'Jhilmil Colony',
      'Mansarovar Park',
      'Jwala Nagar',
      'Vishwas Nagar',
      'Bhola Nath Nagar',
      'Mukesh Nagar',
      'Kasturba Nagar',
      'Ram Nagar',
      'Azad Nagar',
      'Shahdara',
    ],
  },
  {
    zone: 'Preet Vihar, Laxmi Nagar & Krishna Nagar',
    areas: [
      'Preet Vihar',
      'Nirman Vihar',
      'Laxmi Nagar',
      'Krishna Nagar',
      'Jagat Puri',
      'Patparganj',
      'Mayur Vihar',
      'Geeta Colony',
    ],
  },
  {
    zone: 'Ghaziabad Border & NCR',
    areas: ['Vaishali (Ghaziabad)', 'Kaushambi (Ghaziabad)', 'East Delhi & Delhi NCR'],
  },
] as const

export const PRICING_PACKAGES = [
  {
    title: 'Small Gathering & Home Party',
    guests: '20 – 40 Guests',
    priceRange: '₹350 – ₹550 / plate',
    totalEstimate: 'Est. ₹8,000 – ₹22,000',
    badge: 'Ideal for 20–40 Guests',
    description:
      'Perfect for intimate housewarmings (Griha Pravesh), family pujas, anniversary dinners, and home birthday parties.',
    includes: [
      '2 Starters / Chaat Items',
      '1 Paneer Curry + Dal Makhani + Seasonal Veg',
      'Assorted Tandoori Breads & Jeera Rice',
      'Raita, Salad & 1 Hot Sweet (Gulab Jamun)',
    ],
  },
  {
    title: 'Birthday, Kitty & Corporate Party',
    guests: '50 – 150 Guests',
    priceRange: '₹450 – ₹750 / plate',
    totalEstimate: 'Est. ₹25,000 – ₹95,000',
    badge: 'Most Popular',
    description:
      'Complete buffet setup with uniformed staff and optional live Delhi chaat counter for birthdays, engagements, and office events.',
    includes: [
      'Live Chaat Counter (Golgappa, Tikki, Papdi)',
      '3 Starters + 2 Paneer/Main Curries + Dal Makhani',
      'Live Tandoor (Butter Naan, Lachha Paratha)',
      'Pulao, Raita, Papad & 2 Traditional Sweets',
    ],
  },
  {
    title: 'Grand Wedding & Reception',
    guests: '200 – 1,000+ Guests',
    priceRange: '₹750 – ₹1,400+ / plate',
    totalEstimate: 'Custom Banquet Packages',
    badge: 'Full Wedding Setup',
    description:
      'Royal North Indian wedding catering with multiple live food stalls, brass chafing dishes, halwai mithai, and full hospitality.',
    includes: [
      '4+ Live Chaat & Street Food Counters',
      'Welcome Drinks, Mocktails & 5+ Starters',
      'Royal Main Course Spread & Live Tandoor',
      'Pure-Ghee Halwai Sweets (Jalebi, Rabri, Kaju Katli)',
    ],
  },
] as const

export const MENU_ITEMS = [
  {
    name: 'Golgappa (Pani Puri)',
    category: 'Live Chaat',
    image: '/images/menu-golgappa.jpg',
    alt: 'Crispy Golgappa Pani Puri served with spiced mint water by Shankar Caterers East Delhi',
    description:
      'Crispy puris served with chilled tangy mint-tamarind water and spiced potato-chickpea filling.',
    badge: 'Guest Favorite',
  },
  {
    name: 'Papdi Chaat',
    category: 'Live Chaat',
    image: '/images/menu-papdi-chaat.jpg',
    alt: 'Fresh North Indian Papdi Chaat with yogurt, pomegranate, and chutneys',
    description:
      'Crunchy papdis layered with spiced potatoes, chilled yogurt, tamarind-mint chutneys, and pomegranate.',
  },
  {
    name: 'Aloo Tikki Chaat',
    category: 'Live Chaat',
    image: '/images/menu-aloo-tikki.jpg',
    alt: 'Golden crispy Aloo Tikki Chaat for wedding and party catering in Karkardooma',
    description:
      'Desi ghee roasted golden potato patties topped with spiced chole, curd, and signature chutneys.',
  },
  {
    name: 'Dahi Bhalla',
    category: 'Live Chaat',
    image: '/images/menu-dahi-bhalla.jpg',
    alt: 'Soft Dahi Bhalla garnished with pomegranate and roasted cumin',
    description:
      'Melt-in-mouth lentil dumplings soaked in creamy sweetened yogurt with roasted cumin and chutneys.',
  },
  {
    name: 'Chole Bhature',
    category: 'Main Course',
    image: '/images/menu-chole-bhature.jpg',
    alt: 'Authentic Delhi style Chole Bhature catering in East Delhi',
    description:
      'Fluffy golden bhaturas paired with rich, slow-simmered Amritsari chole and pickled onions.',
    badge: 'Delhi Classic',
  },
  {
    name: 'Shahi & Butter Paneer',
    category: 'Main Course',
    image: '/images/menu-paneer.jpg',
    alt: 'Rich creamy Shahi Paneer and Paneer Butter Masala by Shankar Caterers',
    description:
      'Fresh cottage cheese simmered in velvety tomato-cashew gravy, aromatic spices, and pure cream.',
    badge: 'Bestseller',
  },
  {
    name: 'Dal Makhani',
    category: 'Main Course',
    image: '/images/menu-dal-makhani.jpg',
    alt: 'Slow-cooked creamy Dal Makhani in copper handi',
    description:
      'Overnight slow-cooked black urad lentils finished with white butter, cream, and kasuri methi.',
  },
  {
    name: 'Tandoori Butter Naan',
    category: 'Breads',
    image: '/images/menu-butter-naan.jpg',
    alt: 'Freshly baked Tandoori Butter Naan and Garlic Naan',
    description:
      'Hot, pillowy tandoor-baked naan and garlic naan brushed generously with fresh melted butter.',
  },
  {
    name: 'Royal North Indian Thali',
    category: 'Complete Meal',
    image: '/images/menu-thali.jpg',
    alt: 'Royal North Indian vegetarian catering thali in East Delhi',
    description:
      'Complete festive platter featuring paneer curry, dal makhani, jeera pulao, raita, naan, and gulab jamun.',
  },
] as const

export const GALLERY_ITEMS = [
  {
    image: '/images/gallery-wedding-buffet.jpg',
    title: 'Grand Wedding Buffet Setup',
    category: 'Weddings',
    description: 'Illuminated buffet counters, copper chafing dishes, and uniformed hospitality staff.',
    alt: 'Grand Indian wedding catering buffet setup in East Delhi by Shankar Caterers',
  },
  {
    image: '/images/gallery-live-chaat.jpg',
    title: 'Live Delhi Chaat Counter',
    category: 'Live Counters',
    description: 'Hygienic live golgappa, tikki, and papdi chaat stations loved by guests of all ages.',
    alt: 'Live Indian chaat counter catering in Karkardooma East Delhi',
  },
  {
    image: '/images/gallery-sweets.jpg',
    title: 'Traditional Pure-Ghee Sweets',
    category: 'Sweets & Mithai',
    description: 'Freshly prepared gulab jamun, kaju katli, jalebi, and motichoor ladoo for every occasion.',
    alt: 'Assorted North Indian sweets and mithai platter by Shankar Caterers & Sweets',
  },
  {
    image: '/images/hero-catering.jpg',
    title: 'Royal Feast Presentation',
    category: 'Banquet',
    description: 'Authentic North Indian curries, biryanis, and breads served hot with traditional flair.',
    alt: 'North Indian catering spread with brass chafing dishes and marigold decor',
  },
  {
    image: '/images/menu-thali.jpg',
    title: 'Corporate & Family Thalis',
    category: 'Corporate & Events',
    description: 'Balanced, hygienic, and delicious thali spreads tailored for corporate lunches and pujas.',
    alt: 'Corporate and family event North Indian thali catering in East Delhi',
  },
  {
    image: '/images/about-chefs.jpg',
    title: 'Hygienic Kitchen & Master Chefs',
    category: 'Our Kitchen',
    description: '30+ years of culinary mastery with strict food safety and daily-sourced fresh ingredients.',
    alt: 'Experienced Indian catering chefs preparing fresh dishes in hygienic kitchen',
  },
] as const

export const FAQ_ITEMS = [
  {
    question: 'How much does small catering for 20 to 40 guests cost in East Delhi?',
    answer:
      'For small home parties of 20 to 40 guests in East Delhi, catering typically ranges from ₹350 to ₹550 per plate (around ₹8,000 to ₹22,000 total) depending on your starter, main course, and dessert selection. Call +91 98180 79174 for a custom quote.',
  },
  {
    question: 'How much does catering cost for 100 guests or a birthday party in Delhi?',
    answer:
      'For 100 guests at a birthday party, anniversary, or corporate event, pure vegetarian North Indian catering generally ranges from ₹450 to ₹750 per plate (approx. ₹45,000 to ₹75,000) including buffet setup, live chaat counter options, and serving staff.',
  },
  {
    question: 'How much does wedding catering cost for 200 to 500 guests in East Delhi?',
    answer:
      'Wedding catering for 200 to 500 guests starts around ₹750 per plate and goes up to ₹1,400+ per plate depending on the number of live chaat counters, mocktails, main courses, and pure-ghee halwai sweets.',
  },
  {
    question: 'Which areas near Karkardooma, Shahdara, Preet Vihar, and Ghaziabad do you serve?',
    answer:
      'We serve Karkardooma, Anand Vihar, Preet Vihar, Surajmal Vihar, Shreshtha Vihar, Dayanand Vihar, Nirman Vihar, AGCR Enclave, Hargovind Enclave, Manak Vihar, Ram Vihar, Kiran Vihar, Vivek Vihar (Phase I & II), Triveni Apartment, Jhilmil Colony, Mansarovar Park, Jwala Nagar, Vishwas Nagar, Bhola Nath Nagar, Mukesh Nagar, Kasturba Nagar, Ram Nagar, Azad Nagar, Krishna Nagar, Jagat Puri, Laxmi Nagar, Patparganj, Mayur Vihar, Shahdara, plus Vaishali and Kaushambi in Ghaziabad.',
  },
  {
    question: 'Do you provide live chaat counters and Jain / pure-veg catering?',
    answer:
      'Yes! We specialize in 100% pure vegetarian North Indian catering, live Delhi chaat counters (Golgappa, Aloo Tikki, Papdi Chaat, Dahi Bhalla), and customizable Jain (no onion, no garlic) menus for pujas and weddings.',
  },
] as const
