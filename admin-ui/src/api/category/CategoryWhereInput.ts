import { CategoryWhereUniqueInput } from "./CategoryWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CategoryWhereInput = {
  categories?: CategoryWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  image?: StringNullableFilter;
  parentId?: CategoryWhereUniqueInput;
  tile?: StringNullableFilter;
};
