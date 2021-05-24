import { SortOrder } from "../../util/SortOrder";

export type CategoryOrderByInput = {
  categoriesId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  parentIdId?: SortOrder;
  tile?: SortOrder;
  updatedAt?: SortOrder;
};
