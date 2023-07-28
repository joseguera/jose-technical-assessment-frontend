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
    brand: "Apple",
    title: "iPhone 9",
    price: 549,
    quantity: 0,
    stock: 10,
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    ],
    description: "An apple mobile which is nothing like apple",
    features: ["feature 1", "feature 2", "feature 3", "feature 4"]
  },
  {
    id: 2,
    brand: "Apple",
    title: "iPhone X",
    price: 899,
    quantity: 0,
    stock: 10,
    thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/2/1.jpg",
      "https://i.dummyjson.com/data/products/2/2.jpg",
      "https://i.dummyjson.com/data/products/2/3.jpg",
      "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    ],
    description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    features: ["feature 1", "feature 2", "feature 3", "feature 4"]
  },
  {
    id: 3,
    brand: "Samsung",
    title: "Samsung Universe 9",
    price: 1249,
    quantity: 0,
    stock: 10,
    thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
    images: ["https://i.dummyjson.com/data/products/3/1.jpg"],
    description:
      "Samsung's new variant which goes beyond Galaxy to the Universe",
    features: ["feature 1", "feature 2", "feature 3", "feature 4"]
  },
  {
    id: 4,
    brand: "OPPO",
    title: "OPPOF19",
    price: 280,
    quantity: 0,
    stock: 10,
    thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/4/1.jpg",
      "https://i.dummyjson.com/data/products/4/2.jpg",
      "https://i.dummyjson.com/data/products/4/3.jpg",
      "https://i.dummyjson.com/data/products/4/4.jpg",
    ],
    description: "OPPO F19 is officially announced on April 2021.",
    features: ["feature 1", "feature 2", "feature 3", "feature 4"]
  },
  {
    id: 5,
    brand: "Huawei",
    title: "Huawei P30",
    price: 499,
    quantity: 0,
    stock: 10,
    thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/5/1.jpg",
      "https://i.dummyjson.com/data/products/5/2.jpg",
      "https://i.dummyjson.com/data/products/5/3.jpg",
    ],
    description:
      "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    features: ["feature 1", "feature 2", "feature 3", "feature 4"]
  }
];
