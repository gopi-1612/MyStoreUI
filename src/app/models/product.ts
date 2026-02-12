export interface ProductSize {
  id?: number;
  sizeName: string;
  stock: number;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
  sizes?: ProductSize[];
}