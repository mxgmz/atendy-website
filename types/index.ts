export interface ContactFormData {
  name: string;
  email: string;
  whatsapp: string;
  businessType: string;
  appointmentRange: string;
  message?: string;
}

export interface TestimonialType {
  name: string;
  business: string;
  image: string;
  rating: number;
  quote: string;
}

export interface PricingPlan {
  name: string;
  price: number;
  period: string;
  description: string;
  features: {
    text: string;
    included: boolean;
  }[];
  cta: string;
  popular: boolean;
}
