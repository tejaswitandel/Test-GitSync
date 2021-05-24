import { CategoryWhereUniqueInput } from "./CategoryWhereUniqueInput";

export type Category = {
  categories?: CategoryWhereUniqueInput;
  createdAt: Date;
  description: string | null;
  id: string;
  image: string | null;
  parentId?: CategoryWhereUniqueInput | null;
  tile: string | null;
  updatedAt: Date;
};
