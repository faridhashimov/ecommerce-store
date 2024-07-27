import { ReviewDTO } from "./review.dto";

export interface ProductDTO {
  _id: string;
  title: string;
  desc: string;
  brand: string;
  img: string[];
  category: string[];
  gender: { type: String };
  size: string[];
  color: string[];
  price: number;
  status: string[];
  inStock: boolean;
  reviews: ReviewDTO[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
