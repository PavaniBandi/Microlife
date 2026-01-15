// Centralized configuration - easy to update contact info, pricing, etc.
export const config = {
  brand: "MicroLife",
  tagline: "Living nutrition, grown to order.",
  location: "Hyderabad",

  contact: {
    whatsapp: "917207487757",
    whatsappLink: "https://wa.me/917207487757",
    instagram: "microlife_by_greeneryguy",
    instagramLink: "https://www.instagram.com/microlife_by_greeneryguy",
  },

  pricing: {
    monthly: 799,
    deliveriesPerMonth: 4,
    currency: "₹",
  },

  harvestDays: ["Tue", "Thu", "Sat"],
};

export const routes = {
  home: "/",
  products: "/products",
  subscription: "/subscription",
};
