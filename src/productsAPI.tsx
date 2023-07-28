import productImages from "./assets/images";
interface ProductsItem {
  id: number;
  brand: string;
  title: string;
  price: number;
  quantity: number;
  stock: number;
  thumbnail: string;
  images: string[];
  description: string;
  features: string[];
}

export const products: Array<ProductsItem> = [
  {
    id: 1,
    brand: "Off-White",
    title: "Out Of Office \"Ooo\" sneakers",
    price: 775,
    quantity: 0,
    stock: 10,
    thumbnail: productImages.product_1_thumb,
    images: [
      productImages.product_1_1,
      productImages.product_1_2,
      productImages.product_1_3,
      productImages.product_1_4
    ],
    description: "Energize your look with a fresh take on heritage adidas style. The adidas Daily 3.0 Shoes cut a classic profile with a modern suede upper. Your walk across campus or commute across town has never looked or felt this good.",
    features: ["Regular fit", "Lace closure", "Rubber outsole with vulcanized look", "Imported"]
  },
  {
    id: 2,
    brand: "Nike",
    title: "Nike Gamma Force",
    price: 200,
    quantity: 0,
    stock: 10,
    thumbnail: productImages.product_2_thumb,
    images: [
      productImages.product_2_1,
      productImages.product_2_2,
      productImages.product_2_3,
      productImages.product_2_4
    ],
    description: "Energize your look with a fresh take on heritage adidas style. The adidas Daily 3.0 Shoes cut a classic profile with a modern suede upper. Your walk across campus or commute across town has never looked or felt this good.",
    features: ["Regular fit", "Lace closure", "Rubber outsole with vulcanized look", "Imported"]
  },
  {
    id: 3,
    brand: "Nike",
    title: "Cosmic Unity 3",
    price: 160,
    quantity: 0,
    stock: 10,
    thumbnail: productImages.product_3_thumb,
    images: [
      productImages.product_3_1,
      productImages.product_3_2,
      productImages.product_3_3,
      productImages.product_3_4
    ],
    description:
      "Energize your look with a fresh take on heritage adidas style. The adidas Daily 3.0 Shoes cut a classic profile with a modern suede upper. Your walk across campus or commute across town has never looked or felt this good.",
    features: ["Regular fit", "Lace closure", "Rubber outsole with vulcanized look", "Imported"]
  },
  {
    id: 4,
    brand: "adidas",
    title: "DAILY 3.0 SHOES",
    price: 98.99,
    quantity: 0,
    stock: 10,
    thumbnail: productImages.product_4_thumb,
    images: [
      productImages.product_4_1,
      productImages.product_4_2,
      productImages.product_4_3,
      productImages.product_4_4
    ],
    description: "Energize your look with a fresh take on heritage adidas style. The adidas Daily 3.0 Shoes cut a classic profile with a modern suede upper. Your walk across campus or commute across town has never looked or felt this good.",
    features: ["Regular fit", "Lace closure", "Rubber outsole with vulcanized look", "Imported"]
  }
];
