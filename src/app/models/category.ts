export class ModelCategory {
  _id!: string;
  name!: string;
  description!: string;
  icon!: string | File;
  constructor() { }
}
export interface ApiResponseCategory {
  result: ModelCategory[];
}
