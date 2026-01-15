// Centralized product data - single source of truth
// Add your own images to: public/images/
// File names: mustard.jpg, sunflower.jpg, radish.jpg, pokchoy.jpg, greenmoong.jpg, whiteradish.jpg
export const products = [
  {
    id: "mustard",
    name: "Mustard",
    image: "/images/mustard.jpg",
    flavor: "Peppery and bold",
    tag: "Immunity",
    nutrition: "Vitamin K, antioxidants, folate",
    note: "Peppery bite with detox-supporting compounds.",
    benefits: "Natural detox, boosts immunity.",
    color: "#f39c12",
  },
  {
    id: "sunflower",
    name: "Sunflower",
    image: "/images/sunflower.jpg",
    flavor: "Nutty and crunchy",
    tag: "Energy",
    nutrition: "Vitamin E, zinc, selenium",
    note: "Crunchy, nutty shoots packed with vitamin E and zinc.",
    benefits: "Supports skin health, heart health, immunity.",
    color: "#f4d03f",
  },
  {
    id: "radish",
    name: "Pink Radish",
    image: "/images/radish.jpg",
    flavor: "Spicy and vibrant",
    tag: "Digestion",
    nutrition: "Vitamin C, folate, fiber",
    note: "Vibrant heat with vitamin C and folate.",
    benefits: "Supports digestive health, adds color to dishes.",
    color: "#e74c3c",
  },
  {
    id: "pokchoy",
    name: "Pok Choy",
    image: "/images/pokchoy.jpg",
    flavor: "Mild and crisp",
    tag: "Calcium",
    nutrition: "Calcium, vitamin A, vitamin C",
    note: "Mild, crisp greens great for Asian dishes and salads.",
    benefits: "Supports bone health, rich in antioxidants.",
    color: "#27ae60",
  },
  {
    id: "greenmoong",
    name: "Green Moong",
    image: "/images/greenmoong.jpeg",
    flavor: "Fresh and nutty",
    tag: "Protein",
    nutrition: "Plant protein, iron, fiber",
    note: "Protein-rich sprouts perfect for Indian cuisine.",
    benefits: "High protein, supports digestion, energy boost.",
    color: "#2ecc71",
  },
  {
    id: "whiteradish",
    name: "White Radish",
    image: "/images/whiteradish.jpeg",
    flavor: "Mild and crunchy",
    tag: "Detox",
    nutrition: "Vitamin C, potassium, fiber",
    note: "Mild, refreshing sprouts with a subtle peppery finish.",
    benefits: "Supports liver health, aids digestion.",
    color: "#ecf0f1",
  },
];

export const whyMicrogreens = [
  {
    icon: "40x",
    title: "More Nutrients",
    description:
      "Microgreens contain up to 40 times more vitamins than mature plants.",
  },
  {
    icon: "0",
    title: "Chemicals Used",
    description: "Grown indoors with care. Zero pesticides, zero sprays.",
  },
  {
    icon: "✓",
    title: "Same Day Delivery",
    description: "Harvested and delivered same day for maximum freshness.",
  },
  {
    icon: "7+",
    title: "Days Fresh",
    description: "Proper cold-chain keeps your greens crisp for over a week.",
  },
];

export const howItWorks = [
  {
    step: "01",
    title: "Subscribe",
    description: "Choose your plan and tell us your favorite varieties.",
  },
  {
    step: "02",
    title: "We Grow",
    description: "Your greens are seeded fresh after you order.",
  },
  {
    step: "03",
    title: "Harvest",
    description: "Cut at peak nutrition and chilled immediately.",
  },
  {
    step: "04",
    title: "Deliver",
    description: "At your doorstep within hours of harvest.",
  },
];

export const trustBadges = [
  { title: "FSSAI Certified", subtitle: "Food safety registered" },
  { title: "Zero Pesticides", subtitle: "100% chemical free" },
  { title: "Same-Day Harvest", subtitle: "Cut fresh for you" },
  { title: "Non-GMO Seeds", subtitle: "Pure & natural" },
];

export const testimonials = [
  {
    name: "Yamini Bandi",
    role: "Software Engineer, Hyderabad",
    content:
      "I’ve been adding these microgreens to my daily meals and the difference is amazing. They are so fresh, crisp, and full of nutrients.!",
    rating: 5,
  },
  {
    name: "Joshuva Paul",
    role: "Entrepreneur, Hyderabad",
    content:
      "Perfect for my morning smoothies. Love knowing exactly where my food comes from.",
    rating: 5,
  },
  {
    name: "Prashanth Reddy",
    role: "Software Engineer, Hyderabad",
    content:
      "My kids love it! They usually won't touch leafy vegetables, but with microgreens they're getting all the nutrients without any fuss.",
    rating: 5,
  },
];

export const faqs = [
  {
    question: "How long do microgreens stay fresh?",
    answer:
      "When stored in the refrigerator, our microgreens stay fresh for 7-10 days. Keep them in the original container.",
  },
  {
    question: "Can I pause or cancel anytime?",
    answer:
      "Yes! Just message us on WhatsApp. You can pause, skip, or cancel with no questions asked.",
  },
  {
    question: "Where do you deliver?",
    answer: "We currently deliver across Hyderabad. More cities coming soon!",
  },
  {
    question: "Are your microgreens organic?",
    answer:
      "We use organic seeds and controlled indoor growing, which means zero pesticides needed.",
  },
];
