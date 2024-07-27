import { ProductDTO } from "./product.dto";

export interface AllProductsDTO {
  data: ProductDTO[];
  count: number;
}
