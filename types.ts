export interface Product {
  id: string;
  compnay: string;
  chemical: string;
  description?: string;
  price?: string;
  isFeatured: boolean;
  imageUrl: string;
  categoryId: string;
  crop: Array<any>;
  dose: Array<String>;
  targetPest: Array<String>;
  packing: string;
};