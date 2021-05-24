import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  categoryIds?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  name?: SortOrder;
  size?: SortOrder;
  sku?: SortOrder;
  updatedAt?: SortOrder;
};
