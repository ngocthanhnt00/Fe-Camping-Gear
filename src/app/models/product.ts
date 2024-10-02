import { ModelCategory } from "./category";

interface Installment {
  name: string;
  value: number;
}

export class ModelProducts {
  _id!: number;
  name!: string;
  brand!: string;
  img!: string;
  priceNew!: number;
  priceOld!: number;
  star!: number;
  quantity!: string;
  rateCount!: number;
  promo!: Installment;
  masp!: string;
  description!: string
  categoryId!: ModelCategory
  constructor() {
  }
}

export interface ApiResponseProduct {
  result: ModelProducts[];
}
