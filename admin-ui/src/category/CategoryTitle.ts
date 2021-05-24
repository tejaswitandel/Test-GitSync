import { Category as TCategory } from "../api/category/Category";

export const CATEGORY_TITLE_FIELD = "tile";

export const CategoryTitle = (record: TCategory) => {
  return record.tile;
};
