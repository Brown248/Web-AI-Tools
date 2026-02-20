export interface AITool {
  id: string;
  slug: string;
  name: string;
  logoUrl: string;
  description: string;
  longDescription: string;
  origin: string; 
  category: string;
  priceModel: string;
  isFree: boolean;
  externalUrl: string;
  rating: number; 
  reviewCount: number;
  updatedAt: string;
  features: string[];
  pros: string[];
  cons: string[];
  steps: { title: string; desc: string }[];
  prompts: { 
    purpose: string; 
    promptTh: string; 
    promptEn: string; 
  }[]; 
  faqs: { question: string; answer: string }[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  category: string;
  readTime: string;
  author: string;
}