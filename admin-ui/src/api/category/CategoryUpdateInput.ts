import { CategoryWhereUniqueInput } from "./CategoryWhereUniqueInput";

export type CategoryUpdateInput = {
  categories?: CategoryWhereUniqueInput;
  description?: string | null;
  image?: string | null;
  parentId?: CategoryWhereUniqueInput | null;
  tile?: string | null;
};
