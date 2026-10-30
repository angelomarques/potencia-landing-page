// To add a new sample to the portfolio:
// 1. Place your image file in public/ai-content/
// 2. Add an entry to the aiContentSamples array below.

export type AiContentCategory =
  | "Product photo"
  | "Lifestyle"
  | "Social post"
  | "Short video";

export type AiContentSample = {
  src: string;
  alt: string;
  caption: string;
  category: AiContentCategory;
  before?: string;
};

export const aiContentSamples: AiContentSample[] = [
  {
    src: "/ai-content/butter-dish-kitchen.jpg",
    alt: "Ceramic butter dish styled on a cosy wooden Irish-style kitchen dresser with plates and kitchenware",
    caption: "Ceramic butter dish styled on a cosy kitchen dresser",
    category: "Lifestyle",
  },
  {
    src: "/ai-content/lavender-pillow-bedside.jpg",
    alt: "Lavender pillow mist and room mist bottles styled on a calm bedside table beside warm lamp lighting",
    caption: "Lavender pillow mist and room mist on a calm bedside table",
    category: "Lifestyle",
  },
];
