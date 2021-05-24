import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { CATEGORY_TITLE_FIELD } from "./CategoryTitle";

export const CategoryShow = (props: ListProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Categories"
          source="category.id"
          reference="Category"
        >
          <TextField source={CATEGORY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Image" source="image" />
        <ReferenceField
          label="ParentId"
          source="category.id"
          reference="Category"
        >
          <TextField source={CATEGORY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Title" source="tile" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
