export interface CartDTO {
  _id: string;
  userId: string;
  products: Product[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Product {
  productId: string;
  title: string;
  productColor: string;
  productSize: string;
  img: string;
  brand: string;
  price: number;
  quantity: number;
  _id: string;
}
